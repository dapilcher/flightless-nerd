import { Fragment } from "react";
import Link from "next/link";
import ArticleCard from "./ArticleCard";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";

const ArticleCardGrid = ({ posts, count = 6 }) => {
	if (count > 0) {
		posts = posts.slice(0, count);
	}
	return (
		<Fragment>
			<style jsx>{`
				.post-cards__container {
					diplay: flex;
					flex-direction: column;
					justify-content: center;
				}
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
				.more-posts__button__container {
					display: grid;
				}
				.more-posts__button {
					margin: 2rem auto;
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
					<Fragment>
						<div className="post-cards">
							{posts.map((post, i) => {
								return (
									<div className="post-card" key={i}>
										<ArticleCard post={post} />
									</div>
								);
							})}
						</div>
						{count > 0 && (
							<div className="more-posts__button__container">
								<div className="more-posts__button">
									<Link href="/articles">
										<Button>
											See more <FaArrowRight />
										</Button>
									</Link>
								</div>
							</div>
						)}
					</Fragment>
				) : (
					<h4 id="no-posts">No posts available...</h4>
				)}
			</div>
		</Fragment>
	);
};

export default ArticleCardGrid;
