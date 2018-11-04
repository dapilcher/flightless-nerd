import { Fragment } from 'react';
import CategoryTag from './CategoryTag';

const CategoryTagList = ({ categories }) => (
  <Fragment>
    <style jsx>{`
    .tags__container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    `}</style>
    <div className="tags__container">
      {categories.map(cat => <CategoryTag key={cat._id} text={cat.name} />)}
    </div>
  </Fragment>
);

export default CategoryTagList;