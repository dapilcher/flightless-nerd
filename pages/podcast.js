import { Component, Fragment } from "react";
import Head from "next/head";
import NextSeo from "next-seo";
import fetch from "isomorphic-unfetch";

import PodcastList from "../components/PodcastList";
import SectionDivider from "../components/SectionDivider";
import Player from "../components/Player";
import WithRecentsSidebar from "../components/WithRecentsSidebar";
import PodcastServiceButtons from "../components/PodcastServiceButtons";

const seoConfig = {
	title: `The Flightless Nerd Podcast | Flightless Nerd`,
	description:
		"Flightless Nerd is a community for people who love video game news, reviews, and blogs. Top ten lists every Friday.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `https://flightlessnerd.com/podcast`,
		title: `The Flightless Nerd Podcast | Flightless Nerd`,
		description:
			"Flightless Nerd is a community for people who love video game news, reviews, and blogs. Top ten lists every Friday.",
		defaultImageWidth: 917,
		defaultImageHeight: 921,
		images: [
			{
				url:
					"https://flightlessnerd.com/static/images/austrich_podcast_1280.jpg",
				width: 1280,
				height: 720,
				alt: "The Flightless Nerd Podcast"
			},
			{
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
		handle: "@FlightlessNews",
		cardType: "summary_large_image"
	}
};

class Podcast extends Component {
	static async getInitialProps({ query }) {
		const podcasts = await fetch(
			`${process.env.HOST_URL || "/"}api/posts/type/podcast`
		).then(res => res.json());

		const recents = await fetch(
			`${process.env.HOST_URL || "/"}api/posts?limit=3`
		).then(res => res.json());

		return { podcasts, recents };
	}

	constructor(props) {
		super(props);
		let currentEpisode = props.podcasts ? props.podcasts[0].epNumber : 1;
		this.state = {
			currentEpisode
		};
	}

	updateCurrentEpisode = epNumber => {
		this.setState({ currentEpisode: epNumber });
	};

	getNextEpisode = () => {
		const newEp = this.state.currentEpisode - 1;
		if (
			newEp <= 0 ||
			this.props.podcasts.filter(p => p.epNumber === newEp).length < 1
		)
			return;
		else this.updateCurrentEpisode(newEp);
	};

	render() {
		const { podcasts, recents } = this.props;
		return (
			<Fragment>
				<Head>
					<title>The Flightless Nerd Podcast</title>
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
				<WithRecentsSidebar recents={recents}>
					<img
						className="podcast__image"
						src="https://flightlessnerd.com/static/images/austrich_podcast_1280.jpg"
					/>
					<Player
						episode={
							podcasts.filter(
								ep => ep.epNumber === this.state.currentEpisode
							)[0]
						}
						onEnd={this.getNextEpisode}
					/>
					<div className="podcast__container">
						<PodcastServiceButtons />
						<SectionDivider text="Episodes" />
						<PodcastList
							posts={podcasts}
							count={0}
							updateCurrentEpisode={this.updateCurrentEpisode}
						/>
					</div>
				</WithRecentsSidebar>
			</Fragment>
		);
	}
}

export default Podcast;
