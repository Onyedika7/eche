import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Zap, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-navy overflow-hidden">
      {/* Dynamic Background Animation (Electricity Flow) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15),transparent_70%)]" />
        <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M 0 50 Q 25 25 50 50 T 100 50"
            stroke="url(#grad1)"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1, x: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Animated Circuits Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 mt-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-brand-orange text-xs font-black tracking-widest uppercase mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            Premium Electrical Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">Reliable</span> Electrical Solutions
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-light">
            Premium electrical parts, industrial components, cables, and lighting accessories. Trusted by contractors and businesses across Nigeria.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              to="/products"
              className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all hover:translate-x-1"
            >
              Shop Products <ArrowRight size={20} />
            </Link>
            <Link 
              to="/wholesale"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all"
            >
              Request Quote
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-white/10">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-black text-white">5,000+</span>
              <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Products</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-black text-white">24h</span>
              <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Support</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-black text-white">99%</span>
              <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Reliability</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Image / Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-square group">
            <img 
              src="https://images.unsplash.com/photo-1610332885237-49e0885e339c?q=80&w=1200&auto=format&fit=crop" 
              alt="Electrical Components" 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60" />
            
            {/* Overlay Badges */}
            <div className="absolute top-6 left-6 flex flex-col gap-3">
               <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3 text-white"
               >
                 <div className="bg-brand-blue/20 p-2 rounded-lg text-brand-blue">
                   <ShieldCheck size={24} />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-xs font-black uppercase tracking-widest">Quality Guaranteed</span>
                   <span className="text-[10px] opacity-60">Verified Suppliers</span>
                 </div>
               </motion.div>
            </div>

            <div className="absolute bottom-6 right-6">
               <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="bg-brand-blue/90 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3 text-white"
               >
                 <div className="bg-white/20 p-2 rounded-lg">
                   <Truck size={24} />
                 </div>
                 <div className="flex flex-col text-right">
                   <span className="text-xs font-black uppercase tracking-widest">Nationwide Delivery</span>
                   <span className="text-[10px] opacity-80">Fast & Secure</span>
                 </div>
               </motion.div>
            </div>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
