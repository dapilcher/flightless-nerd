import ReactGA from 'react-ga';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

exports.initGA = () => {
  // console.log('GA init')
  ReactGA.initialize(publicRuntimeConfig.gaTracker);
}

exports.logPageView = () => {
  // console.log('Logging pageview for ${window.location.pathname}')
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

exports.logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

exports.logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
