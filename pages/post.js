import { Component, Fragment } from "react";
import Head from "next/head";
import NextSeo from "next-seo";
import fetch from "isomorphic-unfetch";
import ReactMarkdown from "react-markdown/";
import { FaTwitter, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

import helpers from "../helpers";
import WithRecentsSidebar from "../components/WithRecentsSidebar";
import ResponsiveWidthContainer from "../components/ResponsiveWidthContainer";
import Title from "../components/Title";
import CategoryTagList from "../components/CategoryTagList";
import AboutAuthor from "../components/AboutAuthor";
import SocialShare from "../components/SocialShare";
import Player from "../components/Player";
import Button from "../components/Button";
import PodcastServiceButtons from "../components/PodcastServiceButtons";

const createConfig = post => {
	const DEFAULT_DESC =
		"Flightless Nerd is a community for people who love video game news, reviews, and blogs. Top ten lists every Friday.";
	return {
		title: `${post.title} | Flightless Nerd`,
		description: !post.seo
			? DEFAULT_DESC
			: post.seo.description && post.seo.description !== ""
			? post.seo.description
			: DEFAULT_DESC,
		openGraph: {
			type: "article",
			locale: "en_US",
			url: `https://flightlessnerd.com/post/${post.slug}`,
			title: `${post.title}`,
			description: !post.seo
				? DEFAULT_DESC
				: post.seo.description
				? post.seo.description
				: DEFAULT_DESC,
			defaultImageWidth: 1200,
			defaultImageHeight: 1200,
			images: [
				post.image
					? {
							url: post.image.secure_url,
							width: post.image.width,
							height: post.image.height,
							alt: post.title
					  }
					: post.type === "podcast"
					? {
							url:
								"https://flightlessnerd.com/static/images/austrich_podcast_1280.jpg",
							width: 1280,
							height: 720,
							alt: post.title
					  }
					: {
							url:
								"https://flightlessnerd.com/static/images/Austrich_circle_cropped.png",
							width: 917,
							height: 921,
							alt: "Flightless Nerd"
					  }
			],
			site_name: "Flightless Nerd"
		},
		twitter: {
			site: "@FlightlessNews",
			handle: !post.author
				? "@FlightlessNews"
				: post.author.social && post.author.social.twitterHandle !== ""
				? post.author.social.twitterHandle
				: "@FlightlessNews",
			cardType: "summary_large_image"
		}
	};
};

const Post = ({ post }) => (
	<Fragment>
		{post.meta.requiresTwitter && (
			<Head>
				<script
					async
					src="https://platform.twitter.com/widgets.js"
					charset="utf-8"
				/>
			</Head>
		)}
		{post.meta.requiresReddit && (
			<Head>
				<script
					async
					src="//embed.redditmedia.com/widgets/platform.js"
					charset="UTF-8"
				/>
			</Head>
		)}
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
			p a,
			li > a,
			.post-img figcaption a {
				font-family: Raleway;
				color: #586cff;
			}
			li {
				font-family: Raleway;
			}
			p a:hover,
			li > a:hover,
			.post-img figcaption a:hover {
				color: #2539cc;
				text-decoration: underline;
			}
			.post-img {
				margin: 1rem 0;
				max-width: 100%;
				text-align: center;
			}
			.post-img img {
				max-width: 100%;
				max-height: 35rem;
				margin: 1rem 0;
				padding: 0;
				box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
			}
			.post-img figcaption {
				padding-top: 0.3rem;
				font-family: Raleway;
				color: #505050;
				font-style: italic;
				text-align: center;
			}
			p,
			.episode__host {
				font-family: Raleway;
				line-height: 1.8rem;
				font-size: 1.1rem;
				text-align: justify;
			}
			.post__content > h1,
			.post__content > h2,
			.post__content > h3,
			.post__content > h4,
			.post__content > h5,
			.post__content > h6,
			.post__content > p,
			.blockquote {
				color: #333;
				margin: 1rem 0;
				padding: 0 10px;
			}
			h1,
			h2,
			h3,
			h4,
			h5,
			h6,
			.blockquote {
				font-family: Montserrat;
			}
			.blockquote {
				color: #505050;
				border-left: 0.3rem solid #eb3e34;
				font-size: 1.5rem;
				font-style: italic;
				margin: 2rem 2rem;
			}
			.twitter-tweet {
				margin: 2rem auto !important;
			}
			p > em,
			li > em,
			figcaption > em {
				font-family: Montserrat;
				color: #eb3e34;
			}
			@media (min-width: 992px) {
				.blockquote {
					margin: 2rem 5rem;
				}
			}
			@media (min-width: 576px) {
				.embed-container {
					margin-bottom: 3rem;
				}
				.post__content > h1,
				.post__content > h2,
				.post__content > h3,
				.post__content > h4,
				.post__content > h5,
				.post__content > h6,
				.post__content > p {
					padding: 0;
				}
				.post-img {
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
			.social-share__wrapper {
				display: flex;
			}
			.post__img {
				max-width: 100%;
				border: none;
				border-bottom: 0.3rem solid #eb3e34;
				margin: 0;
				margin-bottom: 1rem;
				padding: 0;
			}
			.post__title {
				padding: 0 10px;
			}
			.more-posts__button__container {
				display: grid;
				margin-top: 1rem;
			}
			.more-posts__button {
				place-self: center start;
			}
			@media (min-width: 576px) {
				.more-posts__button {
					margin: 0;
				}
				.post__title {
					padding: 0;
				}
				.post__social-share {
					padding: 1rem 0;
				}
			}
			@media (min-width: 768px) {
				.post__img {
					max-width: 100%;
					border-bottom-width: 0.5rem;
				}
			}
		`}</style>
		{post.image && post.image.secure_url ? (
			<img className="post__img" src={post.image.secure_url} alt={post.title} />
		) : post.type === "podcast" ? (
			<img
				className="post__img"
				src="https://res.cloudinary.com/flightlessnerd/image/upload/v1553121319/flightlessnerd/Ostrich_for_web.jpg"
				alt={post.title}
			/>
		) : (
			""
		)}
		<div className="post__title">
			<CategoryTagList categories={post.categories} />
			<Title
				title={`${
					post.type === "podcast" && post.epNumber
						? `Ep ${post.epNumber} - `
						: ""
				}${post.title}`}
				subtitle={`${helpers.toRelativeTime(post.publishedDate)}${
					post.author
						? ` by ${post.author.name.first} ${post.author.name.last}`
						: ""
				}`}
			/>
		</div>
		<div className="social-share__wrapper">
			<SocialShare
				title={post.title}
				slug={post.slug}
				img={
					post.image && post.image.secure_url
						? post.image.secure_url
						: post.type === "podcast"
						? "https://flightlessnerd.com/static/images/austrich_podcast_1280.jpg"
						: "https://flightlessnerd.com/static/images/Austrich_circle_cropped.png"
				}
			/>
		</div>
		{post.audioUrl && (
			<>
				<Player episode={post} />
				<PodcastServiceButtons style={{ margin: "2rem 0" }} />
				<h2>Show Notes</h2>
			</>
		)}
		{post.content.extended.md ? (
			<ReactMarkdown
				className="post__content"
				escapeHtml={false}
				source={post.content.extended.md}
			/>
		) : (
			<div
				className="post__content"
				dangerouslySetInnerHTML={{ __html: post.content.extended }}
			/>
		)}
		{post.hosts && (
			<div className="episode__hosts">
				{post.hosts && post.hosts.length > 0 && <h2>Hosts</h2>}
				{post.hosts &&
					post.hosts.map((host, i) => (
						<div className="episode__host" key={`${post.slug}-host-${i}`}>
							{`${host.name.first} ${host.name.last}`}
							{host.social && host.social.twitterHandle && (
								<Fragment>
									{" - "}
									<FaTwitter />{" "}
									<a
										target="_blank"
										href={`https://twitter.com/${host.social.twitterHandle}`}
									>{`@${host.social.twitterHandle}`}</a>
								</Fragment>
							)}
						</div>
					))}
			</div>
		)}
		{post.type === "podcast" && (
			<div className="more-posts__button__container">
				<div className="more-posts__button">
					<Link href="/podcast">
						<Button>
							More episodes <FaArrowRight />
						</Button>
					</Link>
				</div>
			</div>
		)}
	</Fragment>
);

class PostContainer extends Component {
	static async getInitialProps({ query }) {
		let post = {};

		if (query.id) {
			post = await fetch(
				`${process.env.HOST_URL || "/"}api/post/id/${query.id}`
			).then(res => res.json());
		} else if (query.slug) {
			post = await fetch(
				`${process.env.HOST_URL || "/"}api/post/slug/${query.slug}`
			).then(res => res.json());
		}
		const recentPosts = await fetch(
			`${process.env.HOST_URL || "/"}api/posts?limit=3`
		).then(res => res.json());

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
									{post[0].author && <AboutAuthor author={post[0].author} />}
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
