import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

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
					<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500|Raleway:400|Bangers" rel="stylesheet"></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
