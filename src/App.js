// import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StartSection from "./sections/StartSection";
import GiftSection from "./sections/GiftSection";
import GallerySection from "./sections/GallerySection";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="loading-screen">
  //       <div className="loader"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StartSection />
      {/* <div className='middle-section'></div>
      <DaySection /> */}
      <div className="last-section">
        <div className="parallax-bg"></div>
      </div>

      <GiftSection />
      <div className="middle-section"></div>
      <GallerySection />
    </div>
  );
}

export default App;
