import React from 'react'

const Process: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Specialist Services</p>
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 dark:text-white mb-6">
            Entry Packages <br/>
            <span className="text-primary">$300–$500 Range</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Get that first deal with these targeted speed optimization services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Ad-Conversion Patch */}
          <div className="bg-slate-50 dark:bg-surface-dark rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-100 dark:border-slate-800">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <span className="material-icons text-3xl">ads_click</span>
            </div>
            <div className="mb-4">
              <h3 className="font-display text-xl text-slate-900 dark:text-white mb-2">The Ad-Conversion Patch</h3>
              <div className="text-2xl font-bold text-primary mb-2">$350</div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              A dedicated, lightning-fast landing page for your Google/Facebook ads.
            </p>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Under 1s load time
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Mobile-first design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Direct call buttons
              </li>
            </ul>
          </div>
          
          {/* Google Maps Booster */}
          <div className="bg-slate-50 dark:bg-surface-dark rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-100 dark:border-slate-800">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <span className="material-icons text-3xl">map</span>
            </div>
            <div className="mb-4">
              <h3 className="font-display text-xl text-slate-900 dark:text-white mb-2">The Google Maps Booster</h3>
              <div className="text-2xl font-bold text-primary mb-2">$450</div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Website optimization specifically designed to help your Google Business Profile rank higher.
            </p>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Local SEO optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Schema markup
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Google-friendly structure
              </li>
            </ul>
          </div>
          
          {/* ROT-Tax Automator */}
          <div className="bg-slate-50 dark:bg-surface-dark rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-100 dark:border-slate-800">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <span className="material-icons text-3xl">calculate</span>
            </div>
            <div className="mb-4">
              <h3 className="font-display text-xl text-slate-900 dark:text-white mb-2">The ROT-Tax Automator</h3>
              <div className="text-2xl font-bold text-primary mb-2">$500</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Sweden Only</div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Custom quote form that automatically explains ROT-tax deduction to customers.
            </p>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Auto tax calculation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Customer education
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Compliance ready
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl text-slate-900 dark:text-white mb-4">
              Trust Elements - <span className="text-primary">No-Risk Feel</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-icons">speed</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white">The Speed Guarantee</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                "If I don't get your mobile speed into the 'Green Zone' (90+), you don't pay a cent."
              </p>
            </div>
            
            <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-icons">code</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white">The Clean Code Promise</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                "No bloated plugins. No security risks. Just pure, fast HTML that Google loves."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process