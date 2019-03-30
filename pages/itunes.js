import { Component, Fragment } from "react";
import Link from "next/link";
import Router from "next/router";
import Button from "../components/Button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

class Itunes extends Component {
	componentWillMount() {
		console.log("mounted");
		if (typeof window !== "undefined") {
			console.log("window!");
			if (/iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream) {
				window.location = "https://google.com";
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
						margin-top: 2rem;
					}
					.button__wrapper {
						display: flex;
						flex-direction: column;
						align-items: center;
						margin-bottom: 2rem;
					}
				`}</style>
				<div className="itunes__page__wrapper">
					<div className="button__wrapper">
						<p>Do you use iTunes?</p>
						<Button theme="blue">
							Continue to iTunes <FaArrowRight style={{ fontSize: "1rem" }} />
						</Button>
					</div>
					<div className="button__wrapper">
						<p>Otherwise, stick around and listen here</p>
						<Link href="/podcast">
							<Button>
								<FaArrowLeft style={{ fontSize: "1rem" }} /> Stay here
							</Button>
						</Link>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Itunes;
