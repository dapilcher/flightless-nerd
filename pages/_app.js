import React, { Fragment } from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import NextSeo from "next-seo";
import getConfig from "next/config";
import Page from "../components/Page";
import Meta from "../components/Meta";

import getAnalytics from "../utils/getAnalytics";
import withFbq from "../components/withFbq";
import seoConfig from "../seo.config";

const { publicRuntimeConfig: envars } = getConfig();

const analytics = getAnalytics();

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
		Router.router.events.on("routeChangeComplete", analytics.logPageView);
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Meta />
				<NextSeo config={seoConfig} />
				<Page>
					<Component {...pageProps} />
				</Page>
			</Container>
		);
	}
}

export default withFbq(envars.fbPixelId, Router)(MyApp);
