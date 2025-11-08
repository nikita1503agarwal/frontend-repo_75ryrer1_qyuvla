import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Let’s build something great</h3>
            <p className="mt-2 text-slate-400 max-w-prose">
              I’m currently open for freelance and collaboration. Share your idea and I’ll get back within 24 hours.
            </p>
          </div>
          <form
            className="grid gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = data.get('name');
              alert(`Thanks, ${name}! I will reach out shortly.`);
              e.currentTarget.reset();
            }}
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <input name="name" required placeholder="Your name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400/50" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400/50" />
            </div>
            <textarea name="message" rows="4" required placeholder="Tell me about your project" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400/50" />
            <button className="justify-self-start px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-cyan-500/20 transition-shadow">
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-10 text-sm text-slate-500 flex items-center justify-between flex-wrap gap-4">
          <p>© {new Date().getFullYear()} Noval Ezzy Saputra. All rights reserved.</p>
          <p className="text-slate-400">Designed with anime flair and professional polish.</p>
        </div>
      </div>
    </footer>
  );
}
