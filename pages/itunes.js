import { Component, Fragment } from "react";
import Head from "next/head";
import NextSeo from "next-seo";
import Link from "next/link";
import getConfig from "next/config";
import getAnalytics from "../utils/getAnalytics";
import Button from "../components/Button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const { publicRuntimeConfig: envars } = getConfig();

const analytics = getAnalytics();

const seoConfig = {
	title: `The Flightless Nerd Podcast | Flightless Nerd`,
	description:
		"Flightless Nerd is a community for people who love video game news, reviews, and blogs. Top ten lists every Friday.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `https://flightlessnerd.com/itunes`,
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

class Itunes extends Component {
	componentWillMount() {
		console.log("mounted");
		if (typeof window !== "undefined") {
			console.log("window!");
			if (/iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream) {
				analytics.logEvent("Redirect", "iTunes landing page auto redirect");
				window.location = envars.podcastItunesUrl;
			}
		}
	}
	render() {
		return (
			<Fragment>
				<Head>
					<title>The Flightless Nerd Podcast</title>
				</Head>
				<NextSeo config={seoConfig} />
				<style jsx>{`
					.itunes__page__wrapper {
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: column;
						align-items: center;
						font-family: Raleway;
						font-size: 1.2rem;
						padding: 2rem;
						text-align: center;
					}
					.button__wrapper {
						display: flex;
						flex-direction: column;
						align-items: center;
						margin-bottom: 2rem;
					}
					em {
						font-size: 1rem;
					}
				`}</style>
				<div className="itunes__page__wrapper">
					<div className="button__wrapper">
						<p>
							Do you use iTunes, or another podcast app like Castbox, Pocket
							Casts, etc?*
						</p>
						<a href={envars.podcastItunesUrl}>
							<Button
								theme="blue"
								onClick={() =>
									analytics.logEvent(
										"Click",
										"iTunes landing clickthrough to iTunes"
									)
								}
							>
								Open in App <FaArrowRight style={{ fontSize: "1rem" }} />
							</Button>
						</a>
					</div>
					<div className="button__wrapper">
						<p>Otherwise, you can still stick around and listen on our site!</p>
						<Link href="/podcast" prefetch>
							<a>
								<Button
									onClick={() =>
										analytics.logEvent(
											"Click",
											"iTunes landing clickthrough to podcast page"
										)
									}
								>
									<FaArrowLeft style={{ fontSize: "1rem" }} /> Stay here
								</Button>
							</a>
						</Link>
					</div>
					<p>
						<em>
							* We are currently only on iTunes, sorry Spotify/Google/Stitcher
							users
						</em>
					</p>
				</div>
			</Fragment>
		);
	}
}

export default Itunes;
