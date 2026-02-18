import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index';
import HeroSection from './components/HeroSection';
import Countdown from './components/Countdown';
import StartSection from './sections/StartSection';
import DaySection from './sections/DaySection';
import GiftSection from './sections/GiftSection';
import Galeria from './components/Galeria';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StartSection />
      {/* <div className='middle-section'></div>
      <DaySection /> */}
      <div className='last-section'>
        <div className='parallax-bg'></div>
      </div>

      <GiftSection />
      <div className='middle-section'></div>
      <Galeria/>
    </div>
  );
}

export default App;
