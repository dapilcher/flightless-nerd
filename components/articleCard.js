import { Component } from "react";
import Link from "next/link";

const ArticleCard = props => (
	<div className="card">
		<div className="card-body">
			<h5 className="card-title">{props.post.title}</h5>
			{/* TODO: Format date */}
			<h6 className="card-subtitle text-muted">{props.post.publishedDate}</h6>
			<div
				className="card-text"
				dangerouslySetInnerHTML={{ __html: props.post.content.brief }}
			/>
			<Link href={`/posts/${props.post.slug}`}>
				<a className="card-link">Read on</a>
			</Link>
		</div>
	</div>
);

export default ArticleCard;
