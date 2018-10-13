import { Fragment } from 'react';

const Title = ({ title, subtitle }) => (
  <Fragment>
    <style jsx>{`
    .title, .subtitle {
      font-family: Montserrat;
      font-weight: 500;
      padding: 0 7px;
    }			
    .title {
      font-size: 1.25rem;
      color: #333;
    }
    .subtitle {
      font-size: 0.9rem;
      color: rgb(112,112,112);
    }
    @media (min-width: 576px) {
      .title, .subtitle {
        padding: 0;
      }
    }
    `}</style>
    <h3 className="title">{title}</h3>
    <h4 className="subtitle">{subtitle}</h4>
  </Fragment>
)

export default Title;