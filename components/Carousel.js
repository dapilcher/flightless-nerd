import React from "react";
import Slide from "./CarouselSlide";

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slideIndex: 0,
			prevSlideIndex: 0,
			nextSlideIndex: 0,
			sliding: false
		};
		this.shiftSlide = this.shiftSlide.bind(this);
		this.setNextSlideIndex = this.setNextSlideIndex.bind(this);
		this.setPrevSlideIndex = this.setPrevSlideIndex.bind(this);
		this.setSlide = this.setSlide.bind(this);
	}

	componentDidMount() {
		this.setSlide(0);
	}

	componentWillUnmount() {
		if (this.state.slideTimer) clearTimeout(this.state.slideTimer);
	}

	shiftSlide(n) {
		let index = this.state.slideIndex;
		index += n;
		if (index >= this.props.posts.length) {
			index = 0;
		}
		if (index < 0) {
			index = this.props.posts.length - 1;
		}
		this.setSlide(index);
	}

	setPrevSlideIndex(i) {
		let prevSlideIndex = i - 1;
		if (prevSlideIndex < 0) {
			prevSlideIndex = this.props.posts.length - 1;
		}
		this.setState({ prevSlideIndex });
	}

	setNextSlideIndex(i) {
		let nextSlideIndex = i + 1;
		if (nextSlideIndex >= this.props.posts.length) {
			nextSlideIndex = 0;
		}
		this.setState({ nextSlideIndex });
	}

	setSlide(i) {
		this.setPrevSlideIndex(i);
		this.setNextSlideIndex(i);
		if (this.state.slideTimer) {
			clearTimeout(this.state.slideTimer);
		}
		const slideTimer = setTimeout(() => {
			this.shiftSlide(1);
		}, 7000);
		this.setState({ slideIndex: i, slideTimer });
	}

	render() {
		const { posts } = this.props;
		const slides = posts.map(post => (
			<Slide post={post} sliding={this.state.sliding} />
		));
		return (
			<React.Fragment>
				<style jsx>{`
					.carousel__container {
						max-width: 100%;
						position: relative;
						margin: auto;
						border-bottom: 0.3rem solid #eb3e34;
					}
					.prev,
					.next {
						cursor: pointer;
						position: absolute;
						top: 50%;
						width: auto;
						margin-top: -22px;
						padding: 1rem;
						background: rgba(255, 255, 255, 0.4);
						font-weight: bold;
						font-size: 1rem;
						transition: 0.5s ease;
						border-radius: 0 3px 3px 0;
					}
					.next {
						right: 0;
						border-radius: 3px 0 0 3px;
					}
					.prev:hover,
					.next:hover {
						background: rgba(255, 255, 255, 0.8);
					}
					.dots {
						position: absolute;
						width: 100%;
						top: 0;
						left: 0;
						margin: 0.5rem;
					}
					.dot {
						cursor: pointer;
						height: 0.5rem;
						width: 0.5rem;
						margin: 0 0.5rem;
						background: rgba(255, 255, 255, 0.4);
						border-radius: 50%;
						display: inline-block;
						transition: 0.5s ease;
					}
					.dot-active,
					.dot:hover {
						background: rgba(255, 255, 255, 0.8);
					}

					@media (min-width: 768px) {
						.carousel__container {
							border-bottom-width: 0.5rem;
						}
						.dots {
							text-align: center;
							position: absolute;
							width: 100%;
							bottom: 1rem;
							top: auto;
						}
						.dot {
							height: 1rem;
							width: 1rem;
							margin: 0 0.5rem;
						}
					}
				`}</style>
				<div className="carousel__container">
					<div className="carousel__slides">
						{slides[this.state.slideIndex]}
					</div>

					<a className="prev" onClick={() => this.shiftSlide(-1)}>
						&#10094;
					</a>
					<a className="next" onClick={() => this.shiftSlide(1)}>
						&#10095;
					</a>
					<div className="dots">
						{slides.map((_, i) => (
							<a
								className={`dot ${
									i === this.state.slideIndex ? "dot-active" : ""
								}`}
								onClick={() => this.setSlide(i)}
								key={`dot-${i}`}
							/>
						))}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Carousel;
