import React, { useState } from 'react'

const MobileApp: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    trade: '',
    specificProblem: '',
    phone: '',
    email: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="quote" className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20">
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-surface-dark dark:to-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary-50 dark:bg-primary-900/20 mb-6">
              <span className="text-xs font-bold text-primary tracking-wider uppercase">
                Free Speed Audit
              </span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
              Get Your <span className="text-primary">Free Quote</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
              Tell me about your trade business and the specific problems you're facing. I'll analyze your current site and show you exactly how much faster it could be.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-icons text-primary text-sm">speed</span>
                </div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">60-second speed analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-icons text-primary text-sm">analytics</span>
                </div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Lighthouse performance report</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-icons text-primary text-sm">trending_up</span>
                </div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Revenue impact projection</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-slate-700 dark:text-white"
                  placeholder="e.g. Mike Johnson"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="trade" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Your Trade *
                </label>
                <select
                  id="trade"
                  name="trade"
                  value={formData.trade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-slate-700 dark:text-white"
                  required
                >
                  <option value="">Select your trade</option>
                  <option value="plumber">Plumber</option>
                  <option value="electrician">Electrician</option>
                  <option value="hvac">HVAC Technician</option>
                  <option value="carpenter">Carpenter</option>
                  <option value="painter">Painter</option>
                  <option value="roofer">Roofer</option>
                  <option value="other">Other Trade</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="specificProblem" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Specific Problem with Your Website *
                </label>
                <textarea
                  id="specificProblem"
                  name="specificProblem"
                  value={formData.specificProblem}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-slate-700 dark:text-white"
                  placeholder="e.g. Site loads too slow on mobile, losing leads to competitors, Google Ads not converting..."
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-slate-700 dark:text-white"
                    placeholder="0412 345 678"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-slate-700 dark:text-white"
                    placeholder="mike@example.com"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Get My Free Speed Audit
                <span className="material-icons">rocket_launch</span>
              </button>
              
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                No spam. I'll send you a detailed performance report within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileApp