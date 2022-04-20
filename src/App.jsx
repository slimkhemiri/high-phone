import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
// import Cursor from "./Cursor";
import Loading from "./Loading";
// import SideBar from "./SideBar";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 2000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {/* <Cursor /> */}
          <Navigation />
          <Header data={landingPageData.Header} />
          <Features data={landingPageData.Features} />
          {/* <Services data={landingPageData.Services} /> */}
          <Gallery data={landingPageData.Gallery} />
          <About data={landingPageData.About} />
          <Contact data={landingPageData.Contact} />
        </>
      )}
    </div>
  );
};

export default App;
