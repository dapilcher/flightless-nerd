/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

const keystone = require("keystone");
const crypto = require('crypto');
const fetch = require('isomorphic-unfetch');

var Mailchimp = require('mailchimp-api-v3')

// var mailchimp = new Mailchimp(api_key);
// const getConfig = require('next/config');

// const { serverRuntimeConfig, publicRuntimeConfig } = require('next/config').getConfig();

// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {
	// Next request handler
	const handle = nextApp.getRequestHandler();

	keystoneApp.all('/api*', keystone.middleware.cors);

	// Get all posts

	keystoneApp.get("/api/posts", (req, res, next) => {
		let limit = 100;
		if (req.query && req.query.limit) {
			limit = parseInt(req.query.limit);
			console.log(`query limit = ${limit}`)
		}
		const Post = keystone.list("Post");
		Post.model
			.find()
			.where("state", "published")
			.populate('author')
			.populate('categories')
			.sort("-publishedDate")
			.limit(limit)
			.exec(function (err, results) {
				if (err) throw err;
				res.json(results);
			});
	});

	// Get post categories

	keystoneApp.get("/api/categories", (req, res, next) => {
		const PostCategory = keystone.list("PostCategory");
		PostCategory.model
			.find()
			.exec(function (err, results) {
				if (err) throw err;
				res.json(results);
			});
	});

	// Get post by id

	keystoneApp.get("/api/post/id/:id", (req, res, next) => {
		const Post = keystone.list("Post");
		const postId = req.params.id;
		Post.model
			.find()
			.where("_id", postId)
			.populate('author')
			.populate('categories')
			.exec(function (err, results) {
				if (err) res.json({ Error: err });
				res.json(results);
			});
	});

	// Get post by slug

	keystoneApp.get("/api/post/slug/:slug", (req, res, next) => {
		const Post = keystone.list("Post");
		const postSlug = req.params.slug;
		Post.model
			.find()
			.where("slug", postSlug)
			.populate('author')
			.populate('categories')
			.exec(function (err, results) {
				if (err) res.json({ Error: err });
				res.json(results);
			});
	});

	// Get author data and their posts

	keystoneApp.get("/api/author/:id", (req, res, next) => {
		const Author = keystone.list("Author");
		const Post = keystone.list("Post");
		const authorId = req.params.id;
		const author = Author.model
			.find()
			.where("_id", authorId)
			.exec(function (err, results) {
				if (err) res.json({ Error: err });
				res.json(results);
			});
		const posts = Post.model
			.find()
			.where("author", authorId)
			.exec(function (err, results) {
				if (err) res.json({ Error: err });
				return JSON.parse(results)
			});
		res.json({ ...author, posts })
	});

	// Contributor form submit

	keystoneApp.post("/api/contributor", (req, res, next) => {
		const Contributor = keystone.list("Contributor");
		console.log('in /api/contributor');


		if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.description || !req.body.releases) {
			console.log('incomplete data set');
			return res.status(418).send({ error: 'Please fill out all fields' });
		}

		const { firstName, lastName, email, description, releases } = req.body;
		const name = `${firstName} ${lastName}`;

		const data = {
			name,
			email,
			description,
			releases,
			submitDate: new Date(),
			contacted: false
		};
		// console.log(`data: ${JSON.stringify(data)}`)

		const newContributor = new Contributor.model();
		Contributor.updateItem(newContributor, data, error => {
			// console.log('update item');
			if (error) {
				// console.log(`update item error: ${JSON.stringify(error)}`)
				res.status(500).send({ error: error.detail });
			}
			else res.status(200).send({ status: 'success' });
		});
	});

	// Email subscriber form submit

	keystoneApp.post("/api/email", async (req, res, next) => {
		console.log('in /api/email')
		if (!req.body.email) res.send({ error: "Incomplete data set" });
		const { email } = req.body;
		// const data = {
		// 	email_address: email,
		// 	status: 'subscribed'
		// }

		const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
		// const mailchimpBaseUrl = process.env.MAILCHIMP_BASE_URL;

		try {
			// console.log('server try block');
			const listId = process.env.MAILCHIMP_LIST_ID;
			const emailHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');

			// let subscribed = false;

			const data = {
				email_address: email,
				status: "subscribed",
				status_if_new: "subscribed"
			}

			// check if member exists
			mailchimp.get(`/lists/${listId}/members/${emailHash}`)
				.then(response => {
					console.log(`\nMailchimp get response:\n${JSON.stringify(response)}\n`);
					if (response.status === "subscribed") {
						// subscribed = true;
						res.send({ error: `Email ${email} already subscribed` });
					} else {
						mailchimp.request({
							method: 'put',
							path: '/lists/{list_id}/members/{subscriber_hash}',
							path_params: {
								list_id: listId,
								subscriber_hash: emailHash
							},
							body: data,
						},
							(error, result) => {
								if (error) {
									console.log(`\nMailchimp put error:\n${JSON.stringify(error)}\n`);
									res.send({ error: error.title });
								}
								else {
									console.log(`\nMailchimp put success:\n${JSON.stringify(result)}\n`);
									res.send({ success: result })
								}
							}
						);
					}
				})
				.catch(error => {
					console.log(`\nMailchimp get catch:\n${error}\n`);
					// res.send({ error: `Error retrieving email` });
					mailchimp.request({
						method: 'put',
						path: '/lists/{list_id}/members/{subscriber_hash}',
						path_params: {
							list_id: listId,
							subscriber_hash: emailHash
						},
						body: data,
					},
						(error, result) => {
							if (error) {
								console.log(`\nMailchimp put error:\n${JSON.stringify(error)}\n`);
								res.send({ error: error.title });
							}
							else {
								console.log(`\nMailchimp put success:\n${JSON.stringify(result)}\n`);
								res.send({ success: result })
							}
						}
					);
				});

		} catch (error) {
			console.log(`\nMailchimp catch block:\n${error}\n`);
			res.send({ error: error.message })
		}
	});

	// Serve robotx.txt
	const robotsOptions = {
		root: __dirname + '/static/',
		headers: {
			'Content-Type': 'text/plain;charset=UTF-8',
		}
	};
	keystoneApp.get('/robots.txt', (req, res) => (
		res.status(200).sendFile('robots.txt', robotsOptions)
	));

	// Serve sitemap
	// const sitemapOptions = {
	// 	root: __dirname + '/static/',
	// 	headers: {
	// 		'Content-Type': 'text/xml;charset=UTF-8',
	// 	}
	// };

	// keystoneApp.get('/sitemap.xml', (req, res) => (
	// 	res.status(200).sendFile('sitemap.xml', sitemapOptions)
	// ));

	// Serve favicon
	// const faviconOptions = {
	// 	root: __dirname + '/static/'
	// };
	// keystoneApp.get('/favicon.ico', (req, res) => (
	// 	res.status(200).sendFile('favicon.ico', faviconOptions)
	// ));

	keystoneApp.get("/post/:slug", (req, res) => {
		const mergedQuery = Object.assign({}, req.query, req.params);
		console.log(`\nSlug URL: ${JSON.stringify(mergedQuery)}`);
		return nextApp.render(req, res, '/post', mergedQuery);
	})

	keystoneApp.get("*", (req, res) => {
		return handle(req, res);
	});
};
