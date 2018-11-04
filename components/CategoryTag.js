import { Fragment } from 'react';

const CategoryTag = ({ text }) => (
  <Fragment>
    <style jsx>{`
    .tag__container {
      font-family: Montserrat;
      font-size: 0.8rem;
      color: #eee;
      max-width: 100%;
    }
    .tag__container:not(:first-child) {
      margin-left: 5px;
    }
    .tag__inner {
      border-radius: 3px;
      background-color: #EB3E34;
      padding: 3px;
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