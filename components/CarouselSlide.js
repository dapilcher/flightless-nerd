import Link from "next/link";
import CategoryTagList from './CategoryTagList';

const Slide = ({ sliding, post }) => (
  <React.Fragment>
    <style jsx>{`
      // max-width: 100%;
      .slide-img {
        width: 100%
      }
      .slide-text-title {
        font-size: 1rem;
        font-weight: 500;
        color: #eee;
      }
      .slide-text-title:hover {
        text-decoration: none;
      }
      .slide-text-box {
        color: #eee;
        position: absolute;
        margin: 0.5rem;
        left: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        // background-color: #EB3E34cc;
        padding: 0.5rem;
        border-radius: 1rem 1rem 1rem 0;
        // border-bottom: 2px solid #ffe838;
        // border-left: 2px solid #ffe838;
      }
      .slide-text-content {
        display: none;
      }
      @media (min-width: 768px) {
        .slide-text-content {
          display: block;
        }
        .slide-text-box {
          color: #eee;
          position: absolute;
          bottom: 2rem;
          left: 0;
          margin: 2rem 3rem;
          padding: 0.5rem;
          border-radius: 1rem 1rem 1rem 0;
        }
        .slide-text-title {
          font-family: Montserrat;
          font-size: 2rem;
          font-weight: 400;
        }
      }
    `}</style>
    <div className={`carousel-slide ${sliding ? 'sliding' : ''}`}>
      <Link href={`/post?id=${post._id}`}>
        <a><img className="slide-img" src={post.image.secure_url} alt={post.title} /></a>
      </Link>
      <div className="slide-text-box">
        <Link href={`/post?id=${post._id}`}><a className="slide-text-title">{post.title}</a></Link>
        <span className="slide-text-content"
          dangerouslySetInnerHTML={post.content.brief.html ? { __html: post.content.brief.html } : { __html: post.content.brief }}
        ></span>
        <CategoryTagList cats={post.categories} />
      </div>
    </div>
  </React.Fragment>
)

export default Slide;