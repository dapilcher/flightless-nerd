import { Fragment, Component } from "react";
import fetch from "isomorphic-unfetch";
import ArticleCardGrid from "../components/ArticleCardGrid";
import Carousel from "../components/Carousel";
import SectionDivider from "../components/SectionDivider";
import SubscribeForm from "../components/SubscribeForm";
import PatreonCTA from "../components/PatreonCTA";
import Player from "../components/Player";
import PodcastList from "../components/PodcastList";
import PodcastServiceButtons from "../components/PodcastServiceButtons";

class App extends Component {
	constructor(props) {
		super(props);
		let currentEpisode = props.podcasts ? props.podcasts[0].epNumber : 1;
		this.state = {
			currentEpisode
		};
	}

	static async getInitialProps() {
		const podcasts = await fetch(
			`${process.env.HOST_URL || "/"}api/posts/type/podcast`
		).then(res => res.json());
		let posts = await fetch(`${process.env.HOST_URL || "/"}api/posts`).then(
			res => res.json()
		);

		return { posts, podcasts };
	}

	updateCurrentEpisode = epNumber => {
		this.setState({ currentEpisode: epNumber });
	};

	getNextEpisode = () => {
		const newEp = this.state.currentEpisode - 1;
		if (
			newEp <= 0 ||
			this.props.podcasts.filter(p => p.epNumber === newEp).length < 1
		)
			return;
		else this.updateCurrentEpisode(newEp);
	};

	render() {
		const { posts, podcasts } = this.props;
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
							<Carousel posts={posts.filter(post => post.isFeatured)} />
						</div>
						<div className="row">
							<PatreonCTA />
							{/* <SubscribeForm /> */}
						</div>
						<div className="row">
							<SectionDivider text="From the Podcast" />
							<Player
								episode={
									podcasts.filter(
										ep => ep.epNumber === this.state.currentEpisode
									)[0]
								}
								onEnd={this.getNextEpisode}
							/>
							<PodcastServiceButtons
								style={{ margin: "1rem 10px 2rem 10px" }}
							/>
							<PodcastList
								posts={podcasts}
								count={3}
								updateCurrentEpisode={this.updateCurrentEpisode}
							/>
						</div>
						<div className="row">
							<SectionDivider text="Latest Updates" />
							<ArticleCardGrid posts={posts} />
						</div>
					</div>
				</main>
			</Fragment>
		);
	}
}

export default App;
