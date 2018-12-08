import React, { Component, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import { initGA, logPageView } from '../analytics';
import ResponsiveWidthContainer from './ResponsiveWidthContainer';

class Page extends Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }
  }
  render() {
    return (
      <Fragment>
        <style jsx>{`
        overflowX: hidden;
        display: flex;
        flex-direction: row;
        justify-content: center;
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(#eee8, #ddd8), url("/static/images/clean-textile.png");
        }
        `}</style>
        <div className="page">
          <Header />
          <ResponsiveWidthContainer>
            {this.props.children}
          </ResponsiveWidthContainer>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Page;