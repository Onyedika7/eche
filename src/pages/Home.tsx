import { motion } from "motion/react";
import Hero from "../components/home/Hero";
import { Zap, Cable, Lightbulb, Wrench, Cpu, ShieldCheck, Factory, Gauge } from "lucide-react";

const categories = [
  { name: "Circuit Breakers", icon: <Zap size={32} />, description: "Complete protection for your electrical systems.", count: "120+ Items" },
  { name: "Cables & Wires", icon: <Cable size={32} />, description: "High-conductivity premium copper and aluminum wiring.", count: "450+ Items" },
  { name: "Lighting Solutions", icon: <Lightbulb size={32} />, description: "Industrial and residential LED lighting accessories.", count: "300+ Items" },
  { name: "Industrial Components", icon: <Cpu size={32} />, description: "Heavy-duty contactors, relays, and controllers.", count: "200+ Items" },
  { name: "Tools & Equipment", icon: <Wrench size={32} />, description: "Professional grade electrical testing and hand tools.", count: "150+ Items" },
  { name: "Solar Components", icon: <Factory size={32} />, description: "Premium panels, inverters and charge controllers.", count: "80+ Items" },
];

export default function Home() {
  return (
    <div className="bg-slate-50">
      <Hero />
      
      {/* Product Categories Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-brand-blue font-black tracking-widest text-xs uppercase">High Quality Parts</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-none">
              Explore Our <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Categories</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 font-light leading-relaxed">
            From residential wiring to industrial automation, we supply genuine electrical components from world-class manufacturers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-slate-100 p-8 rounded-3xl hover:border-brand-blue transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-slate-50 rounded-full group-hover:bg-brand-blue/5 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="text-brand-blue mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-black mb-3 group-hover:text-brand-blue transition-colors">{cat.name}</h3>
                <p className="text-slate-500 text-sm font-light mb-6 leading-relaxed">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{cat.count}</span>
                  <button className="text-brand-blue text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    View Catalog →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-brand-navy py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-brand-orange font-black tracking-widest text-xs uppercase">The ECHE Advantage</span>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-none">
                  Reliability Is <br /> Our <span className="text-brand-blue underline decoration-brand-orange underline-offset-8">Core</span> Supply.
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-blue border border-white/10">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="text-white font-bold tracking-wide">100% Genuine</h4>
                  <p className="text-slate-500 text-sm font-light">We only source directly from certified global manufacturers and verified suppliers.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-orange border border-white/10">
                    <Gauge size={24} />
                  </div>
                  <h4 className="text-white font-bold tracking-wide">Technical Support</h4>
                  <p className="text-slate-500 text-sm font-light">Our expert engineers provide free consultation for your project material needs.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center gap-6">
                <div className="bg-brand-blue p-4 rounded-2xl text-white">
                  <Factory size={40} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight mb-1">Wholesale Pricing Available</p>
                  <p className="text-slate-400 text-sm font-light">Saving contractors up to 15% on bulk procurements.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-2xl p-0.5 border border-white/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&auto=format&fit=crop" className="rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="bg-white/5 rounded-2xl p-0.5 border border-white/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1558444479-c8f010523282?q=80&w=800&auto=format&fit=crop" className="rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                   <div className="bg-white/5 rounded-2xl p-0.5 border border-white/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop" className="rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="bg-white/5 rounded-2xl p-0.5 border border-white/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" className="rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            Ready to <span className="text-brand-blue">Power</span> Your Next Large Project?
          </h2>
          <p className="text-xl text-slate-500 font-light mb-12">
            Get personalized bulk pricing and dedicated supply chain support for your construction or industrial projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-brand-blue text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-blue-500/20 w-full sm:w-auto">
              Request Wholesale Quote
            </button>
            <button className="bg-slate-100 text-slate-900 px-10 py-5 rounded-full font-bold text-lg w-full sm:w-auto hover:bg-slate-200 transition-colors">
              Speak With Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
