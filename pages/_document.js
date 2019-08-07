import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const styles = flush();
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props =>
			sheet.collectStyles(<App {...props} />)
		);
		const styleTags = sheet.getStyleElement();
		return { ...page, styles, styleTags };
	}

	render() {
		return (
			<html lang="en-US">
				<Head>{this.props.styleTags}</Head>
				<style jsx global>{`
					overflow-x: hidden;
				`}</style>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
