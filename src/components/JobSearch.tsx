import React from 'react'

const JobSearch: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-blue-500 opacity-5 blur-3xl rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
            Electrical Engineering Student Turned <span className="text-primary">Web Developer</span>
          </h2>
        </div>
        
        {/* Personal Introduction with Image */}
        <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
<div className="relative overflow-hidden">
              <img 
                src="/image.webp" 
                alt="Electrical Engineering Student - Web Performance Specialist"
                className="w-full h-full min-h-[400px] lg:min-h-[500px] object-cover"
                loading="lazy"
              />
              {/* Overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-primary rounded-full opacity-60"></div>
              <div className="absolute bottom-6 left-6 w-6 h-6 bg-blue-500 rounded-full opacity-60"></div>
            </div>
            
            {/* Text Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl text-slate-900 dark:text-white mb-4">
                    Hi, I'm an Electrical Engineering Student
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Currently in my second year at university, I'm passionate about bridging the gap between engineering principles and real-world business solutions.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2nd Year</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">Electrical Engineering</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">90+</div>
                    <div className="text-xs text-green-600 dark:text-green-400 font-medium">Lighthouse Scores</div>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400">
                  I specialize in web performance optimization, combining my electrical engineering background with modern web technologies to help trade businesses turn their slow websites into lead-generating machines.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Web Performance</span>
                  <span className="bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Modern Tech</span>
                  <span className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Student Rates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Story */}
        <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 p-8 border-b border-slate-200 dark:border-slate-600">
            <div className="flex items-center gap-6">
              <div className="bg-primary/20 p-4 rounded-2xl">
                <span className="material-icons text-4xl text-primary">person</span>
              </div>
              <div>
                <h3 className="font-display text-2xl text-slate-900 dark:text-white mb-2">My Journey</h3>
                <p className="text-slate-600 dark:text-slate-400">From classroom theory to real-world impact</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Story */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="material-icons text-primary">school</span>
                    The Student Life
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Currently in my second year studying Electrical Engineering, I've always been fascinated by how technology can solve real business problems. While my classmates focus on theory, I'm out here applying engineering principles to help actual businesses succeed.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="material-icons text-primary">code</span>
                    Building Solutions
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    What started as sharing my coding projects has evolved into creating practical solutions for real business problems. I focus on helping businesses understand how modern web technology can directly impact their bottom line.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="material-icons text-primary">speed</span>
                    The Speed Mission
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    I discovered that most trade businesses are losing customers due to slow websites, yet they're paying thousands for outdated solutions. That's when I decided to bridge the gap between electrical engineering principles and practical web technology needs.
                  </p>
                </div>
              </div>

              {/* Stats & Social Proof */}
              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4">Why Choose a Student?</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-slate-600 dark:text-slate-400">Fresh perspective on modern web technologies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-slate-600 dark:text-slate-400">Affordable rates without compromising quality</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-slate-600 dark:text-slate-400">Up-to-date with latest performance techniques</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-slate-600 dark:text-slate-400">Passionate about helping businesses grow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="font-display text-2xl text-slate-900 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Let's combine fresh academic knowledge with proven optimization techniques to transform your business website.
            </p>
            <a 
              href="#quote"
              className="bg-primary hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-primary/50 transition-all"
            >
              Get Your Free Speed Audit
            </a>
          </div>
          
          <div className="mt-8 bg-slate-100 dark:bg-slate-800/30 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400 italic">
              <span className="font-semibold">Student Advantage:</span> As a current student, I bring the latest academic research and modern web technologies to your business, combined with real-world experience helping businesses succeed online.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobSearch