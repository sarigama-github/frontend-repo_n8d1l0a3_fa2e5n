import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import About from './components/About'
import CTA from './components/CTA'

const pageBg = '#433534'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBg }}>
      <Navbar />
      <main className="relative">
        <Hero />
        <Solutions />
        <About />
        <CTA />
        <footer className="pb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-white/50 text-sm">© {new Date().getFullYear()} Bob Mwathu — AI & No‑code Systems</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
