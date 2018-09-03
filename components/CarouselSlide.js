import Link from "next/link";

const Slide = props => (
  <React.Fragment>
    <style jsx>{`
      // max-width: 100%;
      .slide-img {
        width: 100%
      }

      .slide-text-title {
        font-size: 1rem;
        font-weight: 300;
        color: white;
      }

      .slide-text-title:hover {
        text-decoration: none;
      }

      .slide-text-box {
        color: white;
        position: absolute;
        margin: 0.5rem;
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        padding: 0.5rem;
        border-radius: 3px;
      }

      .slide-text-content {
        display: none;
      }

      @media (min-width: 768px) {
        .slide-text-content {
          display: block;
        }
        .slide-text-box {
          color: white;
          position: absolute;
          bottom: 2rem;
          left: 0;
          background: rgba(0,0,0,0.5);
          margin: 2rem 3rem;
          padding: 0.5rem;
          border-radius: 3px;
        }
        .slide-text-title {
          font-size: 2rem;
        }
      }

      @media (min-width: 992px) {
        
      }
    `}</style>
    <div className={`carousel-slide ${props.sliding ? 'sliding' : ''}`}>
      <Link href={`/post?id=${props.post._id}`} >
        <a><img className="slide-img" src={props.post.image.secure_url} alt={props.post.title} /></a>
      </Link>
      <div className="slide-text-box">
        <Link href={`/post?id=${props.post._id}`} prefetch><a className="slide-text-title">{props.post.title}</a></Link>
        <span className="slide-text-content" dangerouslySetInnerHTML={{ __html: props.post.content.brief }}></span>
      </div>
    </div>
  </React.Fragment>
)

export default Slide;