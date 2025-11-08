import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-slate-200/80 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 bg-slate-950/60 border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-white">
          <span className="text-fuchsia-400">{`<`}</span>
          Noval Ezzy Saputra
          <span className="text-cyan-400">{`/>`}</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors">
            <Github size={18} />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors">
            <Linkedin size={18} />
          </a>
          <a aria-label="Email" href="mailto:hello@novalezzy.dev" className="p-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
