import { Component, Fragment } from "react";

class Error extends Component {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode };
	}

	render() {
		return (
			<Fragment>
				<style jsx>{`
					.error-text__container {
						height: 100%;
						display: grid;
						margin: auto;
					}
					.error-text {
						margin: auto;
					}
					h1,
					h2 {
						margin: 0;
						color: #333;
					}
					h1 {
						font-family: Montserrat;
						font-size: 3rem;
						background: -webkit-linear-gradient(#eb3e34, #586cff);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
					h2 {
						font-family: Raleway;
						font-size: 1.3rem;
					}
				`}</style>
				<div className="error-text__container">
					<div className="error-text">
						<h1>{this.props.statusCode}</h1>
						<h2>This is not the page you are looking for</h2>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Error;
