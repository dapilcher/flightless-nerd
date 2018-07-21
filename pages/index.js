import { Component } from "react";
import axios from "axios";
import ArticleCard from "../components/articleCard";
import Carousel from "../components/carousel";
import Link from "next/link";

class App extends Component {
	static async getInitialProps() {
		let response = await axios.get(
			`${process.env.HOST_URL || "http://localhost:3000/"}api/posts`
		);
		console.log(response.data);
		return { posts: response.data };
	}

	render() {
		return (
			<div>
				<style jsx>{`
					.header {
						padding: 16px 16px;
					}
					.posts {
						padding: 16px 16px;
					}
					.post {
						margin-bottom: 16px;
					}
				`}</style>
				<div className="row">
					<Carousel />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-8 posts">
							{this.props.posts.map((post, i) => {
								return (
									<div className="post" key={i}>
										<div className="row">
											<ArticleCard post={post} />
										</div>
									</div>
								);
							})}
						</div>
						<div className="col-md-4 sidebar">
							<form className="form-inline my-2 my-lg-0">
								<input
									className="form-control"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
							</form>
							<h6>Recent Posts</h6>
							<hr />
							<ul>
								{this.props.posts.map((post, i) => (
									<li key={i}>
										<Link href={`/posts/${post.slug}`}>
											<a>{post.title}</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
