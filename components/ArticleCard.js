import React from "react";
import Link from "next/link";
const helpers = require("../helpers");
import Title from "./Title";
import CategoryTagList from "./CategoryTagList";

const ArticleCard = ({ post }) => (
	<React.Fragment>
		<style jsx>{`
			.article-card {
				max-width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				font-size: 14px;
				margin: 0 10px;
				padding-bottom: 1rem;
			}
			.article-card-img-container {
				width: 42vw;
			}
			.article-card-img,
			.article-card-img-placeholder {
				max-width: 42vw;
				border-radius: 1rem 1rem 1rem 0;
			}
			.article-card-img-placeholder {
				background-color: #586cff;
				background-image: linear-gradient(to bottom right, #586cff, #2539cc);
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
				padding: 0 10px;
				margin: auto 0;
				color: #333;
				max-width: 58vw;
			}
			.article-card-title,
			.article-card-subtitle {
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
				color: rgb(112, 112, 112);
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
					// border-left: 2px solid #586CFF;
					border-radius: 1rem 1rem 1rem 0;
					align-items: start;
					box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
					transition: 100ms;
				}
				.article-card:hover {
					transform-origin: 50% 10%;
					transform: scale(1.02) rotate(-0.5deg);
				}
				.article-card-img-container {
					width: 100%;
					max-width: 100%;
					padding: 0;
				}
				.article-card-img,
				.article-card-img-placeholder {
					max-width: 100%;
					border-radius: 1rem 1rem 0 0;
					padding: 0;
					margin: 0;
				}
				.article-card-body {
					padding: 10px;
					margin: 0;
					width: 100%;
					max-width: 100%;
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
		`}</style>
		<Link
			href={`/post?slug=${post.slug}`}
			as={`/post/${post.slug}`}
			prefetch={post.isFeatured}
		>
			<div className="article-card pointer">
				<div className="article-card-img-container">
					{post.image ? (
						<img
							className="article-card-img"
							src={post.image.secure_url}
							alt={post.title}
						/>
					) : post.type && post.type === "podcast" ? (
						<img
							className="article-card-img"
							src="https://res.cloudinary.com/flightlessnerd/image/upload/v1553121319/flightlessnerd/Ostrich_for_web.jpg"
							alt={post.title}
						/>
					) : (
						<div className="article-card-img-placeholder pointer">
							<span>FN</span>
						</div>
					)}
				</div>
				<div className="article-card-body">
					<CategoryTagList categories={post.categories} />
					<Title
						title={`${
							post.type === "podcast" && post.epNumber
								? `Ep ${post.epNumber} - `
								: ""
						}${post.title}`}
						subtitle={helpers.toRelativeTime(post.publishedDate)}
					/>
				</div>
			</div>
		</Link>
	</React.Fragment>
);

export default ArticleCard;
