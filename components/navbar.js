import { Component } from "react";
import Link from "next/link";

const Navbar = props => (
	<nav className="navbar navbar-expand-md navbar-light">
		<div className="container">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link href="/">
							<a className="nav-link">
								Home <span className="sr-only">(current)</span>
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/">
							<a className="nav-link">News</a>
						</Link>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Reviews
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<Link href="/">
								<a className="dropdown-item">PS4</a>
							</Link>
							<Link href="/">
								<a className="dropdown-item">XBoxOne</a>
							</Link>
							<Link href="/">
								<a className="dropdown-item">Switch</a>
							</Link>
							<Link href="/">
								<a className="dropdown-item">PC</a>
							</Link>
						</div>
					</li>
					<li className="nav-item">
						<Link href="/">
							<a className="nav-link">Podcast</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

export default Navbar;
