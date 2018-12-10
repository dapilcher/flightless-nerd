import { Component, Fragment } from "react";
import Head from 'next/head';
import NextSeo from 'next-seo';
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown/';

import helpers from '../helpers';
import WithRecentsSidebar from '../components/WithRecentsSidebar';
import ResponsiveWidthContainer from '../components/ResponsiveWidthContainer'
import Title from '../components/Title';
import CategoryTagList from '../components/CategoryTagList';
import AboutAuthor from '../components/AboutAuthor';
import SocialShare from '../components/SocialShare';

const createConfig = post => {
	return {
		title: `${post.title}`,
		description: !post.seo ?
			'Flightless Nerd is a community for people who love video game news, reviews, and blogs. Top ten lists every Friday.' :
			(post.seo.description && post.seo.description !== "") ?
				post.seo.description :
				'Flightless Nerd is a community for people who love video game news, reviews, and blogs. Top ten lists every Friday.',
		openGraph: {
			type: 'article',
			locale: 'en_US',
			url: `https://www.flightlessnerd.com/post?id=${post._id}`,
			title: `${post.title}`,
			description: !post.seo ?
				'Flightless Nerd is a community for people who love video game news, reviews, and blogs. Top ten lists every Friday.' :
				post.seo.description ?
					post.seo.description :
					'Flightless Nerd is a community for people who love video game news, reviews, and blogs. Top ten lists every Friday.',
			defaultImageWidth: 1200,
			defaultImageHeight: 1200,
			images: [post.image ?
				{
					url: post.image.secure_url,
					width: post.image.width,
					height: post.image.height,
					alt: post.title,
				} :
				{
					url: 'https://www.flightlessnerd.com/static/images/Austrich_circle_cropped.png',
					width: 917,
					height: 921,
					alt: 'Flightless Nerd',
				},
			],
			site_name: 'Flightless Nerd',
		},
		twitter: {
			site: '@FlightlessNews',
			handle: !post.author ?
				'@FlightlessNews' :
				(post.author.social && post.author.social.twitterHandle !== "") ?
					post.author.social.twitterHandle :
					'@FlightlessNews',
			cardType: 'summary_large_image',
		},
	}
};

const Post = ({ post }) => (
	<Fragment>
		<style jsx global>{`
		iframe {
			max-width: 100%;
		}
		.embed-container {
			margin-top: 1rem;
			margin-bottom: 2rem;
			position: relative;
			padding-bottom: 56.25%;
			height: 0;
			// overflow: hidden;
			max-width: 100%;
		}
		.embed-container iframe,
		.embed-container object,
		.embed-container embed {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		hr {
			margin: 2rem 0;
		}
		p a {
			color: #586CFF;
		}
		p a:hover {
			color: #2539CC;
			text-decoration: underline;
		}
		img {
			max-width: 100%;
			padding: 0;
			// border: 0.5rem solid #FFE838;
			margin: 0.5rem 0;
			box-shadow: 0 0 20px rgba(0,0,0,0.5);
		}
		p {
			font-family: Raleway;
			line-height: 1.8rem;
			font-size: 1.1rem;
			text-align: justify;
		}
		p, h1, h2, h3, h4, h5, h6 {
			color: #333;
			margin: 1rem 0;
			padding: 0 10px;
		}
		h1, h2, h3, h4, h5, h6 {
			font-family: Montserrat;
		}
		@media (min-width: 576px) {
			iframe {
				margin: 1rem 0;
			}
			.embed-container {
				margin-bottom: 3rem;
			}
			p, h1, h2, h3, h4, h5, h6 {
				padding: 0;
			}
			img {
				box-shadow: 0 0 20px rgba(0,0,0,0.5);
				padding: 1rem;
				border-width: 0.5rem;
			}
		}
		`}</style>
		<style jsx>{`
		.post__container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: #333;
		}
		.post__social-share {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
			grid-gap: 1rem;
			padding: 1rem 10px;
		}
		.post__social-share > * {
			outline: none;
		}
		.post__social-share > *:hover:not(:active) {
			opacity: 0.75;
		}
		.post__social-share__button__wrapper {
			cursor: pointer;
		}
		.post__img {
			max-width: 100%;
			border: none;
			border-bottom: 0.3rem solid #EB3E34;
			margin: 0;
			margin-bottom: 1rem;
			padding: 0;
		}
		.post__title {
			padding: 0 10px;
		}
		@media (min-width:576px) {
			.post__title {
				padding: 0;
			}
			.post__social-share {
				padding: 1rem 0;
			}
		}
		@media (min-width:768px) {
			.post__img {
				max-width: 100%;
				border-bottom-width: 0.5rem;
			}
			.post__container {
				// max-width: 75%;
			}
		}
		`}</style>
		{(post.image && post.image.secure_url) ?
			<img className="post__img" src={post.image.secure_url} alt={post.title} /> :
			''}
		<div className="post__title">
			<CategoryTagList categories={post.categories} />
			<Title title={post.title} subtitle={`${helpers.toRelativeTime(post.publishedDate)}${post.author ? ` by ${post.author.name.first} ${post.author.name.last}` : ''}`} />
		</div>
		<SocialShare title={post.title} id={post._id} />
		{post.content.extended.md ?
			<ReactMarkdown
				className="post__content"
				escapeHtml={false}
				source={post.content.extended.md} /> :
			<div className="post__content" dangerouslySetInnerHTML={{ __html: post.content.extended }} />}
	</Fragment>
);

class PostContainer extends Component {
	static async getInitialProps({ query }) {
		let post = {};

		if (query.id) {
			post = await fetch(`${process.env.HOST_URL || '/'}api/post/id/${query.id}`).then(res => res.json());
		} else if (query.slug) {
			post = await fetch(`${process.env.HOST_URL || '/'}api/post/slug/${query.slug}`).then(res => res.json());
		}
		const recentPosts = await fetch(`${process.env.HOST_URL || '/'}api/posts?limit=3`).then(res => res.json());

		const seoConfig = createConfig(post[0]);

		return { post, recentPosts, seoConfig };
	}

	render() {
		const { post, recentPosts, seoConfig } = this.props;
		return (
			<Fragment>
				<Head>
					<title>{post[0].title}</title>
				</Head>
				<NextSeo config={seoConfig} />
				<style jsx>{`
			.post__container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				color: #333;
			}
			`}</style>
				<div className="post__container">
					<ResponsiveWidthContainer>
						<WithRecentsSidebar recents={recentPosts}>
							{post.Error ? (
								<p>Could not find post</p>
							) : (
									<>
										<Post post={post[0]} />
										<AboutAuthor author={post[0].author} />
									</>
								)}
						</WithRecentsSidebar>
					</ResponsiveWidthContainer>
				</div>
			</Fragment>
		);
	}
}

export default PostContainer;
