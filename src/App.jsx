import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import ServicesOverview from './components/ServicesOverview';
import StrategicFoundation from './components/StrategicFoundation';
import ContinuousManagement from './components/ContinuousManagement';
import ServicesDetail from './components/ServicesDetail';
import Investment from './components/Investment';
import NextSteps from './components/NextSteps';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Philosophy />
      <ServicesOverview />
      <StrategicFoundation />
      <ContinuousManagement />
      <ServicesDetail />
      <Investment />
      <NextSteps />
      <Contact />
    </div>
  );
}

export default App;
