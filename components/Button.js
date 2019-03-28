import { Fragment } from "react";

const Button = ({
	onClick,
	style = {},
	disabled = false,
	theme = "red",
	classNames = "",
	children
}) => {
	let lightColor = "#eb3e34";
	let darkColor = "#d2251b";
	if (typeof theme === "object") {
		if (theme.light && theme.dark) {
			lightColor = theme.light;
			darkColor = theme.dark;
		}
	} else {
		switch (theme) {
			case "blue":
				lightColor = "#586CFF";
				darkColor = "#2539CC";
				break;
			case "yellow":
				lightColor = "#FFE838";
				darkColor = "#E6CF1F";
				break;
			default:
				lightColor = "#eb3e34";
				darkColor = "#d2251b";
				break;
		}
	}
	return (
		<Fragment>
			<style jsx>{`
				.button {
					background-color: ${lightColor};
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
					background-color: ${darkColor};
					border: none;
					cursor: pointer;
				}
				.button:focus {
					outline: none;
				}
			`}</style>
			<button
				className={`button ${classNames}`}
				style={style}
				onClick={onClick}
				disabled={disabled}
			>
				{children}
			</button>
		</Fragment>
	);
};

export default Button;
