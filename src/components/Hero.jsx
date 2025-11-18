import Spline from '@splinetool/react-spline'

const sand = '#c6c0ae'
const cocoa = '#433534'
const rouge = '#753c36'
const clay = '#a74338'
const flame = '#da4b3a'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center" aria-label="Hero">
      {/* Background gradient wash using palette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            `radial-gradient(1200px 500px at 10% 20%, ${flame}22, transparent),` +
            `radial-gradient(900px 400px at 80% 10%, ${rouge}22, transparent),` +
            `linear-gradient(180deg, ${cocoa}, #241c1b)`
        }}
      />

      {/* Spline cover */}
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide" style={{ backgroundColor: '#ffffff14', color: sand, border: '1px solid rgba(255,255,255,0.12)' }}>
            AI Agency • Systems • No‑code Automation
          </span>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight" style={{ color: sand }}>
            Streamlining Sales, CX and Operations with AI & No‑code
          </h1>

          <p className="mt-5 text-lg sm:text-xl leading-relaxed" style={{ color: '#e8e5db' }}>
            I help businesses design and automate end‑to‑end systems — from lead capture to customer success — using
            modern AI tooling and battle‑tested no‑code platforms. Based in Nairobi, working worldwide.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5" style={{ backgroundColor: flame }}>
              Book a Strategy Call
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white/90 border border-white/20 hover:bg-white/5">
              See Work
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { k: 'Sales Process', v: 'Lead gen to closed‑won automations' },
              { k: 'Customer Experience', v: 'Onboarding, support, self‑serve AI' },
              { k: 'Internal Ops', v: 'Back‑office workflows & dashboards' },
            ].map((item) => (
              <div key={item.k} className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-sm text-white/60">{item.k}</p>
                <p className="mt-1 font-semibold" style={{ color: sand }}>{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
