import React from 'react';

import './App.css';
import Header from './components/Header.jsx/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Project';
import Education from './components/Education/Education';
import Contact from './components/Contact./Contact';
import ContactSidebar from './components/Contactsidebar/Contactsidebar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* Background Elements */}
      <div className="bg-grid"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* Header */}
      <Header />

      {/* Contact Sidebar */}
      <ContactSidebar />

      {/* Main Content */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;