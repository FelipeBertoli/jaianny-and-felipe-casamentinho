import "./App.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StartSection from "./sections/StartSection";
import GiftSection from "./sections/GiftSection";
import GallerySection from "./sections/GallerySection";

function App() {

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StartSection />

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
