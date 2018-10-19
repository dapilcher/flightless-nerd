import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const social = [
	{
		network: 'Facebook',
		icon: faFacebook,
		url: 'https://www.facebook.com/FlightlessNerdNews/',
	},
	{
		network: 'Twitter',
		icon: faTwitter,
		url: 'https://twitter.com/FlightlessNews',
	},
	{
		network: 'Instagram',
		icon: faInstagram,
		url: 'https://www.instagram.com/flightlessnews/',
	},
	{
		network: 'YouTube',
		icon: faYoutube,
		url: 'https://www.youtube.com/channel/UCOqiG5MdFEFUF8BK2RSCSAw',
	},
]

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
			.footer__social__container__wrapper {
				display: flex;
				flex-direction: row;
				justify-content: center;
			}
			.footer__social__container {
				display: flex;
				flex-direction: row;
				justify-content: center;
				background: #EB3E34;
				padding: 1rem;
				box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
				border-radius: 1rem 1rem 1rem 0;
				border-left: 2px solid #eee;
			}
			.footer__social__item {
				color: #eee;
				font-size: 1.5rem;
				margin: 0 1rem;
				transition: 75ms;
			}
			.footer__social__item:hover {
				// color: #EB3E34;
				color: #ffe838;
				cursor: pointer;
				transform: scale(1.1)
			}
		`}</style>
		<footer className="footer footer__container">
			<div className="footer__social__container__wrapper">
				<div className="footer__social__container">
					{social.map(network => (
						<a href={network.url} className="footer__social__link" key={network.network}>
							<span className="fa-layers footer__social__item">
								<FontAwesomeIcon icon={network.icon} transform="right-1 down-1" style={{ color: 'rgba(0,0,0,0.1)' }} />
								<FontAwesomeIcon icon={network.icon} />
							</span>
						</a>
					))}
				</div>
			</div>
			<p className="footer__date">&copy; {new Date().getFullYear()}</p>
		</footer>
	</React.Fragment>
);

export default Footer;
