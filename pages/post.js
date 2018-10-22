import { Component, Fragment } from "react";
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown/';
import helpers from '../helpers';
import WithRecentsSidebar from '../components/WithRecentsSidebar';
import ResponsiveWidthContainer from '../components/ResponsiveWidthContainer'
import Title from '../components/Title';

const Post = ({ post }) => (
	<Fragment>
		<style jsx global>{`
		img {
			max-width: 100%;
			padding: 0;
			// border: 0.5rem solid #FFE838;
			margin: 0.5rem 0;
			box-shadow: 0 0 20px rgba(0,0,0,0.5);
		}
		p {
			font-family: Raleway;
			line-height: 1.8rem;
			font-size: 1.1rem;
			color: #333;
			margin: 1rem 0;
			padding: 0 10px;
			text-align: justify;
		}
		@media (min-width: 576px) {
			p {
				padding: 0;
			}
			img {
				box-shadow: 0 0 20px rgba(0,0,0,0.5);
				padding: 1rem;
				border-width: 0.5rem;
			}
		}
		`}</style>
		<style jsx>{`
		.post__container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: #333;
		}
		.post__img {
			max-width: 100%;
			border: none;
			border-bottom: 0.3rem solid #EB3E34;
			margin: 0;
			margin-bottom: 1rem;
			padding: 0;
		}
		.post__content {
			padding: 0 7px;
		}
		.post__content  p {
			font-family: Raleway;
			line-height: 1.7rem;
			font-size: 1.1rem;
			padding: 0 5px;
		}
		@media (min-width:576px) {
			.post__content {
				padding: 0;
			}
		}
		@media (min-width:768px) {
			.post__img {
				max-width: 100%;
				border-bottom-width: 0.5rem;
			}
			.post__container {
				// max-width: 75%;
			}
		}
		`}</style>
		{post.image ?
			<img className="post__img" src={post.image.secure_url} alt={post.title} /> :
			''}
		<Title title={post.title} subtitle={`${helpers.toRelativeTime(post.publishedDate)}${post.author ? ` by ${post.author.name.first} ${post.author.name.last}` : ''}`} />
		{post.content.extended.md ?
			<ReactMarkdown
				className="post__content"
				escapeHtml={false}
				source={post.content.extended.md} /> :
			<div className="post__content" dangerouslySetInnerHTML={{ __html: post.content.extended }} />}
	</Fragment>
);

class PostContainer extends Component {
	static async getInitialProps({ query }) {
		const singlePost = await fetch(`${process.env.HOST_URL || '/'}api/post/${query.id}`).then(res => res.json());
		const recentPosts = await fetch(`${process.env.HOST_URL || '/'}api/posts?limit=3`).then(res => res.json());

		return { singlePost, recentPosts };
	}

	render() {
		const { singlePost, recentPosts } = this.props;
		return (
			<Fragment>
				<style jsx>{`
			.post__container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				color: #333;
			}
			`}</style>
				<div className="post__container">
					<ResponsiveWidthContainer>
						<WithRecentsSidebar recents={recentPosts}>
							{singlePost.Error ? (
								<p>Could not find post</p>
							) : (
									<Post post={singlePost[0]} />
								)}
						</WithRecentsSidebar>
					</ResponsiveWidthContainer>
				</div>
			</Fragment>
		);
	}
}

export default PostContainer;
