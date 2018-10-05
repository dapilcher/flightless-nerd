import React from "react";
import Link from "next/link";
const helpers = require("../helpers");

const ArticleCard = props => (
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

			@media (min-width: 768px) {
				.article-card {
					flex-direction: column;
					// font-size: 14px;
					margin: 0;
					padding-bottom: 0;
					border: 1px solid #586CFF;
					border-radius: 1rem 1rem 1rem 0;
					align-items: start;
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
				.pointer {
					cursor: pointer;
				}
			}
		`}</style>
		<div className="article-card">
			<div className="article-card-img-container">
				<Link href={`/post?id=${props.post._id}`}>
					{props.post.image ?
						<img className="article-card-img pointer" src={props.post.image.secure_url} alt={props.post.title} /> :
						<div className="article-card-img-placeholder pointer"><span>FN</span></div>
					}
				</Link>
			</div>
			<div className="article-card-body">
				<Link href={`/post?id=${props.post._id}`} prefetch>
					<h5 className="article-card-title pointer">{props.post.title}</h5>
				</Link>
				<h6 className="article-card-subtitle">
					{helpers.toRelativeTime(props.post.publishedDate)}
				</h6>
				<div
					className="article-card-text"
					dangerouslySetInnerHTML={{ __html: props.post.content.brief }}
				/>
			</div>
		</div>
	</React.Fragment>
);

export default ArticleCard;
