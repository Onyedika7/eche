import { motion } from "motion/react";
import { ShieldCheck, Truck, Users, Award, Target, Eye } from "lucide-react";

const stats = [
  { label: "Founded", value: "2010" },
  { label: "Products", value: "5,000+" },
  { label: "Projects Supplied", value: "12,000+" },
  { label: "Partners", value: "85+" },
];

export default function About() {
  return (
    <div className="bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-brand-navy py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-brand-orange font-black tracking-widest text-xs uppercase mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
              Engineering <span className="text-brand-blue">Excellence</span> In Every Circuit.
            </h1>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
              From a small warehouse to Nigeria's most trusted name in electrical material procurement. We bridge the gap between world-class manufacturing and local industrial needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
             {stats.map((stat) => (
               <div key={stat.label} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                 <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                 <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{stat.label}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[40px] border border-slate-100 flex flex-col gap-6 shadow-xl shadow-slate-200/50">
            <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Our Mission</h2>
            <p className="text-slate-500 font-light leading-relaxed text-lg">
              To provide contractors, engineers, and businesses across Nigeria with reliable, high-performance electrical components that ensure safety, efficiency, and project longevity.
            </p>
          </div>
          <div className="bg-brand-blue p-12 rounded-[40px] flex flex-col gap-6 text-white shadow-xl shadow-blue-500/20">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">Our Vision</h2>
            <p className="text-white/80 font-light leading-relaxed text-lg">
              To become the first-choice digital ecosystem for electrical materials in West Africa, known for technical expertise, genuine sourcing, and innovative logistics solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Values Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-brand-blue font-black tracking-widest text-xs uppercase block mb-2">Our Values</span>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">What Drives Us</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Integrity", desc: "No grey markets. We only supply genuine, certified original parts.", icon: <ShieldCheck size={28} /> },
              { title: "Efficiency", desc: "Optimized logistics to ensure your projects never stall due to material shortage.", icon: <Truck size={28} /> },
              { title: "Expertise", desc: "Technical consultation for complex project requirements.", icon: <Award size={28} /> },
            ].map((v, i) => (
              <div key={v.title} className="flex flex-col gap-6 relative group">
                <div className="absolute -left-4 -top-4 w-12 h-12 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-500 opacity-20" />
                <div className="text-brand-blue">{v.icon}</div>
                <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900">{v.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Team/Warehouse Imagery */}
       <section className="py-24 max-w-7xl mx-auto px-4 md:px-6">
         <div className="rounded-[48px] overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop" 
              alt="Industrial Warehouse" 
              className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row items-end justify-between gap-6">
               <div className="max-w-xl">
                 <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-4 uppercase tracking-tighter">Strategic Partnerships.</h2>
                 <p className="text-white/60 font-light mb-4">We collaborate with global leaders like Schneider, ABB, Nexans, and Legrand to bring you the best.</p>
               </div>
               <button className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest whitespace-nowrap">View Certificates</button>
            </div>
         </div>
       </section>
    </div>
  );
}
