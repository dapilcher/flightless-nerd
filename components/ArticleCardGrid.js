import { Fragment } from "react";
import ArticleCard from "./ArticleCard";

const ArticleCardGrid = ({ posts, count = 6 }) => (
	<Fragment>
		<style jsx>{`
			.post-cards {
				padding: 1rem 0;
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
				grid-gap: 1rem;
				justify-content: center;
			}
			.post-card:not(:last-child) {
				border-bottom: 1px solid #eb3e34;
			}
			#no-posts {
				font-family: Raleway;
				font-size: 1.2rem;
				font-weight: 400;
				margin: 0 10px 1rem 10px;
				margin-bottom: 1rem;
			}
			@media (min-width: 768px) {
				.post-cards {
					grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
				}
			}
			@media (min-width: 685px) {
				.post-card:not(:last-child) {
					border-bottom: none;
				}
			}
			@media (min-width: 568px) {
				#no-posts {
					margin: 0 0 1rem 0;
				}
			}
		`}</style>
		<div className="post-cards__container">
			{posts.length > 0 ? (
				<div className="post-cards">
					{posts.slice(0, count).map((post, i) => {
						return (
							<div className="post-card" key={i}>
								<ArticleCard post={post} />
							</div>
						);
					})}
				</div>
			) : (
				<h4 id="no-posts">No posts available...</h4>
			)}
		</div>
	</Fragment>
);

export default ArticleCardGrid;
