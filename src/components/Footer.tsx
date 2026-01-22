import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-surface-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <p className="text-xs text-slate-500 mb-4">
            Maintain your installation for downstream opportunities that match your skills.
          </p>
          <p className="text-xs text-slate-400">Sydney, Australia</p>
        </div>
        
        <div className="col-span-1">
          <h5 className="font-bold text-slate-900 dark:text-white mb-4">Company</h5>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><a className="hover:text-primary" href="#">About Us</a></li>
            <li><a className="hover:text-primary" href="#">Careers</a></li>
            <li><a className="hover:text-primary" href="#">Contact</a></li>
            <li><a className="hover:text-primary" href="#">Blog</a></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h5 className="font-bold text-slate-900 dark:text-white mb-4">Support</h5>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><a className="hover:text-primary" href="#">Help Center</a></li>
            <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-primary" href="#">Terms of Service</a></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h5 className="font-bold text-slate-900 dark:text-white mb-4">Social</h5>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><a className="hover:text-primary" href="#">Facebook</a></li>
            <li><a className="hover:text-primary" href="#">Instagram</a></li>
            <li><a className="hover:text-primary" href="#">LinkedIn</a></li>
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
  )
}

export default Footer