const palette = {
  sand: '#c6c0ae',
  cocoa: '#433534',
  rouge: '#753c36',
  clay: '#a74338',
  flame: '#da4b3a',
}

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: palette.sand }}>About Bob Mwathu</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              With the emergence of Artificial Intelligence and No‑code, I recognized an opportunity for businesses to implement these technologies into their systems. I position at the forefront of this evolution and identify powerful AI and No‑code software that brings impeccable value to businesses.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[{
                k: 'Role', v: 'Chief Technology Officer @ Brainse.co'
              }, {
                k: 'Focus', v: 'AI Research & Systems Design'
              }, {
                k: 'Location', v: 'Nairobi County, Kenya'
              }, {
                k: 'Experience', v: '2+ years building AI & No‑code systems'
              }].map((i) => (
                <div key={i.k} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-white/60">{i.k}</p>
                  <p className="mt-1 font-semibold" style={{ color: palette.sand }}>{i.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
            <h3 className="text-xl font-semibold" style={{ color: palette.sand }}>Recent Roles</h3>
            <ul className="mt-4 space-y-3 text-white/85">
              <li>
                <p className="font-medium">Brainse.co — Chief Technology Officer</p>
                <p className="text-sm text-white/70">October 2023 – Present (2 years 2 months) · Kenya</p>
              </li>
              <li className="pt-2 border-t border-white/10">
                <p className="font-medium">Brainse AI — Artificial Intelligence Researcher</p>
              </li>
            </ul>
            <div className="mt-6 rounded-xl p-4" style={{ backgroundColor: '#ffffff10' }}>
              <p className="text-sm text-white/70">Available for consulting, end‑to‑end implementations, and team enablement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
