import { Fragment } from 'react';

const CategoryTag = ({ text }) => (
  <Fragment>
    <style jsx>{`
    .tag__container {
      font-family: Montserrat;
      font-size: 0.8rem;
      color: #eee;
      max-width: 100%;
      margin-bottom: 5px;
    }
    .tag__container:not(:first-child) {
      margin-left: 5px;
    }
    .tag__inner {
      border-radius: 0.8rem 0.8rem 0.8rem 0;
      background-color: #EB3E34;
      padding: 5px;
    }
    `}</style>
    <div className="tag__container">
      <span className="tag__inner">
        {text}
      </span>
    </div>
  </Fragment>
);

export default CategoryTag;