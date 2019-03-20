import { Fragment } from "react";

const Button = ({
	onClick = () => {
		console.log("boop!");
	},
	children
}) => (
	<Fragment>
		<style jsx>{`
			.button {
				background-color: #eb3e34;
				color: #eee;
				font-family: Montserrat;
				font-size: 1.3rem;
				border: none;
				border-radius: 1rem 1rem 1rem 0;
				padding: 0.7rem 0.7rem;
				outline: none;
				margin: 0;
			}
			.button:hover {
				background-color: #d2251b;
				border: none;
				cursor: pointer;
			}
			.button:focus {
				outline: none;
			}
		`}</style>
		<button className="button" onClick={onClick}>
			{children}
		</button>
	</Fragment>
);

export default Button;
