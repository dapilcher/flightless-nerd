import React from "react";

const withRecentsSidebar = props => (
	<React.Fragment>
		<div className="col-md-8">{props.children}</div>
		<div className="col-md-4 sidebar">
			<h6>Recent Posts</h6>
			<hr />
			<ul>
				{props.posts.map((post, i) => (
					<li key={i}>
						<Link href={`/posts/${post.slug}`}>
							<a>{post.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	</React.Fragment>
);

export default withRecentsSidebar;
