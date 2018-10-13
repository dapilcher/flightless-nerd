import React from "react";

const Footer = () => (
	<React.Fragment>
		<style jsx>{`
			.footer {
				width: 100%;
				background-color: #586CFF;
				background-image: linear-gradient(to bottom right, #586CFF, #2539CC);
				background: linear-gradient(to bottom right, #586CFF4D, #2539CCCC), url("https://www.transparenttextures.com/patterns/cubes.png"), linear-gradient(to bottom right, #586CFF, #2539CC);
				border-top: 0.5rem solid #EB3E34;
				padding: 1rem 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				text-align: center;
				color: #eee
			}
			.footer__img {
				max-width: 8rem;
				margin-bottom: 1rem;
			}
			.footer__date {
				margin: 0;
			}
			.footer__container {
				width: 100%;
			}
		`}</style>
		<footer className="footer footer__container">
			{/* <div className="container">
				<img className="footer__img" src="/static/images/Austrich_circle_cropped.png" alt="Flightless Nerd" />
			</div> */}
			<p className="footer__date">&copy; {new Date().getFullYear()}</p>
		</footer>
	</React.Fragment>
);

export default Footer;
