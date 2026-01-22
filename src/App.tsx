import React, { Suspense } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

// Lazy load components for better performance
const Stats = React.lazy(() => import('./components/Stats'))
const Partners = React.lazy(() => import('./components/Partners'))
const Process = React.lazy(() => import('./components/Process'))
const JobSearch = React.lazy(() => import('./components/JobSearch'))
const MobileApp = React.lazy(() => import('./components/MobileApp'))
const Footer = React.lazy(() => import('./components/Footer'))

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
)

function App() {
  return (
    <div className="font-body bg-gradient-to-br from-background-light via-background-light to-primary-50/20 dark:from-background-dark dark:via-background-dark dark:to-primary-900/10 text-slate-800 dark:text-slate-200 transition-colors duration-200 min-h-screen">
      <Navigation />
      <Hero />
      
      <Suspense fallback={<SectionLoader />}>
        <Stats />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Partners />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Process />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <JobSearch />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <MobileApp />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App