import { Fragment } from "react";
import Head from "next/head";
import NextSeo from "next-seo";

import ContributeForm from "../components/ContributeForm";

const seoConfig = {
	title: "Flightless Nerd | Contribute",
	description:
		"Join the Flightless Nerd team and enjoy the creative freedom to share your thoughts and opinions as a contributor.",
	openGraph: {
		type: "article",
		locale: "en_US",
		url: `https://flightlessnerd.com/contribute`,
		title: "Flightless Nerd | Contribute",
		description:
			"Join the Flightless Nerd team and enjoy the creative freedom to share your thoughts and opinions as a contributor.",
		defaultImageWidth: 1200,
		defaultImageHeight: 1200,
		images: {
			url:
				"https://flightlessnerd.com/static/images/Austrich_circle_cropped.png",
			width: 917,
			height: 921,
			alt: "Flightless Nerd"
		},
		site_name: "Flightless Nerd"
	},
	twitter: {
		site: "@FlightlessNews",
		handle: "@FlightlessNews",
		cardType: "summary"
	}
};

const Contribute = () => (
	<Fragment>
		<Head>
			<title>Flightless Nerd | Contribute</title>
		</Head>
		<NextSeo config={seoConfig} />
		<style jsx>{`
			.contribute__container {
				font-family: Raleway;
				margin: 1rem 0;
				padding: 0 10px;
			}
			h1 {
				color: #333;
				font-family: Bangers;
				font-size: 3rem;
				letter-spacing: 3px;
				text-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
			}
			@media (min-width: 576px) {
				.contribute__container {
					padding: 0;
				}
			}
		`}</style>
		<div className="contribute__container">
			<h1>Contribute</h1>
			<p>
				Flightless Nerd is looking for creative gamers to contribute to our
				community! Our goal on this site is to provide a creative outlet for
				fellow nerds and geeks to express their opinions and thoughts on the
				newest games, movies, and technology. We have limited openings so be
				sure to get your name in the running quickly.
			</p>
			<p>
				Contributors should be able to produce consistent content without much
				direction and follow guidelines set by administrators. The creative
				freedom is yours at Flightless Nerd and all ideas are welcome!
			</p>
			<p>
				Please submit the sign up form below and direct any question to{" "}
				<a href="mailto:flightlessnerdnews@gmail.com">
					flightlessnerdnews@gmail.com​
				</a>
				.
			</p>
			<ContributeForm />
		</div>
	</Fragment>
);

export default Contribute;
