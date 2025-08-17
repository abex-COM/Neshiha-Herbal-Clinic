import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

/**
 * Main Application Wrapper
 * - Assembles all page sections
 */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-['Lexend','Noto Sans',sans-serif]">
      <Header />
      <main className="flex-1 space-y-12 px-6 md:px-20">
        <Hero />
        <Services />
        <Testimonials />
        <About />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
