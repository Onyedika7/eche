import { motion } from "motion/react";
import { Briefcase, Boxes, ClipboardList, TrendingDown, Headphones, Zap } from "lucide-react";
import { useState } from "react";

export default function Wholesale() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 pt-20">
      {/* Hero */}
      <section className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <span className="bg-white/20 text-white px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 inline-block">B2B & Partners</span>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter mb-6">
            Bulk <br /> Electrical Procurement.
          </h1>
          <p className="text-white/80 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Scalable supply chains for contractors, developers, and manufacturing plants across Nigeria.
          </p>
        </div>
      </section>

      {/* Wholesale Benefits */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Volume Discounts", icon: <TrendingDown />, desc: "Tiered pricing models for high-volume orders." },
            { title: "Project Manager", icon: <Briefcase />, desc: "Dedicated support for your technical specifications." },
            { title: "Direct Logistics", icon: <Boxes />, desc: "Scheduled delivery directly to your project site." },
            { title: "Custom Sourcing", icon: <Zap />, desc: "Need something rare? We'll source it globally." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col gap-4 shadow-xl shadow-slate-200/20">
              <div className="text-brand-blue">{item.icon}</div>
              <h3 className="font-display font-black uppercase text-sm tracking-widest text-slate-900">{item.title}</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-blue font-black tracking-widest text-xs uppercase block mb-4">Request Bulk Quote</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-none">
              Get Custom <br /> <span className="text-brand-orange">Wholesale</span> Pricing.
            </h2>
            <div className="space-y-8 mt-12">
              <div className="flex gap-6">
                <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center text-brand-blue border border-slate-100">
                  <ClipboardList size={24} />
                </div>
                <div>
                   <h4 className="font-bold uppercase tracking-tight text-slate-900">Professional Invoicing</h4>
                   <p className="text-slate-500 text-sm font-light leading-relaxed">Tax-compliant invoicing for corporate project accounting.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center text-brand-orange border border-slate-100">
                  <Headphones size={24} />
                </div>
                <div>
                   <h4 className="font-bold uppercase tracking-tight text-slate-900">Priority Support</h4>
                   <p className="text-slate-500 text-sm font-light leading-relaxed">24h turnaround for complex bill-of-quantities (BOQ) evaluations.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-blue/5 rounded-[40px] blur-2xl" />
            <div className="relative bg-white border border-slate-100 p-8 md:p-12 rounded-[40px] shadow-2xl shadow-slate-200/50">
              {submitted ? (
                <div className="text-center py-20">
                   <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Zap size={40} fill="currentColor" />
                   </div>
                   <h3 className="text-3xl font-black text-slate-900 mb-4">Inquiry Sent!</h3>
                   <p className="text-slate-500 font-light">An account manager will contact you within 2 business hours with your custom pricing.</p>
                   <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-brand-blue font-bold uppercase tracking-widest text-xs"
                   >
                     Submit Another Request
                   </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                      <input required type="text" className="bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl focus:outline-none focus:border-brand-blue transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Company Name</label>
                      <input required type="text" className="bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl focus:outline-none focus:border-brand-blue transition-colors" placeholder="BuildTech Ltd" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                    <input required type="email" className="bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl focus:outline-none focus:border-brand-blue transition-colors" placeholder="procurement@company.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Product Category</label>
                    <select className="bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl focus:outline-none focus:border-brand-blue transition-colors">
                      <option>Circuit Breakers & Protection</option>
                      <option>Cables & High Voltage Wiring</option>
                      <option>Industrial Switches & Sockets</option>
                      <option>Solar & Renewable Components</option>
                      <option>General Electrical Materials</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Quantity Needed</label>
                    <textarea required className="bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl focus:outline-none focus:border-brand-blue transition-colors h-32" placeholder="List your required items and quantities..."></textarea>
                  </div>
                  <button type="submit" className="bg-brand-navy text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-brand-blue transition-all shadow-xl shadow-blue-500/10 mt-2">
                    Get Custom Quote Now
                  </button>
                  <p className="text-[9px] text-slate-400 text-center uppercase tracking-widest">Typical response time: &lt; 2 hours During business days</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
