import ReactGA from 'react-ga';
import getConfig from 'next/config';


export const initGA = () => {
  console.log('GA: Init')
}

export const logPageView = (title = '') => {
  console.log(`GA: Logging pageview for ${window.location.pathname + window.location.search}${title !== '' ? ` title: ${title}` : ''}`);
}

export const logEvent = (category = '', action = '') => {
  console.log(`GA: Logging event for category: ${category}, action: ${action}`);
}

export const logException = (description = '', fatal = false) => {
  console.log(`GA: Logging exception description: ${description}, fatal: ${fatal}`);
}
