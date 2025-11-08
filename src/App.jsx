import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-1/3 -left-1/3 h-[60rem] w-[60rem] rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute -bottom-1/3 -right-1/3 h-[60rem] w-[60rem] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
