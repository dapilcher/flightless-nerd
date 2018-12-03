import ReactGA from 'react-ga';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const initGA = () => {
  // console.log('GA init')
  ReactGA.initialize(publicRuntimeConfig.gaTracker);
}

const logPageView = () => {
  // console.log('Logging pageview for ${window.location.pathname}')
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}

export { initGA, logPageView, logEvent, logException };