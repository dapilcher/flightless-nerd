import { Fragment } from "react";
import getConfig from "next/config";
import { FaItunes, FaSpotify, FaGooglePlay, FaPodcast } from "react-icons/fa";
import getAnalytics from "../utils/getAnalytics";
import Button from "../components/Button";
const { publicRuntimeConfig: envars } = getConfig();
const analytics = getAnalytics;

const podcastServices = [
	{
		title: "iTunes",
		theme: { light: "#EA4CC0", dark: "#BB3D9A" },
		url: envars.podcastItunesUrl,
		icon: <FaItunes style={{ fontSize: "1.5rem" }} />
	},
	{
		title: "Spotify",
		theme: { light: "#1ED761", dark: "#18AC4E" },
		url: envars.podcastSpotifyUrl,
		icon: <FaSpotify style={{ fontSize: "1.5rem" }} />
	},
	{
		title: "Google",
		theme: { light: "#F55A34", dark: "#C4482A" },
		url: envars.podcastGoogleUrl,
		icon: <FaGooglePlay style={{ fontSize: "1.5rem" }} />
	},
	{
		title: "Stitcher",
		theme: "blue",
		url: envars.podcastStitcherUrl,
		icon: <FaPodcast style={{ fontSize: "1.5rem" }} />
	}
];

const ServiceButton = ({ title, url, icon, theme }) => {
	return (
		url && (
			<Button
				href={url}
				target="_blank"
				title={title}
				theme={theme}
				style={{ fontSize: "1.2rem" }}
				onClick={() =>
					analytics.logEvent("Click", `Podcast page clickthrough to ${title}`)
				}
			>
				{icon !== null && icon}
				{` ${title}`}
			</Button>
		)
	);
};

const PodcastServiceButtons = ({ style }) => (
	<Fragment>
		<style jsx>{`
			.buttons {
				display: grid;
				grid-gap: 5px;
				grid-template-columns: auto auto auto auto;
				place-items: center;
				max-width: 32rem;
			}
		`}</style>
		<div className="buttons" style={style}>
			{podcastServices.map(service => (
				<ServiceButton
					title={service.title}
					url={service.url}
					icon={service.icon}
					theme={service.theme}
					key={`service-button-${service.title}`}
				/>
			))}
		</div>
	</Fragment>
);

export default PodcastServiceButtons;
