import { Component, Fragment } from "react";
import PodcastListItem from "./PodcastListItem";

class PodcastList extends Component {
	state = {
		expandedEpisode: 0,
		expandedRef: {}
	};
	toggleCollapse = (e, ref) => {
		e.preventDefault();

		let section = ref;
		let isCollapsed = section.getAttribute("data-collapsed") === "true";

		if (isCollapsed) {
			this.expandSection(section);
		} else {
			this.collapseSection(section);
		}
	};

	collapseSection = ref => {
		console.log("collapsing", ref);
		let sectionHeight = ref.scrollHeight;

		let refTransition = ref.style.transition;
		ref.style.transition = "";

		requestAnimationFrame(function() {
			ref.style.height = sectionHeight + "px";
			ref.style.transition = refTransition;

			requestAnimationFrame(function() {
				ref.style.height = 0 + "px";
			});
		});

		ref.setAttribute("data-collapsed", "true");
	};

	expandSection = ref => {
		console.log("expanding", ref);
		let sectionHeight = ref.scrollHeight;

		ref.style.height = sectionHeight + "px";

		function func(e) {
			ref.removeEventListener("transitionend", func);

			ref.style = null;
		}

		ref.addEventListener("transitionend", func);

		ref.setAttribute("data-collapsed", "false");
	};
	render() {
		const { posts, updateCurrentEpisode } = this.props;
		return (
			<Fragment>
				<style jsx>{`
					.list-item:not(:last-child) {
						border-bottom: 1px solid #eb3e34;
					}
				`}</style>
				<div className="list-items__container">
					{posts.length > 0 ? (
						<Fragment>
							<div className="list-items">
								{posts.map((post, i) => {
									return (
										<div className="list-item" key={i}>
											<PodcastListItem
												episode={post}
												toggleCollapse={this.toggleCollapse}
												updateCurrentEpisode={() =>
													updateCurrentEpisode(post.epNumber)
												}
											/>
										</div>
									);
								})}
							</div>
						</Fragment>
					) : (
						<h4 id="no-posts">No posts available...</h4>
					)}
				</div>
			</Fragment>
		);
	}
}
export default PodcastList;
