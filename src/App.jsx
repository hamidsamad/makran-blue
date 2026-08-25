import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { AppProvider } from "./context/AppContext";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Areas from "./pages/Areas";
import AreaDetails from "./pages/AreaDetails";
import MarineLife from "./pages/MarineLife";
import FishDetails from "./pages/FishDetails";
import Culture from "./pages/Culture";
import Safety from "./pages/Safety";
import Fisherman from "./pages/Fisherman";
import Compass from "./pages/Compass";
import Weather from "./pages/Weather";
import FishingGuide from "./pages/FishingGuide";
import FishIdentifier from "./pages/FishIdentifier";
import Emergency from "./pages/Emergency";
import AI from "./pages/AI";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AppProvider>
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

          <Route path="/safety" element={<Safety />} />

          <Route path="/fisherman" element={<Fisherman />} />
          <Route path="/fisherman/compass" element={<Compass />} />
          <Route path="/fisherman/weather" element={<Weather />} />
          <Route
            path="/fisherman/fishing-guide"
            element={<FishingGuide />}
          />
          <Route
            path="/fisherman/fish-identifier"
            element={<FishIdentifier />}
          />
          <Route path="/fisherman/emergency" element={<Emergency />} />

          <Route path="/ai" element={<AI />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AppProvider>
  );
}

export default App;
