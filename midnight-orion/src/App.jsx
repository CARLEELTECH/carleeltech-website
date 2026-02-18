import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Services from './components/Services';
import Robotics from './components/Robotics';
import Projects from './components/Projects';
import Jimoh from './components/Jimoh';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Persistent Elements */}
      <Navbar />
      <Jimoh />

      {/* Page Sections */}
      <main>
        <Hero />
        <Vision />
        <Services />
        <Robotics />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
