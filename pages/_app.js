import React, { Fragment } from 'react';
import App, { Container } from 'next/app';
import { Head } from 'next/document';
import Page from "../components/Page";
import Meta from "../components/Meta";
import NextSeo from 'next-seo';

import seoConfig from '../seo.config';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Meta />
        <NextSeo config={seoConfig} />
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    )
  }
}