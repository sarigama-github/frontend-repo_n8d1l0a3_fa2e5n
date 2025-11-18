const palette = {
  sand: '#c6c0ae',
  cocoa: '#433534',
  rouge: '#753c36',
  clay: '#a74338',
  flame: '#da4b3a',
}

const solutions = [
  {
    title: 'Sales Systems',
    desc: 'Automated lead capture, scoring and handoff. CRM integrations and outreach cadences that just work.',
    tags: ['CRM', 'Zapier/Make', 'AI Scoring'],
  },
  {
    title: 'Customer Experience',
    desc: 'Onboarding paths, AI support bots and knowledge bases that reduce tickets and increase NPS.',
    tags: ['Chatbots', 'Helpdesk', 'Docs'],
  },
  {
    title: 'Internal Operations',
    desc: 'Back‑office automation, approvals, and reporting — from finance to HR.',
    tags: ['Workflows', 'Dashboards', 'Docs'],
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(600px 200px at 10% 0%, ${palette.rouge}11, transparent)` }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: palette.sand }}>What I Build</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Systems that connect your tools, deliver better customer journeys, and free your team to focus on growth.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition-colors">
              <h3 className="text-xl font-semibold" style={{ color: palette.sand }}>{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
