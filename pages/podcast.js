import { Component, Fragment } from "react";
import Head from "next/head";
import NextSeo from "next-seo";
import fetch from "isomorphic-unfetch";
// import ReactMarkdown from 'react-markdown/';

// import helpers from '../helpers';
import WithRecentsSidebar from "../components/WithRecentsSidebar";
import ResponsiveWidthContainer from "../components/ResponsiveWidthContainer";
import ArticleCardGrid from "../components/ArticleCardGrid";
// import Title from '../components/Title';
// import CategoryTagList from '../components/CategoryTagList';
// import AboutAuthor from '../components/AboutAuthor';
// import SocialShare from '../components/SocialShare';

const seoConfig = {
	title: `The Flightless Nerd Podcast | Flightless Nerd`,
	description:
		"Flightless Nerd is a community for people who love video game news, reviews, and blogs. Top ten lists every Friday.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `https://www.flightlessnerd.com/podcast`,
		title: `The Flightless Nerd Podcast | Flightless Nerd`,
		description:
			"Flightless Nerd is a community for people who love video game news, reviews, and blogs. Top ten lists every Friday.",
		defaultImageWidth: 917,
		defaultImageHeight: 921,
		images: [
			{
				url:
					"https://www.flightlessnerd.com/static/images/Austrich_circle_cropped.png",
				width: 917,
				height: 921,
				alt: "Flightless Nerd"
			}
		],
		site_name: "Flightless Nerd"
	},
	twitter: {
		site: "@FlightlessNews",
		handle: "@FlightlessNews",
		cardType: "summary_large_image"
	}
};

class Podcast extends Component {
	static async getInitialProps({ query }) {
		const recentPosts = await fetch(
			`${process.env.HOST_URL || "/"}api/posts?limit=3`
		).then(res => res.json());

		const podcasts = await fetch(
			`${process.env.HOST_URL || "/"}api/posts/type/podcast`
		).then(res => res.json());

		return { recentPosts, podcasts };
	}

	render() {
		const { podcasts, recentPosts } = this.props;
		return (
			<Fragment>
				<Head>
					<title>Podcast</title>
				</Head>
				<NextSeo config={seoConfig} />
				<style jsx>{`
					.podcast__container {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-content: center;
						color: #333;
						font-family: Raleway;
						margin: 2rem 10px;
					}
					h1 {
						color: #333;
						font-family: Bangers;
						font-size: 2rem;
						letter-spacing: 3px;
						margin: 0 10px;
						text-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
					}
					@media (min-width: 576px) {
						h1 {
							font-size: 3rem;
							margin: 0;
						}
						.podcast__container {
							margin: 2rem 0;
						}
					}
				`}</style>
				<div className="podcast__container">
					<ResponsiveWidthContainer>
						<WithRecentsSidebar recents={recentPosts}>
							<h1>The Flightless Nerd Podcast</h1>
							<ArticleCardGrid posts={podcasts} count={0} />
						</WithRecentsSidebar>
					</ResponsiveWidthContainer>
				</div>
			</Fragment>
		);
	}
}

export default Podcast;
