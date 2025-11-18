import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

const palette = {
  sand: '#c6c0ae',
  cocoa: '#433534',
  rouge: '#753c36',
  clay: '#a74338',
  flame: '#da4b3a',
}

export default function Hero() {
  const [canRenderSpline, setCanRenderSpline] = useState(false)

  useEffect(() => {
    // Avoid rendering Spline until client mounted to prevent hydration issues
    setCanRenderSpline(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-28" aria-label="Hero">
      {/* Background base color */}
      <div className="absolute inset-0" style={{ background: palette.cocoa }} />

      {/* Spline canvas */}
      <div className="absolute inset-0">
        {canRenderSpline && (
          <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" />
        )}
      </div>

      {/* Gradient overlays for contrast */}
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          `radial-gradient(800px 400px at 10% 10%, ${palette.rouge}33, transparent), ` +
          `radial-gradient(600px 300px at 90% 30%, ${palette.flame}22, transparent), ` +
          `linear-gradient(180deg, #00000055 0%, #00000066 40%, #00000088 100%)`,
      }} />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center py-16 sm:py-24">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                <span className="h-2 w-2 rounded-full" style={{ background: palette.flame }} />
                AI & No‑code Systems for Growth Teams
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight" style={{ color: palette.sand }}>
                Streamline sales, support and ops with AI‑powered systems
              </h1>
              <p className="mt-5 max-w-2xl text-white/80 text-lg leading-relaxed">
                I’m Bob Mwathu — CTO at Brainse.co and AI Researcher at Brainse AI in Nairobi. I design and ship
                reliable automations and customer journeys so your team can focus on growth.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: palette.flame }}
                >
                  Book a Strategy Call
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-medium text-white/90 hover:bg-white/15"
                >
                  Explore Solutions
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { k: 'Sales Process', v: 'Lead capture → Scoring → Handoff' },
                  { k: 'Customer Experience', v: 'Onboarding • Assist • Retain' },
                  { k: 'Internal Operations', v: 'Back‑office automation' },
                ].map((f) => (
                  <div key={f.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">{f.k}</p>
                    <p className="mt-1 font-medium" style={{ color: palette.sand }}>{f.v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Spacer on the right to let Spline breathe visually */}
            <div className="lg:col-span-5" aria-hidden>
              <div className="h-[40vh] sm:h-[50vh] lg:h-[60vh]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
