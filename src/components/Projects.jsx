import React from 'react';
import { Code2, Rocket, Palette } from 'lucide-react';

const projects = [
  {
    title: 'Shinobi Tasks',
    description:
      'A productivity app with stealthy animations and focus modes, inspired by ninja discipline.',
    icon: <Code2 className="text-fuchsia-400" size={20} />,
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Mecha UI Kit',
    description:
      'A component library blending professional layouts with subtle anime mecha influences.',
    icon: <Palette className="text-cyan-400" size={20} />,
    tags: ['Design System', 'Storybook', 'Accessibility'],
    link: '#',
  },
  {
    title: 'Warp Speed Portfolio',
    description:
      'Ultra-fast static site generator setup with optimized routing and image pipelines.',
    icon: <Rocket className="text-violet-400" size={20} />,
    tags: ['Vite', 'FastAPI', 'SSR'],
    link: '#',
  },
];

const Badge = ({ children }) => (
  <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">
    {children}
  </span>
);

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <p className="mt-2 text-slate-400 max-w-2xl">
              A selection of work blending clean engineering with tasteful anime vibes.
            </p>
          </div>
          <a href="#contact" className="text-fuchsia-300 hover:text-fuchsia-200">Request full portfolio →</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-slate-900/70 grid place-items-center border border-white/10">
                  {p.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-white text-slate-100">
                  {p.title}
                </h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
