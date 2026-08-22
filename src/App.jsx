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
    <div className="min-h-screen bg-[#0B1121] text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200 relative overflow-x-hidden">
      {/* Animated Fixed Background (Deep Slate #0B1121, Ambient Teal Glows, Floating Cubes) */}
      <Background />

      {/* 1. Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* 2. Hero Section (Centered Architecture Layout, Sliding Ticker, Resume Download) */}
        <Hero />

        {/* 3. Skills Bento Box (Technical Arsenal & Category Filters) */}
        <Skills />

        {/* 4. Featured Projects Section (Agrinexus, CareerSneaker, FlowSpace, CloudBillBox) */}
        <Projects />

        {/* 5. Expansive About Me Section (B.Tech CSE, Scale Highlights & Technical Pillars) */}
        <About />

        {/* 6. Cinematic Contact Section (Avatar, Online Beacon, Drop me an Email) */}
        <Contact />
      </main>

      {/* 7. Connected Footer (LinkedIn, GitHub, Phone Call, Direct Email, Back to top) */}
      <Footer />
    </div>
  );
}
