import { Zap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12 px-4 md:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Info */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-brand-blue p-2 rounded-lg text-white">
              <Zap size={20} fill="currentColor" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-display font-black tracking-tighter uppercase">ECHE</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-orange">Electrical Parts</span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed font-light">
            Nigeria's leading supplier of premium industrial and residential electrical components. We power reliability from the ground up.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors border border-white/10">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors border border-white/10">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors border border-white/10">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors border border-white/10">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-black uppercase tracking-widest text-white border-l-2 border-brand-orange pl-3">Quick Navigation</h4>
          <nav className="flex flex-col gap-3">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link>
            <Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Product Catalog</Link>
            <Link to="/wholesale" className="text-slate-400 hover:text-white transition-colors text-sm">Wholesale / Bulk Orders</Link>
            <Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Company</Link>
            <Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact Support</Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-black uppercase tracking-widest text-white border-l-2 border-brand-blue pl-3">Contact Us</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-blue shrink-0 mt-1" />
              <p className="text-slate-400 text-sm font-light">123 Industrial Way, <br />Victoria Island, Lagos, Nigeria</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-brand-blue shrink-0" />
              <p className="text-slate-400 text-sm font-light">+234 (0) 800 ECHE PARTS</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-brand-blue shrink-0" />
              <p className="text-slate-400 text-sm font-light">sales@echeparts.com</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-black uppercase tracking-widest text-white border-l-2 border-brand-orange pl-3">Stay Updated</h4>
          <p className="text-slate-400 text-sm font-light">Receive technical guides and inventory alerts.</p>
          <div className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
            />
            <button className="bg-brand-blue hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-500/10">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest">
          © {new Date().getFullYear()} ECHE Electrical Parts. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-slate-500 hover:text-white text-[10px] uppercase font-black tracking-widest transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-slate-500 hover:text-white text-[10px] uppercase font-black tracking-widest transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
