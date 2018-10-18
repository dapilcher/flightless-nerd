import React from "react";
import Link from "next/link";
const helpers = require("../helpers");
import Title from './Title';

const ArticleCard = ({ post }) => (
	<React.Fragment>
		<style jsx>{`
			.article-card {
				max-width: 100%;
				display: flex;
				flex-direction: row;
				font-size: 14px;
				margin: 0 10px;
				padding-bottom: 1rem;
			}
			.article-card-img-container {
				width: 50vw;
			}
			.article-card-img,
			.article-card-img-placeholder {
				max-width: 100%;
				border-radius: 1rem 1rem 1rem 0;
			}
			.article-card-img-placeholder {
				background-color: #586CFF;
        background-image: linear-gradient(to bottom right, #586CFF, #2539CC);
				color: white;
				height: 100%;
				text-align: center;
			}
			.article-card-img-placeholder > span {
				font-size: 4rem;
				font-weight: 300;
				margin: 1rem;
			}
			.article-card-body {
				display: flex;
				flex-direction: column;
				padding: 5px;
				margin: auto 0;
				color: #333;
			}
			.article-card-title, .article-card-subtitle {
				font-family: Montserrat;
			}
			.article-card-body > h5 {
				font-weight: 400;
				font-size: 1rem;
			}
			.article-card-body > h6 {
				font-weight: 300;
				font-size: 0.8rem;
			}
			.article-card-subtitle {
				color: rgb(112,112,112);
			}
			.article-card-text {
				display: none;
			}
			.pointer {
				cursor: pointer;
			}
			@media (min-width: 685px) {
				.article-card {
					flex-direction: column;
					margin: 0;
					padding-bottom: 0;
					border-left: 2px solid #586CFF;
					border-radius: 1rem 1rem 1rem 0;
					align-items: start;
					box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
					transition: 100ms;
				}
				.article-card:hover {
					transform-origin: 50% 10%;
					transform: scale(1.02) rotate(-0.5deg);
				}
				.article-card-img-container {
					max-width: 100%;
				}
				.article-card-img,
				.article-card-img-placeholder {
					border-radius: 1rem 1rem 0 0;
				}
				.article-card-body {
					padding: 10px;
					margin: 0;
					width: 100%;
					background-color: #eee;
					border-radius: 0 0 1rem 0;
				}
				.article-card-body > h5 {
					font-weight: 500;
					font-size: 1.25rem;
				}
				.article-card-body > h6 {
					font-weight: 400;
					font-size: 0.9rem;
				}
				.article-card-text {
					display: block;
				}
			}
			// @media (min-width: 685px) {
			// 	.article-card {
			// 		flex-direction: column;
			// 		margin: 0;
			// 		padding-bottom: 0;
			// 		border: 1px solid #586CFF;
			// 		border-radius: 1rem 1rem 1rem 0;
			// 		align-items: start;
			// 		// box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
			// 	}
			}
		`}</style>
		<Link href={`/post?id=${post._id}`}>
			<div className="article-card pointer">
				<div className="article-card-img-container">
					{post.image ?
						<img className="article-card-img" src={post.image.secure_url} alt={post.title} /> :
						<div className="article-card-img-placeholder pointer"><span>FN</span></div>
					}
				</div>
				<div className="article-card-body">
					{/* <h5 className="article-card-title">{post.title}</h5>
					<h6 className="article-card-subtitle">
						{helpers.toRelativeTime(post.publishedDate)}
					</h6> */}
					<Title title={post.title} subtitle={helpers.toRelativeTime(post.publishedDate)} />
					{/* <div
					className="article-card-text"
					dangerouslySetInnerHTML={post.content.brief.html ? { __html: post.content.brief.html } : { __html: post.content.brief }}
				/> */}
				</div>
			</div>
		</Link>
	</React.Fragment>
);

export default ArticleCard;
