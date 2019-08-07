import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

import ResponsiveWidthContainer from "./ResponsiveWidthContainer";

const FlashContainer = styled.section`
	font-family: "Raleway", sans;
	margin: 0;
	padding: 0.5rem 0;
	width: 100%;
	background: ${props => props.theme.yellow};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	z-index: 2000;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
`;

const FlashContent = styled.p`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: auto;
	.flash__content__text {
		flex: 1;
		font-size: 1rem;
		margin: auto 1rem;
	}
	.flash__content__text a {
		text-decoration: underline;
		color: #586cff;
		cursor: pointer;
	}
	.flash__content__text a:hover {
		color: #2539cc;
	}
	.flash__close {
		margin: auto 1rem;
	}
	.flash__close__button {
		background: none;
		outline: none;
		border: none;
	}
	.flash__close__button:hover {
		cursor: pointer;
	}
	@media (min-width: 768px) {
		.flash__close,
		.flash__content__text {
			margin: 0;
		}
	}
`;

const FlashBanner = ({ isVisible, closeFlash }) => {
	return (
		<FlashContainer>
			<ResponsiveWidthContainer>
				<FlashContent>
					<span className="flash__content__text">
						Flightless Nerd is on Patreon! Please consider helping us keep this
						place tidy and ad-free by{" "}
						<a href="https://www.patreon.com/flightlessnerd">
							becoming a Patron
						</a>
						!
					</span>
					<span className="flash__close">
						<button className="flash__close__button" onClick={closeFlash}>
							<FaTimes />
						</button>
					</span>
				</FlashContent>
			</ResponsiveWidthContainer>
		</FlashContainer>
	);
};

export default FlashBanner;
