import { Component, Fragment } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { FaTwitter, FaPlay, FaAngleDown, FaAngleUp } from "react-icons/fa";
import SocialShare from "./SocialShare";
import Button from "./Button";

class PodcastListItem extends Component {
	state = {
		isCollapsed: true
	};
	toggleIsCollapsed = () => {
		const isCollapsed = !this.state.isCollapsed;
		this.setState({ isCollapsed });
	};
	render() {
		const { episode, updateCurrentEpisode, toggleCollapse } = this.props;
		return (
			<Fragment>
				<style jsx>{`
					.episode-list-item {
						margin: 0 10px;
						margin-top: 1rem;
						display: grid;
						grid-template-columns: auto 1fr;
						grid-template-rows: auto auto auto;
						grid-template-areas: "button title" "details details" "collapse collapse";
						padding: 1rem 0;
						grid-column-gap: 1rem;
						place-items: center start;
					}
					h1,
					h2 {
						font-family: Montserrat;
					}
					h1 {
						font-size: 1rem;
						transition: font-size 100ms;
					}
					.episode__title.open h1 {
						font-size: 1.3rem;
						transition: font-size 100ms;
					}
					h2 {
						font-size: 1rem;
					}
					.episode__title {
						grid-area: title;
						width: 100%;
						cursor: pointer;
					}
					.episode__play-pause__button {
						grid-area: button;
					}
					.episode__details {
						font-family: Raleway;
						font-size: 1rem;
						padding-top: 1rem;
					}
					.episode__hosts {
						padding-bottom: 1rem;
					}
					.episode__share {
						padding-bottom: 1rem;
					}
					.collapse__button {
						place-self: center;
						margin-left: 0.5rem;
						font-size: 1.5rem;
						padding: auto 1rem;
						background: none;
						border: none;
						cursor: pointer;
						color: #586cff;
						grid-area: collapse;
					}
					.collapse__button:hover,
					.collapse__button:active,
					.collapse__button:focus {
						outline: none;
					}
					.collapse__window {
						height: auto;
						overflow: hidden;
						transition: height 150ms ease-out;
						grid-area: details;
					}
					@media (min-width: 576px) {
						.episode-list-item {
							margin: 0;
							margin-top: 1rem;
							grid-template-columns: auto 1fr auto;
							grid-template-rows: auto auto;
							grid-template-areas: "button title collapse" "details details details";
						}
						h1 {
							font-size: 1rem;
							transition: font-size 100ms ease;
						}
						.episode__title.open h1 {
							font-size: 1.2rem;
						}
						h2 {
							font-size: 1.1rem;
						}
					}
				`}</style>
				<div className="episode-list-item">
					<div className="episode__play-pause__button">
						<Button onClick={updateCurrentEpisode}>
							<FaPlay />
						</Button>
					</div>
					<div
						className={`episode__title ${
							!this.state.isCollapsed ? "open" : ""
						}`}
					>
						<h1
							onClick={e => {
								this.toggleIsCollapsed();
								toggleCollapse(e, this.collapseHeader);
							}}
						>{`Ep ${episode.epNumber} - ${episode.title}`}</h1>
					</div>
					<div
						className="collapse__window"
						ref={el => (this.collapseHeader = el)}
						style={{ height: "0px" }}
						data-collapsed="true"
					>
						<div className="episode__details">
							{episode.content && episode.content.extended && (
								<h2>Show Notes</h2>
							)}
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
									dangerouslySetInnerHTML={{
										__html: episode.content.extended
									}}
								/>
							)}
						</div>
						<div className="episode__hosts">
							{episode.hosts && episode.hosts.length > 0 && <h2>Hosts</h2>}
							{episode.hosts &&
								episode.hosts.map((host, i) => (
									<div
										className="episode__host"
										key={`${episode.slug}-host-${i}`}
									>
										{`${host.name.first} ${host.name.last}`}
										{host.social && host.social.twitterHandle && (
											<Fragment>
												{" - "}
												<FaTwitter />{" "}
												<a
													href={`https://twitter.com/${
														host.social.twitterHandle
													}`}
												>{`@${host.social.twitterHandle}`}</a>
											</Fragment>
										)}
									</div>
								))}
						</div>
						<div className="episode__share">
							<h2>Share</h2>
							<SocialShare title={episode.title} slug={episode.slug} />
						</div>
					</div>
					<button
						className="collapse__button"
						onClick={e => {
							this.toggleIsCollapsed();
							toggleCollapse(e, this.collapseHeader);
						}}
					>
						{this.state.isCollapsed ? <FaAngleDown /> : <FaAngleUp />}
					</button>
				</div>
			</Fragment>
		);
	}
}

export default PodcastListItem;
