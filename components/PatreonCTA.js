import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { FaPatreon, FaAd, FaMoneyBillWave } from "react-icons/fa";

const PatreonSection = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr 1fr auto;
	align-items: center;
	margin: 2rem 10px;
	font-size: 1.2rem;
	h2 {
		margin: 2rem auto;
		font-family: Montserrat;
		text-transform: uppercase;
		background: linear-gradient(
			to bottom right,
			${props => props.theme.blue},
			${props => props.theme.darkblue}
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		.letter {
			&.post {
				font-size: 1.6rem;
			}
		}
	}
	@media (min-width: 768px) {
		margin: 2rem 0;
	}
`;

const PatreonOne = styled.section`
	padding: 1.5rem 2rem;
	margin: 0.5rem 1rem;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr;
	color: ${props => props.theme.black};
	background-color: ${props => props.theme.yellow};
	background: linear-gradient(
		to bottom,
		${props => props.theme.yellow},
		rgba(230, 207, 31, 0)
	);
	border-radius: 1rem 1rem 1rem 0;
	.cta-text {
		font-size: 1.1rem;
		margin: 0;
		order: 2;
	}
	.drop:first-letter {
		font-size: 1.5rem;
		padding: 0;
		margin: 0;
		color: ${props => props.theme.red};
	}
	.brand-new {
		color: ${props => props.theme.red};
	}
	.icon__container {
		order: 1;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
	}
	.icon {
		color: ${props => props.theme.red};
		font-size: 4rem;
		margin: 1rem;
	}
	@media (min-width: 768px) {
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 1fr;
		background: linear-gradient(
			to right,
			${props => props.theme.yellow},
			rgba(230, 207, 31, 0)
		);
		margin: 0.5rem 0;
		.cta-text {
			font-size: 1.2rem;
			order: 1;
			padding: 1rem;
		}
		.icon__container {
			order: 2;
		}
		.icon {
			font-size: 6rem;
		}
	}
`;

const PatreonTwo = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr;
	padding: 1.5rem 2rem;
	margin: 0.5rem 1rem;
	color: ${props => props.theme.black};
	background-color: ${props => props.theme.yellow};
	background: linear-gradient(
		to bottom,
		${props => props.theme.yellow},
		rgba(230, 207, 31, 0)
	);
	border-radius: 1rem 1rem 1rem 0;
	.cta-text {
		font-size: 1.1rem;
		margin: 0;
		order: 2;
	}
	.drop:first-letter {
		font-size: 1.5rem;
		padding: 0;
		margin: 0;
		color: ${props => props.theme.red};
	}
	.brand-new {
		background: ${props => props.theme.red};
		padding: 0 5px;
		border-radius: 3px 3px 3px 0;
		color: ${props => props.theme.white};
	}
	.icon__container {
		order: 1;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
	}
	.icon {
		color: ${props => props.theme.red};
		font-size: 4rem;
		margin: 1rem;
	}
	@media (min-width: 768px) {
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr;
		background: linear-gradient(
			to left,
			${props => props.theme.yellow},
			rgba(230, 207, 31, 0)
		);
		margin: 0.5rem 0;
		.cta-text {
			font-size: 1.2rem;
			padding: 1rem;
		}
		.icon {
			font-size: 6rem;
		}
	}
`;
const PatreonThree = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 2rem;
	margin: 0.5rem auto;
`;

const PatreonCTA = () => {
	return (
		<PatreonSection>
			<h2>
				<span className="letter initial">H</span>
				<span className="letter post">e</span>
				<span className="letter post">y</span>
				<span className="letter space"> </span>
				<span className="letter initial">N</span>
				<span className="letter post">e</span>
				<span className="letter post">r</span>
				<span className="letter post">d</span>
				<span className="letter post">s</span>
				<span className="letter punctuation">!</span>
			</h2>
			<PatreonOne>
				<p className="cta-text drop">
					Flightless Nerd is committed to providing an enjoyable,
					distraction-free experience for our readers. Other sites monetize your
					visits by selling virtual billboard space on their webpage. We, on the
					other hand, know how much readers hate seeing ads everywhere and want
					to deliver an experience that we ourselves would enjoy.
				</p>
				<section className="icon__container">
					<FaAd className="icon" />
				</section>
			</PatreonOne>
			<PatreonTwo>
				<section className="icon__container">
					<FaMoneyBillWave className="icon" />
				</section>
				<p className="cta-text drop">
					Problem is: we got bills. If you enjoy your experience at Flightless
					Nerd and want to pitch in to help see us continue our hard work,
					consider heading to our <span className="brand-new">brand new</span>{" "}
					Patreon and becoming a Patron. We are eternally grateful for all your
					support!
				</p>
			</PatreonTwo>
			<PatreonThree>
				<Button theme="blue" href="https://patreon.com/flightlessnerd">
					Become a patron <FaPatreon />
				</Button>
			</PatreonThree>
		</PatreonSection>
	);
};

export default PatreonCTA;
