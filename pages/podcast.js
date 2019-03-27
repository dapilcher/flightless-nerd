import { Component, Fragment } from "react";
import Head from "next/head";
import NextSeo from "next-seo";
import fetch from "isomorphic-unfetch";
import { FaItunes } from "react-icons/fa";

import PodcastList from "../components/PodcastList";
import Button from "../components/Button";
import SectionDivider from "../components/SectionDivider";

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
					"https://res.cloudinary.com/flightlessnerd/image/upload/v1553121319/flightlessnerd/Ostrich_for_web.jpg",
				width: 1280,
				height: 720,
				alt: "The Flightless Nerd Podcast"
			},
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
		const podcasts = await fetch(
			`${process.env.HOST_URL || "/"}api/posts/type/podcast`
		).then(res => res.json());

		return { podcasts };
	}

	render() {
		const { podcasts } = this.props;
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
					.podcast__image {
						max-width: 100%;
						border-bottom: 0.3rem solid #eb3e34;
					}
					@media (min-width: 768px) {
						.podcast__image {
							border-bottom-width: 0.5rem;
						}
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
				<img
					className="podcast__image"
					src="https://res.cloudinary.com/flightlessnerd/image/upload/v1553121319/flightlessnerd/Ostrich_for_web.jpg"
				/>
				<div className="podcast__container">
					<div className="buttons">
						<Button theme="blue" style={{ fontSize: "1.2rem" }}>
							<FaItunes style={{ fontSize: "2rem" }} />
							{" Listen on iTunes"}
						</Button>
					</div>
					<SectionDivider text="Episodes" />
					<PodcastList posts={podcasts} count={0} />
				</div>
			</Fragment>
		);
	}
}

export default Podcast;
