import { Fragment } from 'react';
import ArticleCard from './ArticleCard';

const ArticleCardGrid = ({ posts }) => (
  <Fragment>
    <style jsx>{`
    .post-cards {
      padding: 1rem 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 1rem;
      justify-content: center;
    }
    .post-card:not(:last-child) {
      border-bottom: 1px solid #EB3E34;
    }
    @media (min-width: 768px) {
      .post-cards {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }
    }
    @media (min-width: 685px) {
      .post-card:not(:last-child) {
        border-bottom: none;
      }
    }
    `}</style>
    <div className="post-cards__container">
      <div className="post-cards">
        {posts.map((post, i) => {
          return (
            <div className="post-card" key={i}>
              <ArticleCard post={post} />
            </div>
          );
        })}
      </div>
    </div>
  </Fragment>
)

export default ArticleCardGrid