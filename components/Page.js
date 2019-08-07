import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { initGA, logPageView } from "../utils/analytics";
import FlashBanner from "./FlashBanner";
import ResponsiveWidthContainer from "./ResponsiveWidthContainer";

const StyledPage = styled.div`
	overflow-x: hidden;
	display: flex;
	flex-direction: row;
	justify-content: center;
	background: linear-gradient(#eee8, #ddd8);
	min-height: 100vh;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Page = ({ children }) => {
	const [flashIsVisible, setFlashIsVisible] = useState(true);
	const toggleFlash = () => setFlashIsVisible(!flashIsVisible);
	useEffect(() => {
		if (process.env.NODE_ENV === "production") {
			if (!window.GA_INITIALIZED) {
				initGA();
				window.GA_INITIALIZED = true;
			}
			logPageView();
		}
	}, []);
	return (
		<StyledPage>
			<Header />
			{flashIsVisible && (
				<FlashBanner isVisible={flashIsVisible} closeFlash={toggleFlash} />
			)}
			<ResponsiveWidthContainer>{children}</ResponsiveWidthContainer>
			<Footer />
		</StyledPage>
	);
};

export default Page;
