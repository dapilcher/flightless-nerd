import Link from "next/link";

const Navbar = ({ navbarItemRef, navbarSticky }) => (
	<React.Fragment>
		<style jsx>{`
		.navbar {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			font-family: Montserrat;
			font-size: 1rem;
			text-shadow: 5px 5px 20px rgba(0,0,0,0.5);
		}
		.navbar__brand {
			position: absolute;
			top:5px;
			left:2rem;
			z-index: 100;
		}

		.navbar__brand__img {
			max-width: 5rem;
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
						<a className="navbar__link">News</a>
					</Link>
				</div>
				<div className="navbar__item">
					<Link href="/">
						<a className="navbar__link">Reviews</a>
					</Link>
				</div>
				<div className="navbar__item">
					<Link href="/">
						<a className="navbar__link">Podcast</a>
					</Link>
				</div>
			</nav>
		</div>
	</React.Fragment>
)

export default Navbar;
