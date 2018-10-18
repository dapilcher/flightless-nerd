import React from 'react';
import Link from 'next/link';

const Logo = ({ showLogo }) => (
  <React.Fragment>
    <style jsx>{`
      font-family: Raleway, sans-serif;

      .logo-container {
        width: 100%;
        max-height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        transition: 250ms ease-out;
      }

      .title-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        // margin-bottom: 1rem;
      }

      .logo-img {
        max-width: 4rem;
        margin: 1rem;
        border-radius: 50%;
        box-shadow: 3px 3px 20px rgba(0,0,0,0.5);
      }

      .logo-title {
        font-weight: 300;
        font-size: 3rem;
        font-family: 'Bangers';
        text-shadow: 3px 3px 20px rgba(0,0,0,0.5);
        color: #eee;
      }

      .logo-subtitle {
        color: #eee;
        text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
      }

      .shrink {
        height: 0;
        display: none;
      }
      
      .pointer {
        cursor: pointer;
      }
      @media (min-width: 992px) {
        .logo-container {
          justify-content: flex-start;
          align-items: center;
        }
        .logo-title {
          font-size: 4rem;
          text-shadow: 3px 3px 20px rgba(0,0,0,0.5);
        }
      }
      @media (min-width: 576px) {
        .shrink {
          display: flex;
          transform: translateY(-120px);
        }
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
    <div className={`logo-container ${!showLogo && 'shrink'}`}>
      <Link href="/">
        <img className="logo-img pointer" src="/static/images/Austrich_circle_cropped.png" alt="Austrich" />
      </Link>
      <Link href="/">
        <div className="title-container pointer">
          <span className="logo-title">Flightless Nerd</span>
          {/* <span className="logo-subtitle">
          Video Game News &amp; Reviews
        </span> */}
        </div>
      </Link>
    </div>
  </React.Fragment>
)

export default Logo;