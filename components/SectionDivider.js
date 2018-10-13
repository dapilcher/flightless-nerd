import { Fragment } from 'react';

const SectionDivider = ({ text }) => (
  <Fragment>
    <style jsx>{`
    .section__header {
      width: 100%;
      height: auto;
      margin-top: 1rem;
      font-size: 2rem;
      text-align: center;
      font-family: Bangers;
    }
    .section__title {
      display: flex;
      color: #333;
      flex-basis: 100%;
      align-items: center;
    }
    .section__title::before,
    .section__title::after {
      content: "";
      flex-grow: 1;
      background: #586CFF;
      height: 2px;
      font-size: 0px;
      line-height: 0px;
    }
    .section__title::before {
      margin-right: 1rem;
    }
    .section__title::after {
      margin-left: 1rem;
    }
    `}</style>
    <div className="section__header">
      <div className="section__title">
        <span>{text}</span>
      </div>
    </div>
  </Fragment>
)

export default SectionDivider;