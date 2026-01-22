import { Suspense, lazy } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

// Lazy load components with preloading for better performance
const Stats = lazy(() => 
  import('./components/Stats').then(module => {
    // Preload the next component while this one is loading
    import('./components/Partners')
    return module
  })
)

const Partners = lazy(() => 
  import('./components/Partners').then(module => {
    import('./components/Process')
    return module
  })
)

const Process = lazy(() => 
  import('./components/Process').then(module => {
    import('./components/JobSearch')
    return module
  })
)

const JobSearch = lazy(() => 
  import('./components/JobSearch').then(module => {
    import('./components/MobileApp')
    return module
  })
)

const MobileApp = lazy(() => 
  import('./components/MobileApp').then(module => {
    import('./components/Footer')
    return module
  })
)

const Footer = lazy(() => import('./components/Footer'))


function App() {
  return (
    <div className="font-body bg-gradient-to-br from-background-light via-background-light to-primary-50/20 dark:from-background-dark dark:via-background-dark dark:to-primary-900/10 text-slate-800 dark:text-slate-200 transition-colors duration-200 min-h-screen">
      <Navigation />
      <Hero />
      
      <Suspense>
        <Stats />
        <Partners />
        <Process />
        <JobSearch />
        <MobileApp />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App