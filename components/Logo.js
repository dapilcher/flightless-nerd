import React from 'react';

const Logo = () => (
  <React.Fragment>
    <style jsx>{`
      font-family: Raleway, sans-serif;

      .logo-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .title-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 1rem;
      }

      .logo-img {
        max-width: 10rem;
        margin: 1rem;
      }

      .logo-title {
        font-weight: 300;
        font-size: 3rem;
        font-family: 'Bangers';
        text-shadow: 1px 1px 5px #000;
        color: #fff;
      }

      .logo-subtitle {
        color: #fff;
        text-shadow: 2px 2px 5px #000;
      }

      @media (min-width: 992px) {
        .logo-container {
          justify-content: flex-start;
        }
        .logo-title {
          font-size: 4rem;
          text-shadow: 3px 3px 5px #000;
        }
      }
      @media (min-width: 576px) {
        .logo-container {
          margin-left: 0;
        }
      }
      @media (min-width: 768px) {
        .logo-container {
          flex-direction: row;
        }
        .logo-img {
          margin-right: 1rem;
        }
        .title-container {
          justify-content: flex-start;
        }
      }
    `}</style>

    <div className="logo-container">
      <img className="logo-img" src="/static/images/Austrich_circle_cropped.png" alt="Austrich" />
      <div className="title-container">
        <span className="logo-title">Flightless Nerd</span>
        <span className="logo-subtitle">
          Video Game News &amp; Reviews
      </span>
      </div>
    </div>
  </React.Fragment>
)

export default Logo;