import { Component } from "react";
import Link from "next/link";
const helpers = require("../helpers");

const ArticleCard = props => (
	<div className="card">
		{props.post.image ?
			<img className="card-img-top" src={props.post.image.secure_url} alt={props.post.title} /> :
			''}
		<div className="card-body">
			<h5 className="card-title">{props.post.title}</h5>
			{/* TODO: Format date */}
			<h6 className="card-subtitle text-muted">
				{helpers.toRelativeTime(props.post.publishedDate)}{props.post.author ? ` by ${props.post.author.name.first} ${props.post.author.name.last}` : ''}
			</h6>
			<div
				className="card-text"
				dangerouslySetInnerHTML={{ __html: props.post.content.brief }}
			/>
			<Link href={`/post?id=${props.post._id}`} prefetch>
				<a className="card-link">Read on</a>
			</Link>
		</div>
	</div>
);

export default ArticleCard;
