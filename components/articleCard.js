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
				max-width: 50vw;
			}
			.article-card-img {
				max-width: 100%;
				border-radius: 1rem 1rem 1rem 0;
			}
			.article-card-body {
				display: flex;
				flex-direction: column;
				padding: 5px;
				margin: auto 0;
			}
			.article-card-body > h5 {
				font-weight: 300;
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


			.blue-box {
				position: relative;
			}
			.blue-box::before {
				z-index: -1;
				content: "";
				position: absolute;
				background-color: #007bff;
				left: 0;
				top: 50%;
				width: 100%;
				height: 30%;
				transform: rotate(1deg);
			}

			@media (min-width: 768px) {
				.article-card {
					flex-direction: column;
					font-size: 14px;
					margin: 0;
					padding-bottom: 0;
					border: 1px solid rgba(0,0,0,0.1);
					border-radius: 1rem 1rem 1rem 0;
				}
				.article-card-img-container {
					max-width: 100%;
				}
				.article-card-img {
					border-radius: 1rem 1rem 0 0;
				}
				.article-card-body {
					padding: 10px;
					margin: 0;
					// margin-top: 1rem;
				}
				.article-card-body > h5 {
					font-weight: 300;
					font-size: 1.25rem;
				}
				.article-card-body > h6 {
					font-weight: 300;
					font-size: 0.9rem;
				}
				.article-card-text {
					display: block;
				}
			}
		`}</style>
		<Link href={`/post?id=${props.post._id}`}>
			<div className="article-card">
				{props.post.image ?
					<div className="article-card-img-container">
						<img className="article-card-img" src={props.post.image.secure_url} alt={props.post.title} />
					</div> :
					''}
				<div className="article-card-body">
					<h5 className="article-card-title">{props.post.title}</h5>
					<h6 className="article-card-subtitle">
						{helpers.toRelativeTime(props.post.publishedDate)}
					</h6>
					<div
						className="article-card-text"
						dangerouslySetInnerHTML={{ __html: props.post.content.brief }}
					/>
				</div>
			</div>
		</Link>
	</React.Fragment>
);

export default ArticleCard;
