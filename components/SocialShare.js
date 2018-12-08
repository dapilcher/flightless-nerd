import { Fragment } from 'react';
// Social share button options   Facebook, GooglePlus, Linkedin, Twitter, Telegram, Whatsapp, Pinterest, VK, OK, Reddit, Tumblr, Livejournal, Mailru, Viber, Workplace, Line, EmailShareButton,
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';

const SocialShare = ({ title, id }) => (
  <Fragment>
    <style jsx>{`
		.social-share {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
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
		@media (min-width:576px) {
			.social-share {
				padding: 1rem 0;
			}
		}
		`}</style>
    <div className="social-share">
      <div className="social-share__button__wrapper">
        <FacebookShareButton
          className="social-share__button"
          url={`https://flightlessnerd.com/post?id=${id}`}>
          <FacebookIcon className="social-share__button__icon" size={32} round={true} />
        </FacebookShareButton>
      </div>
      <div className="social-share__button__wrapper">
        <TwitterShareButton
          className="social-share__button"
          url={`https://flightlessnerd.com/post?id=${id}`}
          title={title}
          via="FlightlessNews"
          hashtags={["FlightlessNerd"]}>
          <TwitterIcon className="social-share__button__icon" size={32} round={true} />
        </TwitterShareButton>
      </div>
      <div className="social-share__button__wrapper">
        <RedditShareButton
          className="social-share__button"
          url={`https://flightlessnerd.com/post?id=${id}`}
          title={title}>
          <RedditIcon className="social-share__button__icon" size={32} round={true} />
        </RedditShareButton>
      </div>
      <div className="social-share__button__wrapper">
        <EmailShareButton
          className="social-share__button"
          url={`https://flightlessnerd.com/post?id=${id}`}
          subject={`Check out this Flightless Nerd article: ${title}`}>
          <EmailIcon className="social-share__button__icon" size={32} round={true} />
        </EmailShareButton>
      </div>
    </div>
  </Fragment>
);

export default SocialShare;