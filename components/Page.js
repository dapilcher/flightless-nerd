import React, { Component, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import ResponsiveWidthContainer from './ResponsiveWidthContainer';

class Page extends Component {
  render() {
    return (
      <Fragment>
        <style jsx>{`
        overflowX: hidden;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .page {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #eee;
          background: linear-gradient(#eee8, #ddd8), url("https://www.transparenttextures.com/patterns/clean-textile.png");
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