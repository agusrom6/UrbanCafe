import Hero from './pages/Hero';
import Menu from './pages/Menu';
import Specials from './pages/Specials';
import About from './pages/About';
import { Footer } from './pages/Footer';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Menu />
      <Specials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;