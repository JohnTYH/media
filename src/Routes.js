import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

import Home from "./Pages/Home";
import PhotographyMain from "./Pages/Photography";
import Gallery from "./Components/Gallery";
import portraitData from "./Components/Gallery/portraits";
import eventsData from "./Components/Gallery/events";
import performancesData from "./Components/Gallery/performances";
import foodData from "./Components/Gallery/food";
import graduationData from "./Components/Gallery/graduation";
import sportsData from "./Components/Gallery/sports";
import WeddingData from "./Components/Gallery/weddings";
import Contact from "./Pages/Contact";

// export const ROUTES = [{ path: "/", component: Home, exact: true }];

const Pages = () => {
  const { pathname } = useLocation();
  const GAToken = process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (GAToken) {
      console.log(GAToken);
      ReactGA.initialize(GAToken);
    }
    ReactGA.send({
      hitType: "pageview",
      page: `${pathname}`,
    });
  }, [pathname, GAToken]);
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/photography" exact element={<PhotographyMain />} />
      <Route
        path="/portraits"
        exact
        element={<Gallery data={portraitData} />}
      />
      <Route path="/events" exact element={<Gallery data={eventsData} />} />
      <Route
        path="/performances"
        exact
        element={<Gallery data={performancesData} />}
      />
      <Route path="/food" exact element={<Gallery data={foodData} />} />
      <Route
        path="/graduation"
        exact
        element={<Gallery data={graduationData} />}
      />
      <Route path="/sports" exact element={<Gallery data={sportsData} />} />
      <Route path="/weddings" exact element={<Gallery data={WeddingData} />} />
      <Route path="/contact" exact element={<Contact />} />
    </Routes>
  );
};

// function getKey({ path, index }) {
//   if (path === "") {
//     return index;
//   }
//   return path;
// }

export default Pages;
