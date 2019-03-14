import { Fragment } from "react";

const style = {
	marginTop: "1rem",
	border: "none",
	borderBottom: "5px solid #EB3E34",
	backgroundColor: "#eeeeee"
};

const styleCss = `
.container-fluid {
	position: absolute;
	top: 0;
	left: 0;
	width: 100 %;
	height: 100 %;
}
.logo {
	background: url("//assets.libsyn.com/player_logo/161495?theme=custom") no-repeat center!important;
}

.nopadding svg {
	fill: #586cff!important;
}
.duration, .close-overlay: after, .playlist-item.current.playlist-item-title, .playlist-item.current.playlist-item-duration, .playlist-item.current.playlist-item-date, .playlist-item.current.playlist-item-info-link, a, a: hover, a: visited, a: focus {
	color: #586cff;
	text-decoration: none;
}

.play-bar, .loading.sk-rect, .spinner.bounce1, .spinner.bounce2, .spinner.bounce3, .nano > .nano-pane > .nano-slider  {
	background-color: #586cff!important;
}

.playlistItemDescription {
	height: 245px;
}

.playlist-item.current.playlist-item-status {
	background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='26px' height='26px' viewBox='0 0 26 26' enable-background='new 0 0 26 26' xml:space='preserve'><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='19' y1='3' x2='19' y2='22'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='22' y1='9' x2='22' y2='16'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='25' y1='11' x2='25' y2='14'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='16' y1='7' x2='16' y2='18'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='10' y1='9' x2='10' y2='16'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='13' y1='11' x2='13' y2='14'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='7' y1='4' x2='7' y2='21'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='1' y1='11' x2='1' y2='14'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='4' y1='8' x2='4' y2='17'/></svg>") no-repeat center;
}

.playlist-item-info-link.active {
	background: url("data:image/svg+xml;utf8,<svg fill='white' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 50 50' enable-background='new 0 0 50 50' xml:space='preserve'><path fill='%23586cff' stroke='%23586cff' stroke-width='1' stroke-linecap='round' stroke-miterlimit='10' d='M25,2C11.7,2,1,11.5,1,23.2c0,6,2.8,11.4,7.4,15.3c-1.3,5.3-7.6,7.5-7.2,9c4,2.3,14.8-2.1,18.2-3.6c1.8,0.4,3.6,0.6,5.5,0.6c13.3,0,24-9.5,24-21.2S38.3,2,25,2z'/><path stroke='white' stroke-width='3' d='M23.8,16.2c-0.2,0-0.4-0.1-0.4-0.4v-2.6c0-0.2,0.1-0.4,0.4-0.4h2.4c0.2,0,0.4,0.1,0.4,0.4v2.6c0,0.2-0.1,0.4-0.4,0.4H23.8zM23.9,34.3c-0.2,0-0.4-0.1-0.4-0.4V20.5c0-0.2,0.1-0.4,0.4-0.4h2.3c0.2,0,0.4,0.1,0.4,0.4v13.5c0,0.2-0.1,0.4-0.4,0.4H23.9z'/></svg>") no-repeat;
}


.playlist {
	height: calc(360px-90px);
}
.playlist-item-desc {
	height: 300px;
}
@media(max-width: 992px) {
  .static-duration {
		display: none;
	}

	@media(max-width: 992px) {
  .prev-thirty, .skip-thirty {
			display: none;
		}
  .prev,.elapsed, .skip {
			width: 33.2 %;
		}
	}


.podcast-title {
		color: grey;
	}
`;

const PodcastPlayer = () => (
	<Fragment>
		{/* <style jsx global>{`
			.container-fluid {
				position: absolute;
				top: 0;
				left: 0;
				width: 100 %;
				height: 100 %;
			}
			.logo {
				background: url("//assets.libsyn.com/player_logo/161495?theme=custom") no-repeat center!important;
			}
			.nopadding svg {
				fill: #EB3E34!important;
			}
			.duration, .close-overlay: after, .playlist-item.current.playlist-item-title, .playlist-item.current.playlist-item-duration, .playlist-item.current.playlist-item-date, .playlist-item.current.playlist-item-info-link, a, a: hover, a: visited, a: focus {
				color: #586cff;
				text-decoration: none;
			}
			.play-bar, .loading.sk-rect, .spinner.bounce1, .spinner.bounce2, .spinner.bounce3, .nano > .nano-pane > .nano-slider  {
				background-color: #586cff!important;
			}
			.playlistItemDescription {
				height: 245px;
			}
			.playlist-item.current.playlist-item-status {
				background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='26px' height='26px' viewBox='0 0 26 26' enable-background='new 0 0 26 26' xml:space='preserve'><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='19' y1='3' x2='19' y2='22'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='22' y1='9' x2='22' y2='16'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='25' y1='11' x2='25' y2='14'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='16' y1='7' x2='16' y2='18'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='10' y1='9' x2='10' y2='16'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='13' y1='11' x2='13' y2='14'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='7' y1='4' x2='7' y2='21'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='1' y1='11' x2='1' y2='14'/><line fill='none' stroke='%23586cff' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='4' y1='8' x2='4' y2='17'/></svg>") no-repeat center;
			}
			.playlist-item-info-link.active {
				background: url("data:image/svg+xml;utf8,<svg fill='white' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 50 50' enable-background='new 0 0 50 50' xml:space='preserve'><path fill='%23586cff' stroke='%23586cff' stroke-width='1' stroke-linecap='round' stroke-miterlimit='10' d='M25,2C11.7,2,1,11.5,1,23.2c0,6,2.8,11.4,7.4,15.3c-1.3,5.3-7.6,7.5-7.2,9c4,2.3,14.8-2.1,18.2-3.6c1.8,0.4,3.6,0.6,5.5,0.6c13.3,0,24-9.5,24-21.2S38.3,2,25,2z'/><path stroke='white' stroke-width='3' d='M23.8,16.2c-0.2,0-0.4-0.1-0.4-0.4v-2.6c0-0.2,0.1-0.4,0.4-0.4h2.4c0.2,0,0.4,0.1,0.4,0.4v2.6c0,0.2-0.1,0.4-0.4,0.4H23.8zM23.9,34.3c-0.2,0-0.4-0.1-0.4-0.4V20.5c0-0.2,0.1-0.4,0.4-0.4h2.3c0.2,0,0.4,0.1,0.4,0.4v13.5c0,0.2-0.1,0.4-0.4,0.4H23.9z'/></svg>") no-repeat;
			}
			.playlist {
				height: calc(360px-90px);
			}
			.playlist-item-desc {
				height: 300px;
			}
			@media(max-width: 992px) {
				.static-duration {
					display: none;
				}
				@media(max-width: 992px) {
				.prev-thirty, .skip-thirty {
						display: none;
					}
				.prev,.elapsed, .skip {
						width: 33.2 %;
					}
				}
			.podcast-title {
					color: grey;
				}
			`}</style> */}
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
