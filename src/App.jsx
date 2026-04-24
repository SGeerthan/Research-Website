import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Home from './pages/Home';
import ResearchDomain from './pages/ResearchDomain';
import Progress from './pages/Progress';
import Documents from './pages/Documents';
import Team from './pages/Team';

function App() {
  return (
    <div className="bg-custom min-h-screen text-text-main">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="research-domain">
          <ResearchDomain />
        </section>
        <section id="progress">
          <Progress />
        </section>
        <section id="documents">
          <Documents />
        </section>
        <section id="team">
          <Team />
        </section>
          <section id="contact-us">
             <ContactUs />
          </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
