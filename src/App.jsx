import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./components/Layout";
import AppErrorBoundary from "./AppErrorBoundary";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Areas from "./pages/Areas";
import AreaDetails from "./pages/AreaDetails";
import MarineLife from "./pages/MarineLife";
import FishDetails from "./pages/FishDetails";
import Culture from "./pages/Culture";
import History from "./pages/History";
import People from "./pages/People";
import PersonDetails from "./pages/PersonDetails";
import Astola from "./pages/Astola";
import PlacesCategory from "./pages/PlacesCategory";
import PlaceDetails from "./pages/PlaceDetails";
import Safety from "./pages/Safety";
import Fisherman from "./pages/Fisherman";
import Compass from "./pages/Compass";
import MarineWeather from "./pages/MarineWeather";
import FishingGuide from "./pages/FishingGuide";
import FishIdentifier from "./pages/FishIdentifier";
import Emergency from "./pages/Emergency";
import AI from "./pages/AI";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <AppErrorBoundary>
      <ScrollToTop />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/explore" element={<Explore />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/areas/:slug" element={<AreaDetails />} />

          <Route path="/marine-life" element={<MarineLife />} />
          <Route path="/marine-life/:id" element={<FishDetails />} />

          <Route path="/culture" element={<Culture />} />
          <Route path="/history" element={<History />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:slug" element={<PersonDetails />} />
          <Route path="/astola" element={<Astola />} />

          <Route path="/destinations" element={<PlacesCategory category="destinations" />} />
          <Route path="/beaches" element={<PlacesCategory category="beaches" />} />
          <Route path="/picnic" element={<PlacesCategory category="picnic" />} />
          <Route path="/hills" element={<PlacesCategory category="hills" />} />
          <Route path="/hotels" element={<PlacesCategory category="hotels" />} />
          <Route path="/stays" element={<PlacesCategory category="stays" />} />
          <Route path="/place/:slug" element={<PlaceDetails />} />

          <Route path="/safety" element={<Safety />} />

          <Route path="/fisherman" element={<Fisherman />} />
          <Route path="/fisherman/compass" element={<Compass />} />
          <Route path="/fisherman/weather" element={<MarineWeather />} />
          <Route path="/fisherman/fishing-guide" element={<FishingGuide />} />
          <Route path="/fisherman/fish-identifier" element={<FishIdentifier />} />
          <Route path="/fisherman/emergency" element={<Emergency />} />

          <Route path="/ai" element={<AI />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AppErrorBoundary>
  );
}
