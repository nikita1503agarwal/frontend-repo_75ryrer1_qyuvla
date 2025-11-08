import React from 'react';
import { Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/6we0v10CgBP5mA4a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 min-h-[80vh] grid items-center">
        <div className="backdrop-blur-sm bg-slate-950/40 p-8 rounded-2xl border border-white/10 shadow-2xl">
          <div className="inline-flex items-center gap-2 text-sm text-fuchsia-300/90">
            <Sparkles size={16} className="animate-pulse" />
            Anime-inspired • Professional Craft
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Noval Ezzy Saputra
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl">
            Frontend Developer with a love for sleek interfaces and tasteful anime aesthetics. I build fast, accessible, and delightful web experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-cyan-500/20 transition-shadow">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-white/15 hover:border-white/30 bg-white/5 text-white font-medium">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>
    </section>
  );
}
