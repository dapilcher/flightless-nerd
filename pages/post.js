import { Component, Fragment } from "react";
import axios from "axios";
import fetch from 'isomorphic-unfetch';
import helpers from '../helpers';
import AdBanner from '../components/AdBanner';

const Post = ({ post }) => (
	<Fragment>
		<style jsx>{`
			.post__container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				color: #333;
			}
			.post__img {
				max-width: 100%;
			}
			.post__title, .post__subtitle, .post__content {
				padding: 0 5px;
			}
			.post__title, .post__subtitle {
				font-family: Montserrat;
				font-weight: 500;
			}
			.post__content {
				font-family: Raleway;
			}
			.post__title {
				font-size: 1.25rem;
			}
			.post__subtitle {
				font-size: 0.9rem;
				color: rgb(112,112,112);
			}
			@media (min-width:768px) {
				.post__container {
					max-width: 75%;
					margin: 0 auto;
				}
			}
		`}</style>
		<div className="post__container">
			<AdBanner />
			{post.image ?
				<img className="post__img" src={post.image.secure_url} alt={post.title} /> :
				''}
			<h3 className="post__title">{post.title}</h3>
			<h6 className="post__subtitle text-muted">{helpers.toRelativeTime(post.publishedDate)}{post.author ? ` by ${post.author.name.first} ${post.author.name.last}` : ''}</h6>
			<div className="post__content" dangerouslySetInnerHTML={post.content.extended.html ? { __html: post.content.extended.html } : { __html: post.content.extended }} />
		</div>
	</Fragment>
);

class PostContainer extends Component {
	static async getInitialProps({ query }) {
		const response = await fetch(
			`${process.env.HOST_URL || "http://localhost:3000/"}api/post/${query.id}`
		);
		const data = await response.json();
		return { post: data };
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
