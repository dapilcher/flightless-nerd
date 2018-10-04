import { Component } from "react";
import Link from "next/link";
import Logo from './Logo';

const Navbar = () => (
	<React.Fragment>
		<style jsx>{`
			.navbar {
				background-color: #586CFF;
				background-image: linear-gradient(to bottom right, #586CFF, #2539CC);
				font-family: Raleway;
				display: flex;
				flex-direction: column;
				border-bottom: 0.5rem solid #EB3E34;
			}
			
			.navbar__items {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: flex-end;
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
				color: #fff;
			}
			.navbar__link:hover {
				text-decoration: none;
			}

			@media (min-width: 992px) {
				.navbar {
					flex-direction: row;
				}
				.navbar__items {
					justify-content: flex-end;
				}
			}

		`}</style>
		<div className="navbar">
			<Logo />
			<nav className="navbar__items">
				<div className="navbar__item">
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
);

export default Navbar;
