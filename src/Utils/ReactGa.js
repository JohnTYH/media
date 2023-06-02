import ReactGA from "react-ga4";

export const GAEventsTracker = (category, action, label) => {
  ReactGA.event({ category, action, label });
};

export default GAEventsTracker;
