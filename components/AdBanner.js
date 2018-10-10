import { Fragment } from 'react';

const AdBanner = () => (
  <Fragment>
    <style jsx>{`
    .ad-banner__container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .ad-banner {
      width: 35rem;
      background-color: rgba(0,0,0,0.5);
      background-image: 
        linear-gradient(to top right, #b055, #123456), 
        linear-gradient(#a5ee2d, #528cb1);
      text-align: center;
      padding: 2rem;
      margin: 1rem 0;
      border: 3px solid #333;
      text-shadow: 1px 1px 20px rgba(0,0,0,0.5);
      color: #eee
    }
    `}</style>
    <div className="ad-banner__container">
      <div className="ad-banner">
        <span>LOOK AT THIS ATROCIOUS AD</span>
      </div>
    </div>
  </Fragment>
)

export default AdBanner;
