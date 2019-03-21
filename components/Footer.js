import React from "react";
import ResponsiveWidthContainer from "./ResponsiveWidthContainer";
import SubscribeForm from "./SubscribeForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faInstagram,
	faYoutube,
	faTwitch
} from "@fortawesome/free-brands-svg-icons";

const social = [
	{
		network: "Facebook",
		icon: faFacebook,
		url: "https://www.facebook.com/FlightlessNerdNews/"
	},
	{
		network: "Twitter",
		icon: faTwitter,
		url: "https://twitter.com/FlightlessNews"
	},
	{
		network: "Twitch",
		icon: faTwitch,
		url: "https://twitch.tv/flightless_nerd"
	},
	{
		network: "Instagram",
		icon: faInstagram,
		url: "https://www.instagram.com/flightlessnews/"
	},
	{
		network: "YouTube",
		icon: faYoutube,
		url: "https://www.youtube.com/channel/UCOqiG5MdFEFUF8BK2RSCSAw"
	}
];

const SocialLinks = props => (
	<React.Fragment>
		<style jsx>{`
			.footer__social__container__wrapper {
				display: flex;
				flex-direction: row;
				justify-content: center;
			}
			.footer__social__container {
				display: flex;
				flex-direction: row;
				justify-content: center;
				// background: #EB3E34;
				padding: 1rem;
				// box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
				// border-radius: 1rem 1rem 1rem 0;
			}
			.footer__social__item {
				color: #eee;
				font-size: 2rem;
				margin: 0 1rem;
				transition: 75ms;
			}
			.footer__social__item:hover {
				// color: #EB3E34;
				color: #ffe838;
				cursor: pointer;
				transform: scale(1.1);
			}
		`}</style>
		<div className="footer__social__container__wrapper">
			<div className="footer__social__container">
				{social.map(network => (
					<a
						href={network.url}
						className="footer__social__link"
						target="_blank"
						key={network.network}
					>
						<span className="fa-layers footer__social__item">
							<FontAwesomeIcon
								icon={network.icon}
								transform="right-1 down-1"
								style={{ color: "rgba(0,0,0,0.1)" }}
							/>
							<FontAwesomeIcon icon={network.icon} />
						</span>
					</a>
				))}
			</div>
		</div>
	</React.Fragment>
);

const Footer = () => (
	<React.Fragment>
		<style jsx>{`
			.footer__container {
				width: 100%;
				background-color: #586cff;
				background-image: linear-gradient(to bottom right, #586cff, #2539cc);
				border-top: 0.5rem solid #eb3e34;
				padding: 1rem 0;
				margin-top: auto;
				width: 100%;
				display: flex;
				justify-content: center;
			}
			.footer__container__grid {
				// display: flex;
				// flex-direction: row;
				// justify-content: space-between;
				// align-items: center;
				color: #eee;
				display: grid;
				grid-gap: 10px;
				grid-template-columns: auto;
				grid-template-rows: repeat(3, auto);
				grid-template-areas: "footer-img" "subscribe-form" "social-links";
				place-items: center;
			}
			.block {
				flex: 1;
				display: flex;
				flex-direction: column;
				fustify-content: center;
				align-items: center;
			}
			.footer__img {
				max-width: 10rem;
				border-radius: 50%;
				box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
				padding: 0;
				margin: 0;
			}
			.footer__date {
				margin: 0;
				color: #eee;
			}
			#footer__social-links {
				grid-area: social-links;
			}
			#footer__img {
				grid-area: footer-img;
			}
			#footer__subscribe-form {
				grid-area: subscribe-form;
			}
			@media (min-width: 992px) {
				.footer__container__grid {
					grid-template-columns: repeat(3, 1fr);
					grid-template-rows: auto;
					grid-template-areas: "social-links footer-img subscribe-form";
				}
			}
		`}</style>
		<footer className="footer__container">
			<ResponsiveWidthContainer>
				<div className="footer__container__grid">
					<div className="block" id="footer__social-links">
						<SocialLinks />
						<p className="footer__date">&copy; {new Date().getFullYear()}</p>
					</div>
					<div className="block" id="footer__img">
						<img
							className="footer__img"
							src="/static/images/Austrich_circle_cropped.png"
							alt="Flightless Nerd"
						/>
					</div>
					<div className="block" id="footer__subscribe-form">
						<SubscribeForm />
					</div>
				</div>
			</ResponsiveWidthContainer>
		</footer>
	</React.Fragment>
);

export default Footer;
