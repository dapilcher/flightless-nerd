import { Component, Fragment } from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaPause } from "react-icons/fa";
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
			timeWasLoaded: lastPlayed !== 0
		};
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
	togglePlay = () => {
		const method = this.state.playing ? "pause" : "play";
		this.audio[method]();
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
	render() {
		const { show } = this.props;
		return (
			<Fragment>
				<style jsx>{`
					.player__container {
						max-width: 100%;
						display: flex;
						flex-direction: row;
						color: #eee;
						font-family: Raleway;
					}
					.player__section {
						display: flex;
						flex-direction: column;
						justify-content: center;
					}
					.player__section__center {
						border-bottom: 8px solid #eb3e34;
						background-color: #586cff;
						background-image: linear-gradient(
							to bottom right,
							#586cff,
							#2539cc
						);
						flex: 1;
						margin: 0 3px;
						padding: 0.5rem 1rem;
						align-items: center;
					}
					.player__section__left {
						align-items: stretch;
					}
					.play-pause__button {
						font-size: 2rem;
						height: 100%;
						max-width: 100%;
						border: none;
						background-color: #eb3e34;
						color: #eee;
						border-radius: 1rem 0 0 0;
						padding: 1rem;
					}
					.play-pause__button:hover {
						background-color: #d2251b;
					}
					.player__progress[value] {
						-webkit-appearance: none;
						appearance: none;
						width: 100%;
						height: 10px;
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
				`}</style>
				<div className="player__container">
					<div className="player__section player__section__left">
						<button className="play-pause__button" onClick={this.togglePlay}>
							{this.state.playing ? <FaPause /> : <FaPlay />}
						</button>
					</div>
					<div className="player__section player__section__center">
						<span>{show.title}</span>
						<progress
							ref={p => (this.progress = p)}
							className="player__progress"
							value={this.state.progressTime / 100}
							max="1"
							onClick={this.seek}
						/>
						<span>
							{formatTime(this.state.currentTime)}/
							{formatTime(this.state.duration)}
						</span>
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

// import { Component, Fragment } from "react";
// import ReactPlayer from "react-player";

// class Player extends Component {
// 	render() {
// 		const { show } = this.props;
// 		return (
// 			<Fragment>
// 				<style jsx>{`
// 					.player-wrapper {
// 						height: 1rem;
// 						max-width: 100vw;
// 						margin: 2.5rem 0;
// 					}
// 				`}</style>
// 				<div className="player-wrapper">
// 					<ReactPlayer
// 						width="100%"
// 						height="100%"
// 						url={show.audioUrl}
// 						controls
// 					/>
// 				</div>
// 			</Fragment>
// 		);
// 	}
// }
// export default Player;
