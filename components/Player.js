import { Component, Fragment } from "react";
import {
	FaPlay,
	FaPause,
	FaRss,
	FaArrowDown,
	FaShareAlt,
	FaUndo,
	FaRedo,
	FaStopwatch
} from "react-icons/fa";
import formatTime from "../utils/formatTime";
import getAnalytics from "../utils/getAnalytics";

import SocialShare from "./SocialShare";
import Modal from "./Modal";

const analytics = getAnalytics();

class Player extends Component {
	constructor(props) {
		super(props);

		let lastPlayed = 0;

		// for SSR
		if (typeof window !== "undefined") {
			const lp = localStorage.getItem(`lastPlayed${this.props.episode.number}`);
			if (lp) lastPlayed = JSON.parse(lp).lastPlayed;
		}

		this.state = {
			progressTime: 0,
			playing: false,
			duration: 0,
			currentTime: lastPlayed,
			playbackRate: 1,
			timeWasLoaded: lastPlayed !== 0,
			showModal: false
		};
	}

	componentWillUpdate(nextProps, nextState) {
		this.audio.playbackRate = nextState.playbackRate;
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.episode.epNumber !== prevProps.episode.epNumber) {
			const lp = localStorage.getItem(
				`lastPlayed${this.props.episode.epNumber}`
			);
			if (lp) {
				const data = JSON.parse(lp);
				this.setState({
					currentTime: data.lastPlayed
				});
				this.audio.currentTime = data.lastPlayed;
			}
			this.audio.play();
		} else {
			localStorage.setItem(
				`lastPlayed${this.props.episode.epNumber}`,
				JSON.stringify({ lastPlayed: this.state.currentTime })
			);
		}
	}

	componentDidMount() {
		document.addEventListener("keydown", this.checkKeydown, false);
	}
	componentWillUnmount() {
		document.removeEventListener("keydown", this.checkKeydown, false);
	}

	togglePlay = e => {
		console.log(e);
		e.preventDefault();
		const method = this.state.playing ? "pause" : "play";
		this.audio[method]();
	};

	checkKeydown = e => {
		console.log(e);
		switch (e.keyCode) {
			case 32:
				this.togglePlay(e);
				break;
			case 37:
				this.jumpBack(e);
				break;
			case 39:
				this.jumpForward(e);
				break;
		}
	};

	playPause = e => {
		this.setState({ playing: !this.audio.paused });
	};

	seek = e => {
		const percent = e.nativeEvent.offsetX / this.progress.offsetWidth;
		this.setState({ currentTime: percent * this.audio.duration });
		this.audio.currentTime = percent * this.audio.duration;
		this.progress.value = percent / 100;
	};

	timeUpdate = e => {
		// Check if the user already had a curent time
		if (this.state.timeWasLoaded) {
			const lp = localStorage.getItem(`lastPlayed${this.props.episode.number}`);
			if (lp) {
				e.currentTarget.currentTime = JSON.parse(lp).lastPlayed;
			}
			this.setState({ timeWasLoaded: false });
		} else {
			const { currentTime = 0, duration = 0 } = e.currentTarget;

			const progressTime = (currentTime / duration) * 100;
			if (Number.isNaN(progressTime)) return;
			this.setState({ progressTime, currentTime, duration });
		}
	};

	jumpForward = e => {
		e.preventDefault();
		let newTime = this.audio.currentTime + 10;
		if (newTime >= this.audio.duration) newTime = this.audio.duration;
		this.setState({ currentTime: newTime });
		this.audio.currentTime = newTime;
		this.progress.value = newTime / this.audio.duration;
	};

	jumpBack = e => {
		e.preventDefault();
		let newTime = this.audio.currentTime - 10;
		if (newTime <= 0) newTime = 0;
		this.setState({ currentTime: newTime });
		this.audio.currentTime = newTime;
		this.progress.value = newTime / this.audio.duration;
	};

	updateSpeed = () => {
		let playbackRate = this.state.playbackRate + 0.25;
		if (playbackRate > 2) {
			playbackRate = 0.75;
		}
		this.setState({ playbackRate });
	};

	showModal = () => {
		this.setState({ showModal: true });
	};

	hideModal = () => {
		this.setState({ showModal: false });
	};

	onEnd = () => {
		analytics.logEvent("Podcast", "Episode ended", this.props.episode.title);
		if (this.props.onEnd && typeof this.props.onEnd === "function")
			this.props.onEnd();
	};

	render() {
		const { episode } = this.props;
		return (
			<Fragment>
				<style jsx>{`
					.player__container {
						max-width: 100%;
						display: grid;
						grid-template-columns: 1fr 1fr;
						grid-template-rows: auto auto;
						grid-template-areas: "playPause buttons" "info info";
						color: #eee;
						font-family: Raleway;
						margin-top: 1rem;
					}
					.player__section__info {
						display: flex;
						flex-direction: column;
						justify-content: center;
						max-width: 100%;
						border-bottom: .3rem solid #eb3e34;
						background-color: #586cff;
						background-image: linear-gradient(
							to bottom right,
							#586cff,
							#2539cc
						);
						flex: 1;
						padding: 0.5rem 1rem;
						align-items: center;
						grid-area: info;
					}
					.player__play-pause__button__container {
						grid-area: playPause;
					}
					.player__button {
						font-size: 1rem;
						height: 100%;
						max-width: 100%;
						border: none;
						background-color: #eb3e34;
						color: #eee;
						padding: 1rem;
					}
					.player__button:hover {
						background-color: #d2251b;
					}
					.player__button:hover,
					.player__button:focus,
					.player__button:active {
						outline: none;
					}
					.player__progress[value] {
						-webkit-appearance: none;
						appearance: none;
						width: 100%;
						height: 10px;
						margin: .5rem 0;
					}
					.player__progress[value]::-webkit-progress-bar {
						background-color: #eee;
						border-radius: 2px;
						box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
					}
					.player__progress[value]::-webkit-progress-value {
						background-color: #ffe838;
						background-image: linear-gradient(
							to bottom right,
							#ffe838,
							#e6cf1f
						);
					}
					.player__section__buttons {
						max-width: 100%;
						display: grid;
						grid-template-columns: repeat(3, 1fr);
						grid-template-areas: "buttonRss buttonDownload buttonShare";
						height: auto;
						overflow: hidden;
					}
					.player__button__rss__container {
						grid-area: buttonRss
					}
					.player__button__download {
						grid-area: buttonDownload
					}
					.player__button__share__container {
						grid-area: buttonShare
					}
					.player__button__rss,
					.player__button__download,
					.player__button__share,
					.play-pause__button {
						width: 100%;
					}
					.player__section__buttons > * {
						margin-left: 3px;
					}
					.player__title__marquee {
						max-width: 100%;
						overflow-x: hidden;
					}
					.below__progress {
						display: flex;
						flex-direction: row;
						width: 100%;
					}
					.below__progress > * {
						flex: 1;
						text-align: center;
					}
					.player__time-jump,
					.player__play-rate {
						background: none;
						border: none;
						color: #eee;
					}
					.player__time-jump:hover,
					.player__time-jump:active,
					.player__time-jump:focus,
					.player__play-rate:hover,
					.player__play-rate:active,
					.player__play-rate:focus {
						outline: none;
						color: #ddd;
					}
					.pointer {
						cursor: pointer;
					}
					@media (min-width: 768px) {
						.player__container {
							grid-template-columns: auto 1fr auto auto auto;
							grid-template-rows: auto;
							grid-template-areas: "playPause info buttons";
						}
						.player__section__info {
							margin-left: 3px;
							border-bottom-width: .5rem;
						}
						.player__button {
							font-size: 1.3rem;
						}
						.play-pause__button {
							border-radius: 1rem 0 0 0;
						}
						.player__button__share__container .player__button {
							border-radius: 0 1rem 1rem 0;
						}
				`}</style>
				<div className="player__container">
					<div className="player__section player__play-pause__button__container">
						<button
							className="player__button play-pause__button pointer"
							onClick={this.togglePlay}
						>
							{this.state.playing ? (
								<a title="Pause">
									<FaPause />
								</a>
							) : (
								<a title="Play">
									<FaPlay />
								</a>
							)}
						</button>
					</div>
					<div className="player__section player__section__info">
						<div className="player__title__marquee">
							<span>{`Ep ${episode.epNumber} - ${episode.title}`}</span>
						</div>
						<progress
							ref={p => (this.progress = p)}
							className="player__progress"
							value={this.state.progressTime / 100}
							max="1"
							onClick={this.seek}
						/>
						<div className="below__progress">
							<button
								className="player__time-jump pointer"
								onClick={this.jumpBack}
							>
								<FaUndo /> 10
							</button>
							<div>
								{formatTime(this.state.currentTime)}/
								{formatTime(this.state.duration)}
							</div>
							<button
								className="player__time-jump pointer"
								onClick={this.jumpForward}
							>
								<FaRedo /> 10
							</button>
						</div>
					</div>
					<div className="player__section player__section__buttons">
						<a
							href="https://flightlessnerd.libsyn.com/rss"
							target="_blank"
							title="Subscribe to RSS"
							className="player__button__rss__container"
						>
							<button
								className="player__button player__button__rss pointer"
								onClick={this.copyRss}
							>
								<FaRss />
							</button>
						</a>
						<a
							href={episode.audioUrl}
							download
							title="Download episode"
							className="player__button__download__container"
						>
							<button className="player__button player__button__download pointer">
								<FaArrowDown />
							</button>
						</a>
						<a
							title="Share episode"
							className="player__button__share__container"
						>
							<button
								className="player__button player__button__share pointer"
								onClick={this.showModal}
							>
								<FaShareAlt />
							</button>
						</a>
					</div>
				</div>
				<audio
					src={episode.audioUrl}
					ref={audio => (this.audio = audio)}
					onPlay={this.playPause}
					onPause={this.playPause}
					onTimeUpdate={this.timeUpdate}
					onLoadedMetadata={this.timeUpdate}
					onEnded={() => this.onEnd()}
				/>
				<Modal show={this.state.showModal} handleClose={this.hideModal}>
					<SocialShare
						title={episode.title}
						slug={episode.slug}
						iconSize={45}
						img={
							episode.image && episode.image.secure_url
								? episode.image.secure_url
								: episode.type === "podcast"
								? "https://flightlessnerd.com/static/images/austrich_podcast_1280.jpg"
								: "https://flightlessnerd.com/static/images/Austrich_circle_cropped.png"
						}
					/>
				</Modal>
			</Fragment>
		);
	}
}
export default Player;
