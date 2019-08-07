import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { FaPatreon } from "react-icons/fa";

const PatreonSection = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr auto;
	align-items: center;
	margin: 2rem 10px;
	background-color: ${props => props.theme.yellow};
	background: linear-gradient(
		to bottom,
		${props => props.theme.yellow},
		rgba(230, 207, 31, 0.05)
	);
	border-radius: 1rem 1rem 1rem 0;
	font-size: 1.2rem;

	@media (min-width: 768px) {
		background: linear-gradient(
			to right,
			${props => props.theme.yellow},
			rgba(230, 207, 31, 0.05)
		);
		margin: 2rem 0;
		grid-template-columns: 1fr auto;
		grid-template-rows: 1fr;
	}
	@media (min-width: 1200px) {
		grid-template-columns: 3fr 2fr;
	}
`;

const PatreonLeft = styled.section`
	padding: 1.5rem 2rem;
	color: ${props => props.theme.black};
	h2 {
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
	.cta-text {
		font-size: 1rem;
		line-height: 1.5;
		margin: 0;
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

	@media (min-width: 768) {
		.cta-text {
			font-size: 1.2rem;
		}
	}
`;
const PatreonRight = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 2rem;
`;

const PatreonCTA = () => {
	return (
		<PatreonSection>
			<PatreonLeft>
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
				<p className="cta-text drop">
					Flightless Nerd is committed to providing an enjoyable,
					distraction-free experience. Other sites monetize your visits by
					selling virtual billboard space on their webpage. We, on the other
					hand, know how much we ourselves hate seeing ads everywhere and
					deliver an experience that we ourselves would enjoy. Problem is: we
					got bills. If you enjoy your experience at Flightless Nerd and want to
					pitch in to help see us continue our hard work, consider heading to
					our <span className="brand-new">brand new</span> Patreon and becoming
					a Patron. We are eternally grateful for all your support!
				</p>
			</PatreonLeft>
			<PatreonRight>
				<Button
					href="https://patreon.com/flightlessnerd"
					style={{ fontSize: "1.2rem" }}
				>
					Become a patron <FaPatreon />
				</Button>
			</PatreonRight>
		</PatreonSection>
	);
};

export default PatreonCTA;
