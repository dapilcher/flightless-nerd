import { Fragment } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { FaTwitter, FaPlay } from "react-icons/fa";
import Button from "./Button";

const PodcastListItem = ({ episode, updateCurrentEpisode }) => (
	<Fragment>
		<style jsx>{`
			.episode-list-item {
				margin-top: 1rem;
				display: grid;
				grid-column-gap: 1rem;
				grid-row-gap: 1rem;
				grid-template-columns: 50px auto;
				grid-template-rows: repeat(3, auto);
				grid-template-areas: "button title" "details details" "hosts hosts";
				padding: 1rem 0;
				border-bottom: 1px solid #eb3e34;
			}
			h1,
			h2 {
				font-family: Montserrat;
			}
			h1 {
				font-size: 1.4rem;
			}
			h2 {
				font-size: 1.2rem;
			}
			.episode__title {
				grid-area: title;
				place-self: center start;
			}
			.episode__play-pause__button {
				grid-area: button;
			}
			.episode__details {
				font-family: Raleway;
				font-size: 1rem;
				grid-area: details;
			}
			.episode__hosts {
				grid-area: hosts;
			}
			@media (min-width: 576px) {
				.episode-list-item {
					grid-column-gap: 2rem;
					grid-row-gap: 1rem;
					grid-template-columns: repeat(2, auto);
					grid-template-rows: repeat(3, auto);
					grid-template-areas: "button title" "button details" "button hosts";
				}
			}
		`}</style>
		<div className="episode-list-item">
			<div className="episode__play-pause__button">
				<Button onClick={updateCurrentEpisode}>
					<FaPlay />
				</Button>
			</div>
			<div className="episode__title">
				<h1>{`Ep ${episode.epNumber} - ${episode.title}`}</h1>
			</div>
			<div className="episode__details">
				{episode.content && episode.content.extended && <h2>Show Notes</h2>}
				{episode.content &&
				episode.content.extended &&
				episode.content.extended.md ? (
					<ReactMarkdown
						className="episode__content"
						escapeHtml={false}
						source={episode.content.extended.md}
					/>
				) : (
					<div
						className="episode__content"
						dangerouslySetInnerHTML={{ __html: episode.content.extended }}
					/>
				)}
			</div>
			<div className="episode__hosts">
				{episode.hosts && episode.hosts.length > 0 && <h2>Hosts</h2>}
				{episode.hosts &&
					episode.hosts.map((host, i) => (
						<div className="episode__host" key={`${episode.slug}-host-${i}`}>
							{`${host.name.first} ${host.name.last}`}
							{host.social && host.social.twitterHandle && (
								<Fragment>
									{" - "}
									<FaTwitter />{" "}
									<a
										href={`https://twitter.com/${host.social.twitterHandle}`}
									>{`@${host.social.twitterHandle}`}</a>
								</Fragment>
							)}
						</div>
					))}
			</div>
		</div>
	</Fragment>
);

export default PodcastListItem;
