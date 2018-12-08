import { Component, Fragment } from "react";
import Head from 'next/head';
import NextSeo from 'next-seo';
import fetch from 'isomorphic-unfetch';
// import ReactMarkdown from 'react-markdown/';

// import helpers from '../helpers';
// import WithRecentsSidebar from '../components/WithRecentsSidebar';
import ResponsiveWidthContainer from '../components/ResponsiveWidthContainer'
import ArticleCardGrid from "../components/ArticleCardGrid";
// import Title from '../components/Title';
// import CategoryTagList from '../components/CategoryTagList';
// import AboutAuthor from '../components/AboutAuthor';
// import SocialShare from '../components/SocialShare';

const seoConfig = {
  title: `Flightless Nerd | Podcast`,
  description: 'Flightless Nerd is a community for people who love video game news, reviews, and blogs. Top ten lists every Friday.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `https://www.flightlessnerd.com/podcast`,
    title: `Flightless Nerd | Podcast`,
    description: 'Flightless Nerd is a community for people who love video game news, reviews, and blogs. Top ten lists every Friday.',
    defaultImageWidth: 917,
    defaultImageHeight: 921,
    images: [
      {
        url: 'https://www.flightlessnerd.com/static/images/Austrich_circle_cropped.png',
        width: 917,
        height: 921,
        alt: 'Flightless Nerd',
      },
    ],
    site_name: 'Flightless Nerd',
  },
  twitter: {
    site: '@FlightlessNews',
    handle: '@FlightlessNews',
    cardType: 'summary_large_image',
  },
};

class Podcast extends Component {
  static async getInitialProps({ query }) {
    const recentPosts = await fetch(`${process.env.HOST_URL || '/'}api/posts?limit=4`).then(res => res.json());

    return { recentPosts };
  }

  render() {
    const { recentPosts } = this.props;
    return (
      <Fragment>
        <Head>
          <title>Podcast</title>
        </Head>
        <NextSeo config={seoConfig} />
        <style jsx>{`
			.podcast__container {
				display: flex;
				flex-direction: column;
        justify-content: center;
        align-content: center;
        color: #333;
        font-family: Raleway;
        margin: 2rem 10px;
      }
      h1 {
        font-family: Montserrat;
      }
      @media(min-width: 576px) {
        .podcast__container {
          margin: 2rem 0;
        }
      }
			`}</style>
        <div className="podcast__container">
          <ResponsiveWidthContainer>
            <h1>Podcast Coming 2019</h1>
            <p>In the meantime, Check out our latest updates</p>
            <ArticleCardGrid posts={recentPosts} />
          </ResponsiveWidthContainer>
        </div>
      </Fragment>
    );
  }
}

export default Podcast;
