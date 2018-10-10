import { Fragment } from 'react';

const ResponsiveWidthContainer = props => (
  <Fragment>
    <style jsx>{`
    .container {
      display: flex;
      flex-direction: column;
      width: 100%;
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
      .container { max-width: 1000px; }
    }
    `}</style>
    <div className="container">
      {props.children}
    </div>
  </Fragment>
)

export default ResponsiveWidthContainer;