import { Component, Fragment } from "react";
import {
	FaPlay,
	FaPause,
	FaRss,
	FaArrowDown,
	FaShareAlt,
	FaUndo,
	FaRedo
} from "react-icons/fa";
import Marquee from "react-marquee";
import formatTime from "../utils/formatTime";

class Player extends Component {
	constructor(props) {
		super(props);

		let lastPlayed = 0;

		// for SSR
		if (typeof window !== "undefined") {
			const lp = localStorage.getItem(`lastPlayed${this.props.show.number}`);
			if (lp) lastPlayed = JSON.parse(lp).lastPlayed;
		}

		this.state = {
			progressTime: 0,
			playing: false,
			duration: 0,
			currentTime: lastPlayed,
			playbackRate: 1,
			timeWasLoaded: lastPlayed !== 0,
			rssCopied: false
		};
	}

	componentWillUpdate(nextProps, nextState) {
		nextProps.show.epNumber !== this.props.show.epNumber;
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.show.epNumber !== prevProps.show.epNumber) {
			const lp = localStorage.getItem(`lastPlayed${this.props.show.epNumber}`);
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
				`lastPlayed${this.props.show.epNumber}`,
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
			const lp = localStorage.getItem(`lastPlayed${this.props.show.number}`);
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

	render() {
		const { show } = this.props;
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
					.player__section {
						display: flex;
						flex-direction: column;
						justify-content: center;
					}
					.player__section__info {
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
						align-items: stretch;
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
					.player__buttons {
						display: flex;
						flex-direction: row;
						grid-area: buttons;
					}
					.player__buttons .player__button {
						margin-left: 3px;
						flex: 1 0 auto;
					}
					.player__title__marquee {
						max-width: 100%;
						overflow-x: hidden;
					}
					.below__progress {
						display: flex;
						flex-direction: row;
						width: 100%;
						justify-content: space-around;
					}
					.player__time-jump {
						background: none;
						border: none;
						color: #eee;
					}
					.player__time-jump:hover,
					.player__time-jump:active,
					.player__time-jump:focus {
						outline: none;
					}
					.pointer {
						cursor: pointer;
					}
					@media (min-width: 768px) {
						.player__container {
							grid-template-columns: auto 1fr 10rem;
							grid-template-rows: auto;
							grid-template-areas: "playPause info buttons";
						}
						.player__section__info {
							margin: 0 3px;
							border-bottom-width: .5rem;
						}
						.player__button {
							font-size: 1.3rem;
						}
						.play-pause__button {
							border-radius: 1rem 0 0 0;
						}
						.player__button__share {
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
							<span>{`Ep ${show.epNumber} - ${show.title}`}</span>
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
					<div className="player__section player__buttons">
						<a
							href="https://flightlessnerd.libsyn.com/rss"
							target="_blank"
							title="Subscribe to RSS"
						>
							<button
								className="player__button player__button__rss pointer"
								onClick={this.copyRss}
							>
								<FaRss />
							</button>
						</a>
						<a href={show.audioUrl} download title="Download episode">
							<button className="player__button player__button__download pointer">
								<FaArrowDown />
							</button>
						</a>
						<button className="player__button player__button__share pointer">
							<FaShareAlt />
						</button>
					</div>
				</div>
				<audio
					src={show.audioUrl}
					ref={audio => (this.audio = audio)}
					onPlay={this.playPause}
					onPause={this.playPause}
					onTimeUpdate={this.timeUpdate}
					onLoadedMetadata={this.timeUpdate}
				/>
			</Fragment>
		);
	}
}
export default Player;
