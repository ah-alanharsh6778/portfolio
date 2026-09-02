import React from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200 relative overflow-x-hidden">
      {/* Deep Pure Black Real Planet Space Background */}
      <Background />

      {/* 1. Navbar */}
      <Navbar />

      {/* Main Content - Seamless Cosmic Flow */}
      <main className="relative z-10">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Skills Bento Section */}
        <Skills />

        {/* 4. Featured Projects Section */}
        <Projects />

        {/* 5. Expansive About Me Section */}
        <About />

        {/* 6. Cinematic Contact Section */}
        <Contact />
      </main>

      {/* 7. Connected Footer */}
      <Footer />
    </div>
  );
}
