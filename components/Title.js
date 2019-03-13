import { Fragment } from "react";

const Title = ({ title, subtitle }) => (
	<Fragment>
		<style jsx>{`
			.title,
			.subtitle {
				font-family: Montserrat;
				font-weight: 500;
				// padding: 0 7px;
			}
			h4,
			h4 {
				margin: 0;
			}
			.title {
				font-size: 1rem;
				color: #333;
			}
			.subtitle {
				font-size: 0.8rem;
				color: rgb(112, 112, 112);
			}
			@media (min-width: 685px) {
				.title {
					font-size: 1.25rem;
				}
				.subtitle {
					font-size: 0.9rem;
				}
				.title,
				.subtitle {
					padding: 0;
				}
			}
		`}</style>
		<h1 className="title">{title}</h1>
		<h2 className="subtitle">{subtitle}</h2>
	</Fragment>
);

export default Title;
