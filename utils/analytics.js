import ReactGA from 'react-ga';

export const initGA = () => {
  // console.log('GA init');
  ReactGA.initialize('UA-112584088-1');
};

export const logPageView = () => {
  // console.log(`Logging pageview for ${window.location.pathname}`);
  // console.log(window.location);
  ReactGA.set({ page: window.location.href });
  ReactGA.pageview(window.location.href);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
