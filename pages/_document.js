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
				<Head />
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
