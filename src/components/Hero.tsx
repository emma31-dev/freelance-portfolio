import React from 'react'

const Hero: React.FC = () => {
  return (
    <header id="hero" className="relative pt-20 pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Orange accent background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl -ml-32 -mb-32"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border-2 border-primary/30 bg-primary-50 dark:bg-primary-900/20 shadow-sm">
              <span className="text-xs font-bold text-primary tracking-wider uppercase">
                Speed Optimization Specialist
              </span>
            </div>
            
            <h1 className="font-display text-4xl lg:text-6xl leading-tight text-slate-900 dark:text-white">
              Your website is paying for clicks, <br/>
              <span className="text-primary">but is it closing jobs?</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Most trade websites lose 40% of mobile users due to slow load speeds. I build high-performance sites that turn traffic into booked calls.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#quote"
              className="bg-primary hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-primary/50 transition-all text-base flex items-center justify-center gap-2 border-2 border-primary hover:border-primary-600"
            >
              Free Audit
              <span className="material-icons text-sm">speed</span>
            </a>
              <button className="bg-white dark:bg-surface-dark border-2 border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:bg-primary-50 dark:hover:bg-primary-900/10 text-slate-900 dark:text-white font-semibold py-4 px-8 rounded-full shadow-sm transition-all flex items-center justify-center gap-2">
                <span className="material-icons text-primary">analytics</span>
                Performance Scores
              </button>
            </div>
            
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <span className="font-bold text-primary">The Speed Guarantee:</span>
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                "If I don't get your mobile speed into the 'Green Zone' (90+), you don't pay a cent."
              </p>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="flex-1 relative h-[400px] lg:h-[500px] rounded-3xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-surface-dark dark:to-black overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/manual-worker-warehouse.webp')] bg-cover bg-center opacity-90"></div>
            
            {/* Speed Boost Notification */}
            <div className="absolute top-6 left-6 bg-white dark:bg-surface-dark p-3 rounded-xl shadow-lg border-l-4 border-primary max-w-xs">
              <div className="flex items-center gap-3">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full">
                  <span className="material-icons text-primary text-sm">speed</span>
                </div>
                <div>
                  <p className="text-xs text-primary font-bold uppercase">Speed Boost</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">6.4s → 0.8s</p>
                </div>
              </div>
            </div>
            
            {/* Tradie Status Card */}
            <div className="absolute bottom-6 right-6 bg-white dark:bg-surface-dark p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <img 
                  alt="Tradie avatar" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary bg-primary-100" 
                  src="/icon.png"
                  width="40"
                  height="40"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Mike "The Pipe"</p>
                  <p className="text-xs text-green-500 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> 
                    Available Now
                  </p>
                </div>
              </div>
              <div className="w-full bg-slate-100 dark:bg-black h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-400 h-full w-3/4 rounded-full"></div>
              </div>
              <p className="text-[10px] text-right mt-1 text-slate-400">Daily quota: 75%</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero