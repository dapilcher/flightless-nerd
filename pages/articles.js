import { Component, Fragment } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
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
  </Fragment>
)

class Articles extends Component {
  state = {
    filters: {},
    showFilters: true
  }
  static async getInitialProps() {
    const posts = await fetch(`${process.env.HOST_URL || '/'}api/posts`).then(res => res.json());
    const categories = await fetch(`${process.env.HOST_URL || '/'}api/categories`).then(res => res.json());

    return { posts, categories };
  }

  componentDidMount() {
    let filters = {};
    this.props.categories.forEach(cat => {
      if (cat._id in filters) return;
      filters[cat._id] = false;
    });
    this.setState({ filters })
  }

  toggleChecked = (e, id) => {
    console.log('toggling');
    e.preventDefault();
    let filters = { ...this.state.filters };
    filters[id] = !filters[id];
    this.setState({ filters });
  }

  toggleFilters = e => {
    e.preventDefault();

    let section = this.formRef;
    let icon = this.iconRef;
    let isCollapsed = section.getAttribute('data-collapsed') === 'true';

    if (isCollapsed) {
      this.expandSection(section)
    } else {
      this.collapseSection(section)
    }
  }

  collapseSection = (element) => {
    let sectionHeight = element.scrollHeight;

    let elementTransition = element.style.transition;
    element.style.transition = '';

    requestAnimationFrame(function () {
      element.style.height = sectionHeight + 'px';
      element.style.transition = elementTransition;

      requestAnimationFrame(function () {
        element.style.height = 0 + 'px';
      });
    });

    element.setAttribute('data-collapsed', 'true');
  }

  expandSection = (element) => {
    let sectionHeight = element.scrollHeight;

    element.style.height = sectionHeight + 'px';

    function func(e) {
      element.removeEventListener('transitionend', func);

      element.style.height = null;
    }

    element.addEventListener('transitionend', func);

    element.setAttribute('data-collapsed', 'false');
  }

  render() {
    const { posts, categories } = this.props;
    return (
      <Fragment>
        <Head>
          <title>{`Flightless Nerd - Articles`}</title>
        </Head>
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
        #filters__form {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
          justify-items: center;
          align-items: center;
          grid-gap: 10px;
          margin-bottom: 1rem;
        }
        .filters__form__wrapper {
          border-bottom: 1px solid #EB3E34;
          margin-bottom: 1rem;
          height: auto;
          overflow: hidden;
          transition: height 150ms ease-out;
        }
        .filters__title {
          background: none;
          border: none;
        }
        .filters__title:focus {
          outline: none;
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
        <h3>
          <button className="filters__title" onClick={this.toggleFilters}>
            <span ref={el => this.iconRef = el}><FontAwesomeIcon icon={faAngleDown} size="sm" /></span>
            {' Filters'}
          </button>
        </h3>
        <div className="filters__form__wrapper" ref={el => this.formRef = el} style={{ height: '0px' }} data-collapsed="true">
          <form id="filters__form">
            {categories.filter(cat1 => posts.some(post => post.categories.some(cat2 => cat1._id === cat2._id))).map(cat => (
              <Checkbox
                key={cat._id}
                id={cat._id}
                name={cat.name}
                checked={this.state.filters[cat._id]}
                onChange={this.toggleChecked} />
            ))}
          </form>
        </div>
        <ArticleCardGrid
          posts={Object.values(this.state.filters).some(val => val) ?
            posts.filter(post => post.categories.some(cat => this.state.filters[cat._id])) :
            posts} />
      </Fragment>
    )
  }
}
export default Articles