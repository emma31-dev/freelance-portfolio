import React from 'react'

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full py-4 px-4 sm:px-8 lg:px-16 flex justify-between items-center bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-700/20 z-50">
      <div className="flex items-center gap-2">
        <span className="font-display text-xl tracking-wide text-slate-900 dark:text-white uppercase">
          Trade<span className="text-primary font-bold">Flow</span>
        </span>
      </div>
      
      <div className="hidden md:flex gap-6 font-medium text-sm text-slate-600 dark:text-slate-400">
        <a className="hover:text-primary transition-colors font-semibold" href="#performance">Performance</a>
        <a className="hover:text-primary transition-colors font-semibold" href="#about">About</a>
        <a className="hover:text-primary transition-colors font-semibold" href="#services">Services</a>
        <a className="hover:text-primary transition-colors font-semibold" href="#quote">Get Quote</a>
      </div>
      
      <a 
        href="#quote"
        className="bg-primary hover:bg-primary-600 text-white font-bold py-2.5 px-5 rounded-full shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5 text-sm uppercase tracking-wider border-2 border-primary hover:border-primary-600"
      >
        Free Audit
      </a>
    </nav>
  )
}

export default Navigation