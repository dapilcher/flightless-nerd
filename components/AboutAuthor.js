import { Fragment } from 'react';

const TwitterLink = ({ handle }) => (
  <>
    <style jsx>{`
    a {
      color: #eee;
      text-decoration: none;
    }
    a:hover {
      color: #eee;
      text-decoration: underline;
    }
    `}</style>
    <h5>
      <a href={`https://twitter.com/${handle}`}>{`@${handle}`}</a>
    </h5>
  </>
)

const AboutAuthor = ({ author }) => (
  <Fragment>
    <style jsx>{`
      .about-author {
				display: flex;
				flex-direction: row;
				// justify-content: center;
        background: #EB3E34;
        color: #eee;
				padding: 1rem;
				box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
        border-radius: 1rem 1rem 1rem 0;
        margin: 2rem 0;
				// border-left: 2px solid #eee;
      }
      a {
        color: #eee;
        text-decoration: none;
      }
      a:hover {
        color: #eee;
        text-decoration: none;
      }
      p {
        margin: 0;
        padding: 0;
        color: #eee;
      }
      .about-author__img {
        padding: 0;
        margin: 0;
        width: 200px;
        height: 200px;
        border-radius: 1rem 1rem 1rem 0;
      }
      .about-author__text {
        display: flex;
        flex-direction: column;
        color: #eee;
        padding: 0 1rem;
      }
    `}</style>
    <div className="about-author">
      {author.image &&
        <img className="about-author__img" src={author.image.secure_url} alt={`${author.name.first} ${author.name.last}`} />}
      <div className="about-author__text">
        <h3>{`${author.name.first} ${author.name.last}`}</h3>
        {(author.social && author.social.twitterHandle) && <TwitterLink handle={author.social.twitterHandle} />}
        {author.about && <p>{author.about}</p>}
      </div>
    </div>
  </Fragment>
);

export default AboutAuthor;