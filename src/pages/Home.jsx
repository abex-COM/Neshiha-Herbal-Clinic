import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Contact />
      <Blog />
    </div>
  );
}
