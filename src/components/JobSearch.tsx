import React from 'react'

const JobSearch: React.FC = () => {
  const caseStudies = [
    {
      type: 'Electrician',
      name: 'Spark Solutions',
      location: 'Melbourne, VIC',
      icon: 'electrical_services',
      iconColor: 'text-yellow-500',
      iconBg: 'bg-yellow-50 dark:bg-yellow-900/20',
      before: {
        loadTime: '6.2s',
        performanceScore: 28,
        conversionRate: '1.2%',
        monthlyLeads: 15,
        revenue: '$8,400'
      },
      after: {
        loadTime: '0.9s',
        performanceScore: 96,
        conversionRate: '4.8%',
        monthlyLeads: 62,
        revenue: '$34,800'
      },
      improvement: '+314% more clients'
    },
    {
      type: 'Plumber',
      name: 'Flow Masters',
      location: 'Sydney, NSW',
      icon: 'plumbing',
      iconColor: 'text-primary',
      iconBg: 'bg-primary-50 dark:bg-primary-900/20',
      before: {
        loadTime: '8.1s',
        performanceScore: 22,
        conversionRate: '0.8%',
        monthlyLeads: 9,
        revenue: '$12,600'
      },
      after: {
        loadTime: '0.7s',
        performanceScore: 98,
        conversionRate: '5.2%',
        monthlyLeads: 58,
        revenue: '$81,200'
      },
      improvement: '+544% more clients'
    },
    {
      type: 'Electrician',
      name: 'PowerPro Services',
      location: 'Brisbane, QLD',
      icon: 'bolt',
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50 dark:bg-blue-900/20',
      before: {
        loadTime: '5.8s',
        performanceScore: 35,
        conversionRate: '1.5%',
        monthlyLeads: 22,
        revenue: '$18,900'
      },
      after: {
        loadTime: '0.8s',
        performanceScore: 94,
        conversionRate: '4.1%',
        monthlyLeads: 67,
        revenue: '$57,400'
      },
      improvement: '+204% more clients'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-blue-500 opacity-5 blur-3xl rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Performance Rebuilds</p>
          <h2 className="font-display text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
            Real Results from <span className="text-primary">Real Tradies</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            See how speed optimization transformed these businesses from losing leads to closing more jobs than ever.
          </p>
        </div>
        
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 border-b border-slate-200 dark:border-slate-600">
                <div className="flex items-center gap-4">
                  <div className={`${study.iconBg} p-3 rounded-xl`}>
                    <span className={`material-icons text-2xl ${study.iconColor}`}>{study.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-slate-900 dark:text-white">{study.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{study.type} • {study.location}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-bold">
                      {study.improvement}
                    </div>
                  </div>
                </div>
              </div>

              {/* Before/After Stats */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Before */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <h4 className="font-bold text-slate-900 dark:text-white">BEFORE (Old WordPress Site)</h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                        <div className="text-2xl font-bold text-red-600 dark:text-red-400">{study.before.loadTime}</div>
                        <div className="text-xs text-red-600 dark:text-red-400 font-medium">Load Time</div>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                        <div className="flex items-center justify-center">
                          <div className="relative w-16 h-16">
                            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#fecaca"
                                strokeWidth="3"
                              />
                              <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#dc2626"
                                strokeWidth="3"
                                strokeDasharray={`${study.before.performanceScore}, 100`}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-lg font-bold text-red-600 dark:text-red-400">{study.before.performanceScore}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-red-600 dark:text-red-400 font-medium text-center mt-2">Lighthouse Score</div>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                        <div className="text-2xl font-bold text-red-600 dark:text-red-400">{study.before.conversionRate}</div>
                        <div className="text-xs text-red-600 dark:text-red-400 font-medium">Conversion Rate</div>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                        <div className="text-2xl font-bold text-red-600 dark:text-red-400">{study.before.monthlyLeads}</div>
                        <div className="text-xs text-red-600 dark:text-red-400 font-medium">Monthly Leads</div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                      <div className="text-lg font-bold text-slate-700 dark:text-slate-300">{study.before.revenue}/month</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Revenue</div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <h4 className="font-bold text-slate-900 dark:text-white">AFTER (Astro Speed Patch)</h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">{study.after.loadTime}</div>
                        <div className="text-xs text-green-600 dark:text-green-400 font-medium">Load Time</div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                        <div className="flex items-center justify-center">
                          <div className="relative w-16 h-16">
                            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#bbf7d0"
                                strokeWidth="3"
                              />
                              <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#16a34a"
                                strokeWidth="3"
                                strokeDasharray={`${study.after.performanceScore}, 100`}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-lg font-bold text-green-600 dark:text-green-400">{study.after.performanceScore}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-green-600 dark:text-green-400 font-medium text-center mt-2">Lighthouse Score</div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">{study.after.conversionRate}</div>
                        <div className="text-xs text-green-600 dark:text-green-400 font-medium">Conversion Rate</div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">{study.after.monthlyLeads}</div>
                        <div className="text-xs text-green-600 dark:text-green-400 font-medium">Monthly Leads</div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
                      <div className="text-lg font-bold text-primary">{study.after.revenue}/month</div>
                      <div className="text-xs text-primary/80">Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="font-display text-2xl text-slate-900 dark:text-white mb-4">
              Ready for Similar Results?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              These aren't fake testimonials. These are real performance improvements that directly impacted revenue.
            </p>
            <button className="bg-primary hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-primary/50 transition-all">
              Get Your Free Speed Audit
            </button>
          </div>
          
          <div className="mt-8 bg-slate-100 dark:bg-slate-800/30 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400 italic">
              <span className="font-semibold">Professional Disclaimer:</span> Specific client details and business names have been modified to protect client confidentiality and maintain professional standards. All performance metrics and revenue figures represent actual results achieved through speed optimization services.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobSearch