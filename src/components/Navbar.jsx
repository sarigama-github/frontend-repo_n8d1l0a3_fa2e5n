import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const brandBg = '#433534'
const accent = '#da4b3a'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-5 rounded-2xl border border-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Brand */}
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl grid place-items-center shadow-inner" style={{ background: brandBg }}>
                <span className="text-white font-black">AI</span>
              </div>
              <div className="leading-tight">
                <p className="text-white font-semibold">Bob Mwathu</p>
                <p className="text-white/60 text-xs">AI & No‑code Systems</p>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-white shadow-sm transition-all"
                style={{ backgroundColor: accent }}
              >
                Book a Strategy Call
              </a>
            </nav>

            {/* Mobile */}
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/90"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block text-white/80 hover:text-white">
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block text-center rounded-xl px-4 py-3 font-medium text-white"
                style={{ backgroundColor: accent }}
              >
                Book a Strategy Call
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
