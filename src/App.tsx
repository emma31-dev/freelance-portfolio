import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Process from './components/Process'
import JobSearch from './components/JobSearch'
import MobileApp from './components/MobileApp'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-body bg-gradient-to-br from-background-light via-background-light to-primary-50/20 dark:from-background-dark dark:via-background-dark dark:to-primary-900/10 text-slate-800 dark:text-slate-200 transition-colors duration-200 min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Partners />
      <Process />
      <JobSearch />
      <MobileApp />
      <Footer />
    </div>
  )
}

export default App