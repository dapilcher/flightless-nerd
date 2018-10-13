import Link from "next/link";

const Navbar = ({ navbarItemRef, navbarSticky }) => (
	<React.Fragment>
		<style jsx>{`
		.navbar {
			overflow: hidden;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			font-family: Montserrat;
			font-size: 1rem;
			text-shadow: 5px 5px 20px rgba(0,0,0,0.5);
		}
		.navbar__items {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: flex-end;
			width: 100%;
		}
		.navbar__item {
			padding: 1rem 1rem 0.5rem 1rem;
		}
		.navbar__item:hover {
			cursor: pointer;
			background-color: #EB3E34;
			// background-color: #D2251B;
		}
		.navbar__link {
			color: #eee;
		}
		.navbar__link:hover {
			text-decoration: none;
		}
		.navbar__dropdown__content__container {
			display: none;
		}
		.navbar__dropdown__content {
			display: flex;
			flex-direction: column;
			margin-top: 0.5rem;
			margin-left: -1rem;
			// padding: 1rem;
			position: absolute;
			min-width: 8rem;
			z-index: 1;
		}
		.navbar__dropdown__link {
			background-color: #EB3E34;
			padding: 0.5rem 1rem;
		}
		.navbar__dropdown:hover .navbar__dropdown__content__container,
		.navbar__dropdown__content__container:hover .navbar__dropdown__content__container {
			display: block;
		}
		.navbar__dropdown__link:hover {
			background: #D2251B;
		}
		@media (min-width: 992px) {
			.navbar {
				flex-direction: row;
				font-size: 1.2rem;
			}
			.navbar__items {
				justify-content: flex-end;
			}
		}
		`}</style>
		<div className="navbar">
			<nav className="navbar__items">
				<div className="navbar__item" ref={navbarItemRef}>
					<Link href="/">
						<a className="navbar__link">Home</a>
					</Link>
				</div>
				<div className="navbar__item">
					<Link href="/">
						<a className="navbar__link">Articles</a>
					</Link>
				</div>
				<div className="navbar__item navbar__dropdown">
					<span className="navbar__link">Media</span>
					<div className="navbar__dropdown__content__container">
						<div className="navbar__dropdown__content">
							<Link href="/">
								<a className="navbar__link navbar__dropdown__link">Videos</a>
							</Link>
							<Link href="/">
								<a className="navbar__link navbar__dropdown__link">Podcast</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="navbar__item">
					<Link href="/">
						<a className="navbar__link">Contact Us</a>
					</Link>
				</div>
			</nav>
		</div>
	</React.Fragment>
)

export default Navbar;
