import App, { Container } from "next/app";
import Router from "next/router";
import NextSeo from "next-seo";
import getConfig from "next/config";
import { ThemeProvider } from "styled-components";
import Page from "../components/Page";
import Meta from "../components/Meta";

import getAnalytics from "../utils/getAnalytics";
import withFbq from "../components/withFbq";
import seoConfig from "../seo.config";

const { publicRuntimeConfig: envars } = getConfig();

const analytics = getAnalytics();

let theme = {
	red: "#EB3E34",
	darkred: "#D2251B",
	blue: "#586CFF",
	darkblue: "#2539CC",
	yellow: "#ffe838",
	darkyellow: "#E6CF1F",
	white: "#eee",
	black: "#333",
	grey: "#3A3A3A",
	lightgrey: "#E1E1E1",
	offwhite: "#EDEDED",
	maxWidth: "560px",
	bs: "0 12px 24px 0 rgba(0,0,0,0.09)",
	navbarHeight: "6rem"
};

class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	componentDidMount() {
		analytics.initGA();
		analytics.logPageView();
		// Router.router.events.on("routeChangeComplete", analytics.logPageView);
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Meta />
				<NextSeo config={seoConfig} />
				<ThemeProvider theme={theme}>
					<Page>
						<Component {...pageProps} />
					</Page>
				</ThemeProvider>
			</Container>
		);
	}
}

export default withFbq(envars.fbPixelId, Router)(MyApp);
