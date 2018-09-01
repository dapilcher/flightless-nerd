import Link from "next/link";

const Slide = props => (
  <React.Fragment>
    <style jsx>{`
      // max-width: 100%;
      .slide-img {
        width: 100%
      }
      .slide-text {
        color: white;
        position: absolute;
        bottom: 2rem;
        left: 0;
        background: rgba(0,0,0,0.5);
        margin: 3rem;
        padding: 0.5rem;
        border-radius: 3px;
      }
    `}</style>
    <div className={`carousel-slide ${props.sliding ? 'sliding' : ''}`}>
      <img className="slide-img" src={props.post.image.secure_url} alt={props.post.title} />
      <div className="slide-text d-none d-md-block">
        <Link href={`/post?id=${props.post._id}`} prefetch><a className="h2">{props.post.title}</a></Link>
        <span dangerouslySetInnerHTML={{ __html: props.post.content.brief }}></span>
      </div>
    </div>
  </React.Fragment>
)

export default Slide;