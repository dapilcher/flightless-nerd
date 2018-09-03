import React from "react";
import axios from "axios";
import helpers from '../helpers';

const Post = ({ post }) => (
	<React.Fragment>
		<style jsx>{`
			.post-container {
				max-width: 75%;
				margin: 0 auto;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			.post-img {
				max-width: 100%;
			}
		`}</style>
		<div className="post-container">
			{post.image ?
				<img className="post-img" src={post.image.secure_url} alt={post.title} /> :
				''}
			<h3>{post.title}</h3>
			<h6 className="text-muted">{helpers.toRelativeTime(post.publishedDate)}{post.author ? ` by ${post.author.name.first} ${post.author.name.last}` : ''}</h6>
			<div dangerouslySetInnerHTML={{ __html: post.content.extended }} />
		</div>
	</React.Fragment>
);

class PostContainer extends React.Component {
	static async getInitialProps({ query }) {
		let response = await axios.get(
			`${process.env.HOST_URL || "http://localhost:3000/"}api/post/${query.id}`
		);
		return { post: response.data };
	}
	render() {
		return (
			<div className="container">
				{this.props.post.Error ? (
					<p>Could not find post</p>
				) : (
						<Post post={this.props.post[0]} />
					)}
			</div>
		);
	}
}

export default PostContainer;
