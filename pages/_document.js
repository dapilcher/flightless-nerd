import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
import Navbar from '../components/navbar';
import Footer from "../components/Footer";
import Logo from '../components/Logo';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const { html, head, errorHtml, chunks } = renderPage();
		const styles = flush();
		return { html, head, errorHtml, chunks, styles };
	}

	render() {
		return (
			<html>
				<Head>
					<title>Flightless Nerd</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<link rel="stylesheet" type="text/css" href="/static/css/bootstrap-reboot.min.css" />
					<link rel="icon" type="image/x-icon" href="/static/images/Austrich_favicon.png" />
					<link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway:300,400|Bangers" rel="stylesheet"></link>
					{/* <link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css"
						integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B"
						crossorigin="anonymous"
					/> */}
				</Head>
				<body style={{ overflowX: 'hidden' }}>
					<style jsx>{`
					overflowX: hidden;
						display: flex;
						flex-direction: row;
						justify-content: center;

					.container {
						display: flex;
						flex-direction: column;
						max-width: 100%;
					}
					@media (min-width: 576px) {
						.container { max-width: 90%; }
					}

					@media (min-width: 768px) {
						.container { max-width: 760px; }
					}

					@media (min-width: 992px) {
						.container { max-width: 960px; }
					}

					@media (min-width: 1200px) {
						.container { max-width: 1100px; }
					}
				`}</style>
					<div className="container">
						{/* <Logo /> */}
						<Navbar />
						<Main />
						<Footer />
					</div>
					{/* <script
						src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
						integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
						crossorigin="anonymous"
					/>
					<script
						src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
						integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
						crossorigin="anonymous"
					/>
					<script
						src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"
						integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em"
						crossorigin="anonymous"
					/> */}
					<NextScript />
				</body>
			</html>
		);
	}
}
