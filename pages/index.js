import { Component } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import Carousel from "../components/Carousel";
import Link from "next/link";

class App extends Component {
	static async getInitialProps() {
		let response = await axios.get(
			`${process.env.HOST_URL || "http://localhost:3000/"}api/posts`
		);
		return { posts: response.data };
	}

	render() {
		return (
			<React.Fragment>
				<style jsx>{`
					.header {
						padding: 1rem 1rem;
					}
					.post-cards {
						padding: 1rem 0;
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
						grid-gap: 1rem;
						justify-content: center;
					}
					.post-card:not(:last-child) {
						border-bottom: 1px solid rgba(0,0,0,0.1);
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
					}
					.section-title {
						display: flex;
						flex-basis: 100%;
						align-items: center;
					}
					.section-title::before,
					.section-title::after {
						content: "";
						flex-grow: 1;
						background: rgba(0, 0, 0, 0.125);
						height: 1px;
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
				<main>
					<div className="container">
						<div className="row">
							<Carousel posts={this.props.posts.filter(post => post.isFeatured)} />
						</div>
						<div className="row">
							<div className="section-header">
								<div className="section-title">
									<span className="blue-box">Latest Updates</span>
								</div>
							</div>
							<div className="post-cards-container">
								<div className="post-cards">
									{this.props.posts.map((post, i) => {
										return (
											<div className="post-card" key={i}>
												<ArticleCard post={post} />
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
