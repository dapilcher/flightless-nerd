import Link from "next/link";
import CategoryTagList from "./CategoryTagList";
import getAnalytics from "../utils/getAnalytics";

const analytics = getAnalytics();

const Slide = ({ sliding, post }) => (
	<React.Fragment>
		<style global jsx>{`
			p {
				margin-bottom: 0.5rem;
			}
		`}</style>
		<style jsx>{`
			// max-width: 100%;
			.slide-img {
				width: 100%;
			}
			.slide-text-title {
				font-size: 1rem;
				font-weight: 500;
				color: #eee;
			}
			.slide-text-title:hover {
				text-decoration: none;
			}
			.slide-text-box {
				color: #eee;
				position: absolute;
				margin: 0.5rem;
				left: 0;
				bottom: 0;
				background-color: rgba(0, 0, 0, 0.5);
				padding: 0.5rem;
				border-radius: 1rem 1rem 1rem 0;
			}
			.slide-text-content {
				display: none;
			}
			.hide__smol {
				display: none;
			}
			@media (min-width: 768px) {
				.slide-text-content {
					display: block;
				}
				.slide-text-box {
					color: #eee;
					position: absolute;
					bottom: 2rem;
					left: 0;
					margin: 2rem 3rem;
					padding: 0.5rem;
					border-radius: 1rem 1rem 1rem 0;
				}
				.slide-text-title {
					font-family: Montserrat;
					font-size: 2rem;
					font-weight: 400;
				}
				.hide__smol {
					display: block;
				}
			}
		`}</style>
		<div className={`carousel-slide ${sliding ? "sliding" : ""}`}>
			<Link href={`/post?slug=${post.slug}`} as={`/post/${post.slug}`}>
				<a
					onClick={() =>
						analytics.logEvent(
							"Click",
							"Carousel slide image click",
							post.title
						)
					}
				>
					{post.image && post.image.secure_url ? (
						<img
							className="slide-img"
							src={post.image.secure_url}
							alt={post.title}
						/>
					) : post.type === "podcast" ? (
						<img
							className="slide-img"
							src="https://res.cloudinary.com/flightlessnerd/image/upload/v1553121319/flightlessnerd/Ostrich_for_web.jpg"
							alt={post.title}
						/>
					) : (
						""
					)}
				</a>
			</Link>
			<div className="slide-text-box">
				<Link href={`/post?slug=${post.slug}`} as={`/post/${post.slug}`}>
					<a
						className="slide-text-title"
						onClick={() =>
							analytics.logEvent(
								"Click",
								"Carousel title text click",
								post.title
							)
						}
					>
						{post.title}
					</a>
				</Link>
				<span
					className="slide-text-content"
					dangerouslySetInnerHTML={
						post.content.brief.html
							? { __html: post.content.brief.html }
							: { __html: post.content.brief }
					}
				/>
				<div className="hide__smol">
					<CategoryTagList categories={post.categories} />
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default Slide;
