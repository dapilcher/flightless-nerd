import React from 'react';

const Logo = () => (
  <React.Fragment>
    <style jsx>{`
      .blue-box {
        position: relative;
      }
      .blue-box::before {
        z-index: -1;
        content: "";
        position: absolute;
        background-color: #007bff;
        left: 0;
        top: 50%;
        width: 100%;
        height: 30%;
        transform: rotate(1deg);
      }

      .logo-container {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        align-items: start;
      }

      .logo-title {
        font-weight: 300;
        font-size: 3rem;
      }

      @media (min-width: 992px) {
        .logo-title {
          font-size: 4rem;
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
          align-items: baseline;
        }
        .logo-subtitle {
          margin-left: 0.5rem;
        }
      }
    `}</style>
    <span className="logo-container">
      <span className="logo-title blue-box">Flightless Nerd</span>
      <span className="logo-subtitle text-primary">
        Video Game News &amp; Reviews
      </span>
    </span>
  </React.Fragment>
)

export default Logo;