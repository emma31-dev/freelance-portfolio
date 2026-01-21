import React from 'react'

const Partners: React.FC = () => {
  return (
    <section className="py-10 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-8">
          Empowering Local Businesses Every Day
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-display text-xl dark:text-white">
            <span className="material-icons">verified_user</span> 
            MasterPlumbers
          </div>
          <div className="flex items-center gap-2 font-display text-xl dark:text-white">
            <span className="material-icons">engineering</span> 
            HiPages
          </div>
          <div className="flex items-center gap-2 font-display text-xl dark:text-white">
            <span className="material-icons">handyman</span> 
            ServiceSeeker
          </div>
          <div className="flex items-center gap-2 font-display text-xl dark:text-white">
            <span className="material-icons">build</span> 
            TrueLocal
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners