import { Fragment, Component } from "react";
import axios from "axios";
import fetch from 'isomorphic-unfetch';
import ArticleCard from "../components/ArticleCard";
import ArticleCardGrid from "../components/ArticleCardGrid";
import Carousel from "../components/Carousel";
import AdBanner from '../components/AdBanner';
import SectionDivider from '../components/SectionDivider';

class App extends Component {
	static async getInitialProps() {
		let response = await fetch(
			`${process.env.HOST_URL || '/'}api/posts`
		);
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
					.post-cards {
						padding: 1rem 0;
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
						grid-gap: 1rem;
						justify-content: center;
					}
					.post-card:not(:last-child) {
						border-bottom: 1px solid #EB3E34;
					}
					.sidebar {
						padding: 1rem;
					}
					.section-header {
						width: 100%;
						height: auto;
						margin-top: 1rem;
						font-size: 2rem;
						text-align: center;
						font-family: Bangers;
					}
					.section-title {
						display: flex;
						color: #333;
						flex-basis: 100%;
						align-items: center;
					}
					.section-title::before,
					.section-title::after {
						content: "";
						flex-grow: 1;
						background: #586CFF;
						height: 2px;
						font-size: 0px;
						line-height: 0px;
					}
					.section-title::before {
						margin-right: 1rem;
					}
					.section-title::after {
						margin-left: 1rem;
					}
					@media (min-width: 768px) {
						.post-cards {
							grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
						}
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
						{/* <AdBanner /> */}
						<div className="row">
							<Carousel posts={this.props.posts.filter(post => post.isFeatured)} />
						</div>
						<div className="row">
							<SectionDivider text="Latest Updates" />
							{/* <div className="section-header">
								<div className="section-title">
									<span>Latest Updates</span>
								</div>
							</div> */}
							<ArticleCardGrid posts={this.props.posts} />
						</div>
						{/* <AdBanner /> */}
					</div>
				</main>
			</Fragment>
		);
	}
}

export default App;
