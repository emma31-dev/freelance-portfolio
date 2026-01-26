import React, { useState } from 'react'

const Footer: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-surface-dark rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <h2 className="font-display text-2xl text-slate-900 dark:text-white">{title}</h2>
            <button 
              onClick={onClose}
              className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            >
              <span className="material-icons">close</span>
            </button>
          </div>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <footer className="bg-slate-50 dark:bg-surface-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-xl tracking-wide text-slate-900 dark:text-white uppercase">
                Trade<span className="text-primary font-bold">Flow</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Electrical Engineering student specializing in web performance optimization for trade businesses.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Sydney, Australia</p>
          </div>
          
          <div className="col-span-1">
            <h5 className="font-bold text-slate-900 dark:text-white mb-4">Navigation</h5>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#hero">Home</a></li>
              <li><a className="hover:text-primary transition-colors" href="#performance">Performance</a></li>
              <li><a className="hover:text-primary transition-colors" href="#about">About</a></li>
              <li><a className="hover:text-primary transition-colors" href="#services">Services</a></li>
              <li><a className="hover:text-primary transition-colors" href="#quote">Get Quote</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h5 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h5>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <button 
                  onClick={() => setShowPrivacy(true)}
                  className="hover:text-primary transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setShowTerms(true)}
                  className="hover:text-primary transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h5 className="font-bold text-slate-900 dark:text-white mb-4">Connect</h5>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="https://wa.me/2348166080353" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a className="hover:text-primary transition-colors" href="https://x.com/emmafidel31" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
              <li><a className="hover:text-primary transition-colors" href="#" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a className="hover:text-primary transition-colors" href="#" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl lg:text-6xl text-slate-900 dark:text-white tracking-widest uppercase opacity-10 select-none">
              TRADEFLOW
            </h1>
            <p className="text-xs text-slate-400 mt-2">© 2026 TradeFlow. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} title="Privacy Policy">
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
          <p><strong>Last updated:</strong> January 2026</p>
          
          <h3 className="font-bold text-slate-900 dark:text-white">Information We Collect</h3>
          <p>We collect information you provide directly to us, such as when you fill out our contact form or request a quote. This may include your name, email address, phone number, and business details.</p>
          
          <h3 className="font-bold text-slate-900 dark:text-white">How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Provide and improve our web optimization services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you technical updates and service information</li>
            <li>Analyze website performance and user experience</li>
          </ul>
          
          <h3 className="font-bold text-slate-900 dark:text-white">Information Sharing</h3>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
          
          <h3 className="font-bold text-slate-900 dark:text-white">Data Security</h3>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          
          <h3 className="font-bold text-slate-900 dark:text-white">Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us via WhatsApp or email.</p>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal isOpen={showTerms} onClose={() => setShowTerms(false)} title="Terms of Service">
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
          <p><strong>Last updated:</strong> January 2026</p>
          
          <h3 className="font-bold text-slate-900 dark:text-white">Service Description</h3>
          <p>TradeFlow provides web performance optimization services for trade businesses, including website speed audits, performance improvements, and technical consulting.</p>
          
          <h3 className="font-bold text-slate-900 dark:text-white">Service Terms</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Free audits are provided for evaluation purposes only</li>
            <li>Paid services require written agreement and upfront payment</li>
            <li>Performance improvements are based on industry best practices</li>
            <li>Results may vary depending on existing website infrastructure</li>
          </ul>
          
          <h3 className="font-bold text-slate-900 dark:text-white">Client Responsibilities</h3>
          <p>Clients are responsible for:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Providing accurate website and business information</li>
            <li>Maintaining website backups before optimization work</li>
            <li>Timely communication and feedback during projects</li>
            <li>Payment according to agreed terms</li>
          </ul>
          
          <h3 className="font-bold text-slate-900 dark:text-white">Limitation of Liability</h3>
          <p>Our liability is limited to the amount paid for services. We are not responsible for indirect damages or loss of business revenue.</p>
          
          <h3 className="font-bold text-slate-900 dark:text-white">Contact</h3>
          <p>For questions about these terms, please contact us via WhatsApp or email.</p>
        </div>
      </Modal>
    </>
  )
}

export default Footer