import React from "react";
import Link from "next/link";
const helpers = require("../helpers");

const ArticleCard = props => (
	<React.Fragment>
		<style jsx>{`
			.card {
				cursor: pointer;
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
		`}</style>
		<Link href={`/post?id=${props.post._id}`} prefetch>
			<div className="card">
				{props.post.image ?
					<img className="card-img-top" src={props.post.image.secure_url} alt={props.post.title} /> :
					''}
				<div className="card-body">
					<h5>{props.post.title}</h5>
					{/* TODO: Format date */}
					<h6 className="card-subtitle text-muted">
						{helpers.toRelativeTime(props.post.publishedDate)}
						{/* {helpers.toRelativeTime(props.post.publishedDate)}{props.post.author ? ` by ${props.post.author.name.first} ${props.post.author.name.last}` : ''} */}
					</h6>
					<div
						className="card-text"
						dangerouslySetInnerHTML={{ __html: props.post.content.brief }}
					/>
					{/* <Link href={`/post?id=${props.post._id}`} prefetch>
				<a className="card-link">Read on</a>
			</Link> */}
				</div>
			</div>
		</Link>
	</React.Fragment>
);

export default ArticleCard;
