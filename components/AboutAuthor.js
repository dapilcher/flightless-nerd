import { Fragment } from "react";
import { FaTwitter, FaTwitch } from "react-icons/fa";

const TwitterLink = ({ handle }) => (
	<>
		<style jsx>{`
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				margin: 0;
				padding: 0;
				color: #eee;
			}
			a {
				color: #eee;
				text-decoration: none;
			}
			a:hover {
				color: #eee;
				text-decoration: underline;
			}
		`}</style>
		<h5>
			<FaTwitter /> <a href={`https://twitter.com/${handle}`}>{`@${handle}`}</a>
		</h5>
	</>
);

const TwitchLink = ({ channel }) => (
	<>
		<style jsx>{`
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				margin: 0;
				padding: 0;
			}
			a {
				color: #eee;
				text-decoration: none;
			}
			a:hover {
				color: #eee;
				text-decoration: underline;
			}
		`}</style>
		<h5>
			<FaTwitch /> <a href={`https://twitch.tv/${channel}`}>{`${channel}`}</a>
		</h5>
	</>
);

const AboutAuthor = ({ author }) => (
	<Fragment>
		<style jsx>{`
			.about-author {
				display: grid;
				grid-gap: 1rem;
				grid-template-columns: 100px 1fr;
				grid-template-rows: 100px 1fr;
				grid-template-areas: "image name" "text text";
				background: #eb3e34;
				color: #eee;
				padding: 1rem;
				box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
				border-radius: 1rem 1rem 1rem 0;
				margin: 2rem 10px;
			}
			a {
				color: #eee;
				text-decoration: none;
			}
			a:hover {
				color: #eee;
				text-decoration: none;
			}
			.about-author__name,
			.about-author__text {
				margin: 0;
				padding: 0;
				color: #eee;
			}
			.about-author__img {
				padding: 0;
				margin: 0;
				width: 100px;
				height: 100px;
				border-radius: 1rem 1rem 1rem 0;
				grid-area: image;
			}
			.about-author__name {
				grid-area: name;
				place-self: end start;
			}
			.about-author__text {
				grid-area: text;
			}
			@media (min-width: 576px) {
				.about-author {
					margin: 2rem 0;
				}
			}
			@media (min-width: 768px) {
			}
			@media (min-width: 992px) {
				.about-author {
					grid-template-columns: 200px 1fr;
					grid-template-rows: auto 1fr;
					grid-template-areas: "image name" "image text";
				}
				.about-author__img {
					width: 200px;
					height: 200px;
					grid-area: image;
				}
				.about-author__name {
					grid-area: name;
				}
				.about-author__text {
					grid-area: text;
				}
			}
		`}</style>
		<div className="about-author">
			{author.image && (
				<img
					className="about-author__img"
					src={author.image.secure_url}
					alt={`${author.name.first} ${author.name.last}`}
				/>
			)}
			<div className="about-author__name">
				<h3>{`${author.name.first} ${author.name.last}`}</h3>
				{author.social && author.social.twitterHandle && (
					<TwitterLink handle={author.social.twitterHandle} />
				)}
				{author.social && author.social.twitchChannel && (
					<TwitchLink channel={author.social.twitchChannel} />
				)}
			</div>
			{author.about && <p className="about-author__text">{author.about}</p>}
		</div>
	</Fragment>
);

export default AboutAuthor;
