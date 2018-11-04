import { Fragment } from 'react';
import CategoryTag from './CategoryTag';

const CategoryTagList = ({ cats }) => (
  <Fragment>
    <style jsx>{`
    .tags__container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    `}</style>
    <div className="tags__container">
      {cats.map(cat => <CategoryTag key={cat.id} text={cat.name} />)}
    </div>
  </Fragment>
);

export default CategoryTagList;