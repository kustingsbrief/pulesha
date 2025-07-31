import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

// Also export as default for compatibility
export default App;