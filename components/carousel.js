import React from 'react';
import Link from "next/link";

const Slide = props => (
  <React.Fragment>
    <style jsx>{`
      max-width: 100%;
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
    <div className="carousel-slide">
      <img className="slide-img" src={props.post.image.secure_url} alt={props.post.title} />
      <div className="slide-text d-none d-md-block">
        <Link href={`/post?id=${props.post._id}`} prefetch><a className="h2">{props.post.title}</a></Link>
        <span dangerouslySetInnerHTML={{ __html: props.post.content.brief }}></span>
      </div>
    </div>
  </React.Fragment>
)

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide_index: 0
    }
    this.shiftSlide = this.shiftSlide.bind(this);
    this.setSlide = this.setSlide.bind(this);
  }

  componentDidMount() {
    this.setSlide(0);
  }

  componentWillUnmount() {
    clearTimeout(this.state.slideTimer);
  }

  shiftSlide(n) {
    let index = this.state.slide_index;
    index += n;
    if (index >= this.props.posts.length) {
      index = 0;
    }
    if (index < 0) {
      index = this.props.posts.length - 1;
    }
    this.setSlide(index);
  }

  setSlide(i) {
    if (this.state.slideTimer) {
      clearTimeout(this.state.slideTimer);
    }
    const slideTimer = setTimeout(() => { this.shiftSlide(1) }, 7000);
    this.setState({ slide_index: i, slideTimer });
  }

  render() {
    const { posts } = this.props;
    const slides = posts.map(post => <Slide post={post} />)
    return (
      <React.Fragment>
        <style jsx>{`
          .carousel-container {
            max-width: 100%;
            position: relative;
            margin: auto;
          }
          .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            margin-top: -22px;
            padding: 16px;
            background: rgba(255,255,255,0.4);
            font-weight: bold;
            font-size: 18px;
            transition: 0.5s ease;
            border-radius: 0 3px 3px 0;
          }
          .next {
            right: 0;
            border-radius: 3px 0 0 3px;
          }
          .prev:hover, .next:hover {
            background: rgba(255,255,255,0.8);
          }
          .dots {
            text-align: center;
            position: absolute;
            width: 100%;
            bottom: 1rem;
          }
          .dot {
            cursor: pointer;
            height: 1rem;
            width: 1rem;
            margin: 0 0.5rem;
            background: rgba(255,255,255,0.4);
            border-radius: 50%;
            display: inline-block;
            transition: 0.5s ease;
          }
          .dot-active, .dot:hover {
            background: rgba(255,255,255,0.8);
          }
          .fade {
            animation: fade 1s ease;
          }
          @keyframes fade {
            from {opacity: 0}
            to {opacity: 1}
          }
          `}</style>
        <div className="carousel-container">
          {slides[this.state.slide_index]}

          <a className="prev" onClick={() => this.shiftSlide(-1)}>&#10094;</a>
          <a className="next" onClick={() => this.shiftSlide(1)}>&#10095;</a>
          <div className="dots">
            {slides.map((_, i) => (
              <a className={`dot ${i === this.state.slide_index ? 'dot-active' : ''}`}
                onClick={() => this.setSlide(i)}
                key={`dot-${i}`} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Carousel;
