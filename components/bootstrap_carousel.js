import React from "react";

class Carousel extends React.Component {
	render() {
		return (
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-ride="carousel"
			>
				<ol className="carousel-indicators">
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="0"
						className="active"
					/>
					<li data-target="#carouselExampleIndicators" data-slide-to="1" />
					<li data-target="#carouselExampleIndicators" data-slide-to="2" />
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src="/static/images/RDR2_John.jpg"
							alt="John Marston"
						/>
						<div class="carousel-caption d-none d-md-block">
							<h5>Testing some captions</h5>
							<p>Blah blah blah</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="/static/images/BFA_Leaders.jpg"
							alt="Sylvanas and Anduin"
						/>
						<div class="carousel-caption d-none d-md-block">
							<h5>Testing some captions</h5>
							<p>Blah blah blah</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="/static/images/Spiderman.jpg"
							alt="Spiderman"
						/>
						<div class="carousel-caption d-none d-md-block">
							<h5>Testing some captions</h5>
							<p>Blah blah blah</p>
						</div>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		);
	}
}

export default Carousel;
