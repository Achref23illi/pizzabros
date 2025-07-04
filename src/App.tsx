import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Menu3D from './components/Menu3D';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import FloatingSocial from './components/FloatingSocial';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <Menu3D />
        <AboutSection />
      </main>
      <Footer />
      <FloatingSocial />
    </div>
  );
}

export default App;
