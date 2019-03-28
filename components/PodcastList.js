import { Fragment } from "react";
import PodcastListItem from "./PodcastListItem";

const PodcastList = ({ posts, updateCurrentEpisode }) => {
	return (
		<Fragment>
			<style jsx>{``}</style>
			<div className="list-items__container">
				{posts.length > 0 ? (
					<Fragment>
						<div className="list-items">
							{posts.map((post, i) => {
								return (
									<div className="list-item" key={i}>
										<PodcastListItem
											episode={post}
											updateCurrentEpisode={() => {
												console.log("podcastlist component ", post.epNumber);
												updateCurrentEpisode(post.epNumber);
											}}
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
};

export default PodcastList;
