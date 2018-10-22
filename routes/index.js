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

// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {
	// Next request handler
	const handle = nextApp.getRequestHandler();

	keystoneApp.all('/api*', keystone.middleware.cors);

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

	keystoneApp.get("/api/categories", (req, res, next) => {
		const PostCategory = keystone.list("PostCategory");
		PostCategory.model
			.find()
			.exec(function (err, results) {
				if (err) throw err;
				res.json(results);
			});
	});

	keystoneApp.get("/api/post/:id", (req, res, next) => {
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

	keystoneApp.get("*", (req, res) => {
		return handle(req, res);
	});
};
