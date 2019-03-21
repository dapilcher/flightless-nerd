import { Fragment } from "react";

const style = {
	marginTop: "1rem",
	border: "none",
	borderBottom: "5px solid #EB3E34",
	backgroundColor: "#eeeeee"
};

const PodcastPlayer = () => (
	<Fragment>
		<iframe
			class="player-iframe"
			style={style}
			src="//html5-player.libsyn.com/embed/destination/id/1063583/height/360/theme/custom/thumbnail/yes/direction/backward/no-cache/true/render-playlist/yes/custom-color/586cff/"
			height="360"
			width="100%"
			scrolling="no"
			allowfullscreen
			webkitallowfullscreen
			mozallowfullscreen
			oallowfullscreen
			msallowfullscreen
		/>
	</Fragment>
);

export default PodcastPlayer;
