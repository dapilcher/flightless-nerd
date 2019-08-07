import styled from "styled-components";

const StyledButton = styled.button`
	background-color: ${props => props.lightColor};
	color: #eee;
	font-family: Montserrat;
	font-size: 1.2rem;
	border: none;
	border-radius: 1rem 1rem 1rem 0;
	padding: 0.7rem 0.7rem;
	outline: none;
	margin: 0;
	&:hover {
		background-color: ${props => props.darkColor};
		border: none;
		cursor: pointer;
	}
	&:focus {
		outline: none;
	}
`;

const Button = ({
	onClick = () => {},
	title,
	href,
	target = "_blank",
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
		<a title={title} href={href} target={target}>
			<StyledButton
				lightColor={lightColor}
				darkColor={darkColor}
				className={classNames}
				style={style}
				onClick={onClick}
				disabled={disabled}
			>
				{children}
			</StyledButton>
		</a>
	);
};

export default Button;
