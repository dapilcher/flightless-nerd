import ReactGA from "react-ga";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const initGA = () => {
	// console.log('GA init')
	ReactGA.initialize(publicRuntimeConfig.gaTracker);
};

export const logPageView = (title = "") => {
	// console.log('Logging pageview for ${window.location.pathname}')
	ReactGA.set({ page: window.location.pathname + window.location.search });
	ReactGA.pageview(
		window.location.pathname + window.location.search,
		null,
		title !== "" ? title : null
	);
};

export const logEvent = (category = "", action = "", label = "") => {
	if (category && action && label) {
		ReactGA.event({ category, action, label });
	}
};

export const logException = (description = "", fatal = false) => {
	if (description) {
		ReactGA.exception({ description, fatal });
	}
};
