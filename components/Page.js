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
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          // background-color: #ffe838;
          background: linear-gradient(#eee8, #ddd8), url("https://www.transparenttextures.com/patterns/clean-textile.png");
          // background: linear-gradient(#FFE838BF, #E6CF1FBF), url("https://www.transparenttextures.com/patterns/clean-textile.png"), url("https://www.transparenttextures.com/patterns/stardust.png"), linear-gradient(#FFE838, #E6CF1F);
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