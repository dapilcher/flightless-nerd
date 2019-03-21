import { Fragment } from "react";
import ReactPlayer from "react-player";

const Player = ({ show }) => (
	<Fragment>
		<style jsx>{`
			.player-wrapper {
				height: 1rem;
				max-width: 100vw;
				margin: 2.5rem 0;
			}
		`}</style>
		<div className="player-wrapper">
			<ReactPlayer width="100%" height="100%" url={show.audioUrl} controls />
		</div>
	</Fragment>
);

export default Player;
