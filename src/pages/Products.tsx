import { useState } from "react";
import { products } from "../data/products";
import { Search, Filter, SlidersHorizontal, ShoppingCart, Info, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         p.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 pt-20">
      {/* Search & Filter Header */}
      <section className="bg-white border-b border-slate-100 py-12 px-4 md:px-6 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-1 w-full lg:w-auto">
            <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">Product Catalog</h1>
            <p className="text-slate-400 text-xs font-black uppercase tracking-widest">{filteredProducts.length} Genuine Parts Found</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:max-w-2xl">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by name, brand, or SKU..."
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-brand-blue transition-colors text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
               <button className="bg-slate-900 text-white p-4 rounded-2xl shrink-0">
                 <SlidersHorizontal size={18} />
               </button>
               {categories.map(cat => (
                 <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                    selectedCategory === cat 
                      ? "bg-brand-blue text-white shadow-lg shadow-blue-500/20" 
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                  }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 md:px-6 min-h-[60vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:border-brand-blue transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-50">
                   <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 border border-slate-200">
                     {p.brand}
                   </div>
                   <div className="absolute bottom-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                      <button className="bg-slate-900 text-white p-3 rounded-xl shadow-xl">
                        <ShoppingCart size={18} />
                      </button>
                   </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-brand-blue text-[10px] font-black uppercase tracking-widest">{p.category}</span>
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">SKU: {p.sku.split('-')[2]}</span>
                  </div>
                  <h3 className="text-md font-black text-slate-900 uppercase tracking-tighter mb-2 group-hover:text-brand-blue transition-colors line-clamp-1">
                    {p.name}
                  </h3>
                  <p className="text-slate-500 text-xs font-light line-clamp-2 mb-6 leading-relaxed">
                    {p.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex flex-col leading-none">
                       <span className="text-slate-400 text-[9px] uppercase font-black tracking-widest mb-1">List Price</span>
                       <span className="text-lg font-black text-slate-900">₦{p.price.toLocaleString()}</span>
                    </div>
                    <button className="flex items-center gap-2 text-brand-orange hover:text-brand-blue transition-colors text-[10px] font-black uppercase tracking-widest">
                       Details <Info size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-center">
             <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 mb-6">
                <Search size={40} />
             </div>
             <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">No Products Found</h3>
             <p className="text-slate-500 font-light mt-2 max-w-sm">We couldn't find any parts matching your search criteria. Try using different keywords or categories.</p>
             <button 
              onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
              className="mt-8 bg-brand-blue text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest"
             >
               Clear All Filters
             </button>
          </div>
        )}
      </section>

      {/* Instant Quote CTA */}
      <section className="py-12 bg-brand-navy border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-brand-blue/20 rounded-2xl flex items-center justify-center text-brand-blue">
                  <Zap size={32} fill="currentColor" />
               </div>
               <div>
                  <h4 className="text-white font-black uppercase tracking-tight text-xl">Need Bulk Pricing?</h4>
                  <p className="text-white/40 text-sm font-light">Custom BOM evaluation for large construction projects.</p>
               </div>
            </div>
            <button className="bg-brand-blue text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all">
              Request Project Quote
            </button>
         </div>
      </section>
    </div>
  );
}
