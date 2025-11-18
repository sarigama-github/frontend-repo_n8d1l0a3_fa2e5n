const palette = {
  sand: '#c6c0ae',
  cocoa: '#433534',
  rouge: '#753c36',
  clay: '#a74338',
  flame: '#da4b3a',
}

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl opacity-30" style={{ background: `radial-gradient(circle, ${palette.flame}55, transparent)` }} />
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: palette.sand }}>Book a Strategy Call</h2>
          <p className="mt-3 text-white/80 max-w-2xl">Tell me about your goals and current tools. I’ll map the quickest path to value with AI and No‑code.</p>
          <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
            <input type="email" className="rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email" />
            <input className="rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 sm:col-span-2" placeholder="Company / Website" />
            <textarea rows={4} className="rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 sm:col-span-2" placeholder="What would you like to build or improve?" />
            <div className="sm:col-span-2 flex items-center justify-between gap-4">
              <p className="text-xs text-white/60">By submitting, you agree to be contacted about your project.</p>
              <button type="button" className="rounded-xl px-5 py-3 font-semibold text-white shadow-lg" style={{ backgroundColor: palette.flame }}>
                Request Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
