import { motion } from "motion/react";
import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "Inquiry", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-brand-navy py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-brand-orange font-black tracking-widest text-[10px] uppercase block mb-4">Get In Touch</span>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter mb-6">
            Contact Our <span className="text-brand-blue">Sales</span> Hub.
          </h1>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Have questions about technical specifications, inventory availability, or shipping logistics? Our experts are ready to help.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
             <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 group hover:border-brand-blue transition-colors">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-2">Speak to Sales</h3>
                <p className="text-slate-500 text-sm font-light mb-4">Immediate assistance for pricing and orders.</p>
                <a href="tel:+234800ECHE" className="text-brand-blue font-bold text-lg">+234 (0) 800 ECHE PARTS</a>
             </div>

             <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 group hover:border-brand-orange transition-colors">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-2">Email Inquiry</h3>
                <p className="text-slate-500 text-sm font-light mb-4">Send us your bill of quantities or technical RFQs.</p>
                <a href="mailto:sales@echeparts.com" className="text-brand-blue font-bold text-lg">sales@echeparts.com</a>
             </div>

             <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                      <Clock size={20} />
                   </div>
                   <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Working Hours</h3>
                </div>
                <div className="space-y-3">
                   <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-bold uppercase tracking-widest">Mon - Fri</span>
                      <span className="text-slate-900 font-black">08:00 AM - 06:00 PM</span>
                   </div>
                   <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-bold uppercase tracking-widest">Saturday</span>
                      <span className="text-slate-900 font-black">09:00 AM - 02:00 PM</span>
                   </div>
                   <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-bold uppercase tracking-widest">Sunday</span>
                      <span className="text-brand-orange font-black">CLOSED</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
             <div className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/50">
               {sent ? (
                 <div className="text-center py-20">
                    <motion.div 
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                       <Mail size={40} />
                    </motion.div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4">Message Received</h3>
                    <p className="text-slate-500 font-light">Thank you for contacting ECHE Electrical Parts. A specialist will reply to your inquiry shortly.</p>
                    <button 
                     onClick={() => setSent(false)}
                     className="mt-8 bg-brand-navy text-white px-10 py-4 rounded-2xl font-bold uppercase text-xs tracking-widest"
                    >
                      Send Another Message
                    </button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                          <input 
                            required 
                            type="text" 
                            className="bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl focus:outline-none focus:border-brand-blue" 
                            placeholder="Alex Morgan" 
                            value={formState.name}
                            onChange={e => setFormState({...formState, name: e.target.value})}
                          />
                       </div>
                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                          <input 
                            required 
                            type="email" 
                            className="bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl focus:outline-none focus:border-brand-blue" 
                            placeholder="alex@example.com" 
                            value={formState.email}
                            onChange={e => setFormState({...formState, email: e.target.value})}
                          />
                       </div>
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Inquiry Type</label>
                       <select 
                        className="bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl focus:outline-none focus:border-brand-blue"
                        value={formState.subject}
                        onChange={e => setFormState({...formState, subject: e.target.value})}
                       >
                          <option>General Inquiry</option>
                          <option>Wholesale/Bulk Order</option>
                          <option>Technical Support</option>
                          <option>Account/Billing</option>
                          <option>Partnership</option>
                       </select>
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                       <textarea 
                        required 
                        className="bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl focus:outline-none focus:border-brand-blue h-40 resize-none" 
                        placeholder="How can we help power your project?"
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                       ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-brand-blue text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-brand-navy transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3">
                       Send Message <Send size={20} />
                    </button>
                 </form>
               )}
             </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="h-[500px] w-full bg-slate-200 relative overflow-hidden">
         <div className="absolute inset-0 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-50">
         </div>
         <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply" />
         <div className="relative z-10 flex h-full items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center gap-4 text-center max-w-sm">
               <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white">
                  <MapPin size={24} />
               </div>
               <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900 leading-none">Visit Our Main Warehouse</h3>
               <p className="text-slate-500 text-sm font-light">123 Industrial Way, Victoria Island Business District, Lagos, Nigeria.</p>
               <button className="text-brand-blue font-bold uppercase tracking-widest text-[10px] border-b-2 border-brand-blue pb-1">Get Directions</button>
            </div>
         </div>
      </section>
    </div>
  );
}
