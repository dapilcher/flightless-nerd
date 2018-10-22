import { Component, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import ArticleCardGrid from '../components/ArticleCardGrid';

const Checkbox = ({ id, name, checked = true, onChange }) => (
  <Fragment>
    <style jsx>{`
    button {
      background-color: #eee;
      color: #333;
      font-family: Montserrat;
      font-size: 1.2rem;
      border-radius: 1rem 1rem 1rem 0;
      border: 3px solid #D2251B;
      padding: 0.2rem 0.5rem;
      outline: none;
      margin: 0;
    }
    button:hover {
      transform: scale(1.03);
      box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
    }
    button:focus {
      outline: none;
    }
    button[data-checked='true'] {
      background-color: #EB3E34;
      color: #eee;
    }
    `}</style>
    <button
      data-id={id}
      data-checked={checked}
      onClick={(e) => onChange(e, id)}
    >
      {name}</button>
    {/* <label htmlFor={catKey}>
      <input
        type="checkbox"
        name={catKey}
        checked={checked}
        onChange={onChange}
      />
      {name}</label> */}
  </Fragment>
)

class Articles extends Component {
  state = {
    filters: {}
  }
  static async getInitialProps() {
    const posts = await fetch(`${process.env.HOST_URL || '/'}api/posts`).then(res => res.json());
    const categories = await fetch(`${process.env.HOST_URL || '/'}api/categories`).then(res => res.json());

    return { posts, categories };
  }

  componentDidMount() {
    let filters = {};
    this.props.categories.forEach(cat => {
      // post.categories.forEach(cat => {
      if (cat._id in filters) return;
      filters[cat._id] = true;
      // })
    });
    this.setState({ filters })
  }

  toggleChecked = (e, id) => {
    console.log('toggling');
    e.preventDefault();
    // const name = e.target.name;
    // const checked = e.target.checked;
    let filters = { ...this.state.filters };
    filters[id] = !filters[id];
    this.setState({ filters });
  }

  render() {
    const { posts, categories } = this.props;
    return (
      <Fragment>
        <style jsx>{`
        margin-top: 1rem;
        h1 {
          color: #333;
          font-family: Bangers;
          font-size: 3rem;
          letter-spacing: 3px;
          margin: 0 10px;
          text-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        h3 {
          color: #333;
          font-family: Montserrat;
          font-weight: 500;
          font-size: 1.2rem;
          letter-spacing: 1px;
          margin: 1rem 10px;
        }
        #form__filters {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
          justify-items: center;
          align-items: center;
          padding-bottom: 1rem;
          grid-gap: 10px;
          border-bottom: 1px solid #EB3E34;
          margin: 1rem 0;
          height: 0;
          display: none;
        }
        #form__filters[data-expand='true'] {
          display: grid;
          min-height: 10px;
          height: auto;
        }
        @media(min-width: 576px) {
          h1 {
            margin: 0;
          }
          h3 {
            margin: 0;
          }
          form {
            margin: 0;
          }
        }
        `}</style>
        <h1>Articles</h1>
        <h3>Filters</h3>
        <form id="form__filters" data-expand={true}>
          {categories.filter(cat1 => posts.some(post => post.categories.some(cat2 => cat1._id === cat2._id))).map(cat => (
            <Checkbox
              key={cat._id}
              id={cat._id}
              name={cat.name}
              checked={this.state.filters[cat._id]}
              onChange={this.toggleChecked} />
          ))}
        </form>
        <ArticleCardGrid posts={posts.filter(post => post.categories.some(cat => this.state.filters[cat._id]))} />
      </Fragment>
    )
  }
}
export default Articles