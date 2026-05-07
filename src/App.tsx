/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Wholesale from "./pages/Wholesale";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

// Placeholder components for other pages
function About() { return <div className="pt-32 px-10">About Page Coming Soon</div>; }
function Products() { return <div className="pt-32 px-10">Product Catalog Coming Soon</div>; }
function Wholesale() { return <div className="pt-32 px-10">Wholesale & Bulk Orders Coming Soon</div>; }
function Contact() { return <div className="pt-32 px-10">Contact Support Coming Soon</div>; }

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
