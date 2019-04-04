import { Component, Fragment } from "react";
import Link from "next/link";
import getConfig from "next/config";
import Button from "../components/Button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const { publicRuntimeConfig: envars } = getConfig();

import * as prodlytics from "../utils/analytics";
import * as devlytics from "../utils/devlytics";

const analytics = envars.nodeEnv === "production" ? prodlytics : devlytics;

class Itunes extends Component {
	componentWillMount() {
		console.log("mounted");
		if (typeof window !== "undefined") {
			console.log("window!");
			if (/iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream) {
				window.location = envars.podcastItunesUrl;
			}
		}
	}
	render() {
		return (
			<Fragment>
				<style jsx>{`
					.itunes__page__wrapper {
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: column;
						align-items: center;
						font-family: Raleway;
						font-size: 1.2rem;
						padding: 2rem;
						text-align: center;
					}
					.button__wrapper {
						display: flex;
						flex-direction: column;
						align-items: center;
						margin-bottom: 2rem;
					}
					em {
						font-size: 1rem;
					}
				`}</style>
				<div className="itunes__page__wrapper">
					<div className="button__wrapper">
						<p>
							Do you use iTunes, or another podcast app like Castbox, Pocket
							Casts, etc?*
						</p>
						<a href={envars.podcastItunesUrl}>
							<Button
								theme="blue"
								onClick={() =>
									analytics.logEvent(
										"Click",
										"iTunes landing clickthrough to iTunes"
									)
								}
							>
								Open in App <FaArrowRight style={{ fontSize: "1rem" }} />
							</Button>
						</a>
					</div>
					<div className="button__wrapper">
						<p>Otherwise, you can still stick around and listen on our site!</p>
						<Link href="/podcast" prefetch>
							<a>
								<Button
									onClick={() =>
										analytics.logEvent(
											"Click",
											"iTunes landing clickthrough to podcast page"
										)
									}
								>
									<FaArrowLeft style={{ fontSize: "1rem" }} /> Stay here
								</Button>
							</a>
						</Link>
					</div>
					<p>
						<em>
							* We are currently only on iTunes, sorry Spotify/Google/Stitcher
							users
						</em>
					</p>
				</div>
			</Fragment>
		);
	}
}

export default Itunes;
