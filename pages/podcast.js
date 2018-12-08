import { Fragment } from 'react';

const Podcast = () => (
  <Fragment>
    <style jsx>{`
    .podcast__container {
      margin: 2rem auto;
    }
    h1 {
      font-family: Montserrat;
    }
    `}</style>
    <div className="podcast__container">
      <h1>Coming 2019</h1>
    </div>
  </Fragment>
)

export default Podcast;
