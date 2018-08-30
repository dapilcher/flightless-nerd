import React from "react";

const Footer = () => (
	<React.Fragment>
		<style jsx>{`
			.footer {
				border-top: 1px solid rgba(0, 0, 0, 0.1);
				padding: 1rem 0;
				display: flex;
				flex-direction: row;
				justify-content: center;
			}
		`}</style>
		<div className="footer container">
			<p>This is the footer</p>
		</div>
	</React.Fragment>
);

export default Footer;
