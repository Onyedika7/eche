import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, Phone, ShoppingBag, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Wholesale", href: "/wholesale" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-slate-200 py-3" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-brand-blue p-2 rounded-lg text-white shadow-lg shadow-blue-500/20">
            <Zap size={24} fill="currentColor" />
          </div>
          <div className="flex flex-col leading-none">
            <span className={cn("text-xl font-display font-black tracking-tighter uppercase", scrolled ? "text-slate-900" : "text-white")}>
              ECHE
            </span>
            <span className={cn("text-[10px] font-bold tracking-[0.2em] uppercase opacity-80", scrolled ? "text-brand-blue" : "text-brand-orange")}>
              Electrical Parts
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-semibold tracking-wide transition-colors hover:text-brand-blue",
                location.pathname === link.href 
                  ? "text-brand-blue" 
                  : (scrolled ? "text-slate-600" : "text-white/80")
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className={cn("p-2 transition-colors", scrolled ? "text-slate-600" : "text-white")}>
            <Search size={20} />
          </button>
          <Link 
            to="/wholesale"
            className="bg-brand-blue hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25 flex items-center gap-2"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden p-2", scrolled ? "text-slate-900" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-lg font-bold py-2 border-b border-slate-100 last:border-0",
                location.pathname === link.href ? "text-brand-blue" : "text-slate-600"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/wholesale"
            className="bg-brand-blue text-white w-full py-4 text-center rounded-xl font-bold mt-4"
            onClick={() => setIsOpen(false)}
          >
            Get Expert Quote
          </Link>
        </motion.div>
      )}
    </header>
  );
}
