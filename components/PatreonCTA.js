import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { FaPatreon } from "react-icons/fa";

const PatreonSection = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr 1fr auto;
	align-items: center;
	margin: 2rem 10px;
	font-size: 1.2rem;
	text-align: center;
	background-color: ${props => props.theme.yellow};
	background: linear-gradient(
		to bottom right,
		${props => props.theme.yellow},
		${props => props.theme.darkyellow}
	);
	border-radius: 1rem 1rem 1rem 0;
	h2 {
		font-size: 1.2rem;
		margin: 2rem auto;
		padding: 0 2rem;
		font-family: Montserrat;
		text-transform: uppercase;
		background: linear-gradient(
			to bottom right,
			${props => props.theme.red},
			${props => props.theme.darkred}
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	@media (min-width: 768px) {
		margin: 2rem 0;
		h2 {
			font-size: 1.5rem;
		}
	}
`;

const PatreonCTA = () => {
	return (
		<PatreonSection>
			<h2>Help us keep this place ad-free</h2>
			<Button theme="blue" href="https://patreon.com/flightlessnerd">
				Become a patron <FaPatreon />
			</Button>
		</PatreonSection>
	);
};

export default PatreonCTA;
