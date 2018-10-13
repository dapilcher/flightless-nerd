import { Fragment } from 'react';

const ResponsiveWidthContainer = props => (
  <Fragment>
    <style jsx>{`
    .responsive-width__container {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 100%;
    }
    @media (min-width: 576px) {
      .responsive-width__container { max-width: 90%; }
    }
    @media (min-width: 768px) {
      .responsive-width__container { max-width: 760px; }
    }
    @media (min-width: 992px) {
      .responsive-width__container { max-width: 960px; }
    }
    @media (min-width: 1200px) {
      .responsive-width__container { max-width: 1000px; }
    }
    `}</style>
    <div className="responsive-width__container">
      {props.children}
    </div>
  </Fragment>
)

export default ResponsiveWidthContainer;