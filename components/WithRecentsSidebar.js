import { Fragment } from "react";
import ArticleCardGrid from './ArticleCardGrid'

const WithRecentsSidebar = ({ children, recents }) => (
	<Fragment>
		<style jsx>{`
		.with-sidebar__container {
			display: flex;
			flex-direction: row;
			max-width: 100%;
		}
		.left {
			flex: 3;
		}
		.right {
			display: none;
		}
		.sidebar {
			display: none;
		}
		@media (min-width: 768px) {
			ul {
				list-style-type: none;
				margin: 0;
				padding: 0;
			}
			.right {
				display: block;
				flex: 1;
				margin-left: 1.5rem;
			}
			.left {
				margin-right: 1.5rem;
			}
			.sidebar {
				display: flex;
				max-width: 100%;
				flex-direction: column;
				margin: 1rem 0;
				// border-left: 2px solid #586CFF;
				// border-radius: 1rem 1rem 1rem 0;
				align-items: start;
				// background-color: #eee;
				color: #333;
				// box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
			}
			.sidebar__title {
				font-family: Montserrat;
				font-weight: 500;
				font-size: 1.25rem;
				letter-spacing: 1px;
			}
			.sidebar__content {
				font-family: Raleway;
			}
		}
		`}</style>
		<div className="with-sidebar__container">
			<div className="left">
				{children}
			</div>
			<div className="right">
				<div className="sidebar">
					<div className="sidebar__section">
						<h3 className="sidebar__title">Recent Posts</h3>
						<ArticleCardGrid posts={recents} />
					</div>
				</div>
			</div>
		</div>
	</Fragment>
);

export default WithRecentsSidebar;