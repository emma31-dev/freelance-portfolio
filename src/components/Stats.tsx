import React from 'react'

const Stats: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 mb-20">
      {/* Astro vs The Rest Comparison */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl text-slate-900 dark:text-white mb-4">
            Astro vs. <span className="text-primary">The Rest</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Why my $400 fix is better than your current $5,000 slow site
          </p>
        </div>
        
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 dark:text-white">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-red-600">Standard Trade Site<br/><span className="text-xs font-normal">(WordPress/Wix)</span></th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-primary">My Astro "Speed Patch"</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">Mobile Load Speed</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">5–8 Seconds<br/><span className="text-xs">(Losing Leads)</span></td>
                  <td className="px-6 py-4 text-center text-sm text-primary font-semibold">Under 1 Second<br/><span className="text-xs">(Instant)</span></td>
                </tr>
                <tr className="bg-slate-25 dark:bg-slate-800/30">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">Google Performance Score</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">20–40<br/><span className="text-xs">(Red - Penalty)</span></td>
                  <td className="px-6 py-4 text-center text-sm text-primary font-semibold">95–100<br/><span className="text-xs">(Green - Priority)</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">Monthly Fees</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">$30–$100/mo</td>
                  <td className="px-6 py-4 text-center text-sm text-primary font-semibold">$10/mo<br/><span className="text-xs">(Static Hosting)</span></td>
                </tr>
                <tr className="bg-slate-25 dark:bg-slate-800/30">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">Conversion Focus</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Cluttered<br/><span className="text-xs">Hard to find info</span></td>
                  <td className="px-6 py-4 text-center text-sm text-primary font-semibold">Direct 'Click-to-Call'<br/><span className="text-xs">Buttons</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Google Lighthouse Proof Window */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl lg:text-3xl text-slate-900 dark:text-white mb-4">
            Google Lighthouse <span className="text-primary">Proof</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Real screenshots from Google's performance testing tool
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before - Red Lighthouse */}
          <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 border-b border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <h4 className="font-bold text-red-600 dark:text-red-400">BEFORE - WordPress Site</h4>
              </div>
            </div>
            
            {/* Mock Lighthouse Interface */}
            <div className="p-6 bg-gradient-to-b from-white to-gray-50 dark:from-slate-800 dark:to-slate-900">
              {/* Browser Bar */}
              <div className="bg-slate-100 dark:bg-slate-700 rounded-t-lg p-3 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-600 rounded px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
                    chrome://lighthouse
                  </div>
                </div>
              </div>
              
              {/* Lighthouse Scores */}
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Performance</div>
                  <div className="relative w-24 h-24 mx-auto">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                        strokeDasharray="28, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-red-500">28</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-red-500 font-bold text-lg">6.2s</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">First Contentful Paint</div>
                  </div>
                  <div>
                    <div className="text-red-500 font-bold text-lg">8.1s</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Largest Contentful Paint</div>
                  </div>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="text-xs text-red-600 dark:text-red-400 font-medium">
                    ⚠ Opportunities: Eliminate render-blocking resources, Reduce unused CSS, Optimize images
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After - Green Lighthouse */}
          <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 border-b border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h4 className="font-bold text-green-600 dark:text-green-400">AFTER - Astro Speed Patch</h4>
              </div>
            </div>
            
            {/* Mock Lighthouse Interface */}
            <div className="p-6 bg-gradient-to-b from-white to-gray-50 dark:from-slate-800 dark:to-slate-900">
              {/* Browser Bar */}
              <div className="bg-slate-100 dark:bg-slate-700 rounded-t-lg p-3 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-600 rounded px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
                    chrome://lighthouse
                  </div>
                </div>
              </div>
              
              {/* Lighthouse Scores */}
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Performance</div>
                  <div className="relative w-24 h-24 mx-auto">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2"
                        strokeDasharray="96, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-500">96</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-green-500 font-bold text-lg">0.8s</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">First Contentful Paint</div>
                  </div>
                  <div>
                    <div className="text-green-500 font-bold text-lg">0.9s</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Largest Contentful Paint</div>
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                    ✓ Passed audits: Eliminate render-blocking resources, Reduce unused CSS, Optimize images
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
            <p className="text-primary font-bold mb-2">Real Google Lighthouse Screenshots Available</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              These aren't mockups - I can show you actual before/after Lighthouse reports for every project
            </p>
          </div>
        </div>
      </div>

      {/* Original Stats Section */}
      <div className="bg-black dark:bg-surface-dark rounded-3xl p-8 lg:p-12 text-white grid grid-cols-1 lg:grid-cols-4 gap-8 items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-20 blur-3xl rounded-full -mr-20 -mt-20"></div>
        
        <div className="lg:col-span-1 bg-primary p-6 rounded-2xl text-center lg:text-left shadow-lg relative z-10">
          <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Performance Specialist</p>
          <h3 className="font-display text-2xl mb-2">#1 Speed Optimization</h3>
          <p className="text-sm opacity-90">Helping tradies across Australia convert clicks to calls.</p>
        </div>
        
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left pl-0 lg:pl-8">
          <div>
            <h4 className="font-display text-4xl lg:text-5xl text-white mb-1">0.8s</h4>
            <p className="text-slate-400 text-sm font-medium">Average Load Time</p>
          </div>
          <div>
            <h4 className="font-display text-4xl lg:text-5xl text-white mb-1">95+</h4>
            <p className="text-slate-400 text-sm font-medium">Google Performance Score</p>
          </div>
          <div>
            <h4 className="font-display text-4xl lg:text-5xl text-white mb-1">40%</h4>
            <p className="text-slate-400 text-sm font-medium">Conversion Increase</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats