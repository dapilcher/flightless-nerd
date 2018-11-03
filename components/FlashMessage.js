import { Fragment } from 'react';

const FlashMessage = ({ type, message }) => (
  <Fragment>
    <style jsx>{`
    padding: 0.5rem;
    border: none;
    border-radius: 1rem 1rem 1rem 0;
    color: #eee;
    .error {
      background-color: #EB3E34;
    }
    .success {
      background-color: #586CFF;
    }
    .warn {
      background-color: #ffe838;
    }
    `}</style>
    <p className={type}>{message}</p>
  </Fragment>
);

export default FlashMessage;
