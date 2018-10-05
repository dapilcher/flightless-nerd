import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Page extends Component {
  render() {
    return (
      <div>
        <div>
          <style jsx>{`
						display: flex;
						flex-direction: row;
            justify-content: center;

            .page {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            
            .container {
              display: flex;
              flex-direction: column;
              max-width: 100%;
            }
            @media (min-width: 576px) {
              .container { max-width: 90%; }
            }
            
            @media (min-width: 768px) {
              .container { max-width: 760px; }
            }
            
            @media (min-width: 992px) {
              .container { max-width: 960px; }
            }
            
            @media (min-width: 1200px) {
              .container { max-width: 1100px; }
            }
            `}</style>
          <div className="page">
            <Header />
            <div className="container">
              {this.props.children}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;