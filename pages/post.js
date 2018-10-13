import { Component, Fragment } from "react";
import axios from "axios";
import fetch from 'isomorphic-unfetch';
import helpers from '../helpers';
import WithRecentsSidebar from '../components/WithRecentsSidebar';
import ResponsiveWidthContainer from '../components/ResponsiveWidthContainer'
import AdBanner from '../components/AdBanner';
import Title from '../components/Title';

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
				border-bottom: 0.3rem solid #EB3E34;
				margin-bottom: 1rem;
			}
			.post__title, .post__subtitle, .post__content {
				padding: 0 7px;
			}
			.post__title, .post__subtitle {
				font-family: Montserrat;
				font-weight: 500;
			}
			.post__content {
				font-family: Raleway;
				line-height: 1.7rem;
				font-size: 1.1rem;
			}
			.post__title {
				font-size: 1.25rem;
			}
			.post__subtitle {
				font-size: 0.9rem;
				color: rgb(112,112,112);
			}
			@media (min-width:576px) {
				.post__title, .post__subtitle, .post__content {
					padding: 0;
				}
			}
			@media (min-width:768px) {
				.post__img {
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
		<div className="post__content" dangerouslySetInnerHTML={post.content.extended.html ? { __html: post.content.extended.html } : { __html: post.content.extended }} />
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
						<AdBanner />
						<WithRecentsSidebar>
							{this.props.post.Error ? (
								<p>Could not find post</p>
							) : (
									<Post post={this.props.post[0]} />
								)}
						</WithRecentsSidebar>
						<AdBanner />
					</ResponsiveWidthContainer>
				</div>
			</Fragment>
		);
	}
}

export default PostContainer;
