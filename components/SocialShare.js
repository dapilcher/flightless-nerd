import { Component, Fragment } from "react";
// Social share button options   Facebook, GooglePlus, Linkedin, Twitter, Telegram, Whatsapp, Pinterest, VK, OK, Reddit, Tumblr, Livejournal, Mailru, Viber, Workplace, Line, EmailShareButton,
import {
	FacebookShareButton,
	TwitterShareButton,
	RedditShareButton,
	PinterestShareButton,
	EmailShareButton
} from "react-share";
import {
	FacebookIcon,
	TwitterIcon,
	RedditIcon,
	PinterestIcon,
	EmailIcon
} from "react-share";
import getAnalytics from "../utils/getAnalytics";

const analytics = getAnalytics();

class SocialShare extends Component {
	logEvent = network => {
		analytics.logEvent("Share", `${network} share`, this.props.title);
	};
	render() {
		let { title, slug, img, iconSize = 32 } = this.props;
		return (
			<Fragment>
				<style jsx>{`
					.social-share {
						display: grid;
						grid-template-columns: repeat(5, ${iconSize}px);
						grid-gap: 1rem;
						padding: 1rem 10px;
					}
					.social-share > * {
						outline: none;
					}
					.social-share > *:hover:not(:active) {
						opacity: 0.75;
					}
					.social-share__button__wrapper {
						cursor: pointer;
					}
					@media (min-width: 576px) {
						.social-share {
							padding: 1rem 0;
						}
					}
				`}</style>
				<div className="social-share">
					<div className="social-share__button__wrapper">
						<FacebookShareButton
							className="social-share__button"
							url={`https://flightlessnerd.com/post/${slug}`}
							onShareWindowClose={() => logEvent("Facebook")}
						>
							<FacebookIcon
								className="social-share__button__icon"
								size={iconSize}
								round={true}
							/>
						</FacebookShareButton>
					</div>
					<div className="social-share__button__wrapper">
						<TwitterShareButton
							className="social-share__button"
							url={`https://flightlessnerd.com/post/${slug}`}
							onShareWindowClose={() => logEvent("Twitter")}
							title={title}
							via="FlightlessNews"
							hashtags={["FlightlessNerd"]}
						>
							<TwitterIcon
								className="social-share__button__icon"
								size={iconSize}
								round={true}
							/>
						</TwitterShareButton>
					</div>
					<div className="social-share__button__wrapper">
						<RedditShareButton
							className="social-share__button"
							url={`https://flightlessnerd.com/post/${slug}`}
							onShareWindowClose={() => logEvent("Reddit")}
							title={title}
						>
							<RedditIcon
								className="social-share__button__icon"
								size={iconSize}
								round={true}
							/>
						</RedditShareButton>
					</div>
					<div className="social-share__button__wrapper">
						<PinterestShareButton
							className="social-share__button"
							url={`https://flightlessnerd.com/post/${slug}`}
							onShareWindowClose={() => logEvent("Pinterest")}
							media={img}
							description={`Check out this Flightless Nerd article: ${title}`}
						>
							<PinterestIcon
								className="social-share__button__icon"
								size={iconSize}
								round={true}
							/>
						</PinterestShareButton>
					</div>
					<div className="social-share__button__wrapper">
						<EmailShareButton
							className="social-share__button"
							url={`https://flightlessnerd.com/post/${slug}`}
							onShareWindowClose={() => logEvent("Email")}
							subject={`Check out this Flightless Nerd article: ${title}`}
						>
							<EmailIcon
								className="social-share__button__icon"
								size={iconSize}
								round={true}
							/>
						</EmailShareButton>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default SocialShare;
