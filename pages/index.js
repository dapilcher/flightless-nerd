import { Fragment, Component } from "react";
import fetch from "isomorphic-unfetch";
import ArticleCardGrid from "../components/ArticleCardGrid";
import Carousel from "../components/Carousel";
import SectionDivider from "../components/SectionDivider";
import SubscribeForm from "../components/SubscribeForm";
import PodcastPlayer from "../components/PodcastPlayer";

class App extends Component {
	static async getInitialProps() {
		let response = await fetch(`${process.env.HOST_URL || "/"}api/posts`);
		const data = await response.json();
		return { posts: data };
	}

	render() {
		return (
			<Fragment>
				<style jsx>{`
					main {
						font-family: Raleway, sans-serif;
						font-weight: 400;
					}
					.container {
						display: flex;
						flex-direction: column;
						align-items: center;
					}
					.row {
						width: 100%;
					}
					@media (min-width: 685px) {
						.post-card:not(:last-child) {
							border-bottom: none;
						}
					}
				`}</style>
				<style global jsx>{`
					ul {
						list-style-type: none;
						padding: 0;
					}
				`}</style>
				<main>
					<div className="container">
						<div className="row">
							<Carousel
								posts={this.props.posts.filter(post => post.isFeatured)}
							/>
						</div>
						<div className="row">
							<SubscribeForm />
						</div>
						<div className="row">
							<SectionDivider text="From the Podcast" />
							<PodcastPlayer />
						</div>
						<div className="row">
							<SectionDivider text="Latest Updates" />
							<ArticleCardGrid posts={this.props.posts} />
						</div>
						<div className="row">
							<SectionDivider text="Recent Podcast Episodes" />
							<PodcastPlayer />
						</div>
					</div>
				</main>
			</Fragment>
		);
	}
}

export default App;
