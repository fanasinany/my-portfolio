import React, { useEffect } from 'react';
import About from './Components/About';
import Career from './Components/Career';
import Citation from './Components/Citation';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Works from './Components/Works';
import ScrollReveal from 'scrollreveal';

const App = () => {
  useEffect(() => {
    ScrollReveal().reveal('#about', { duration: 1500 })
    ScrollReveal().reveal('#career .title-top', { duration: 1500 })
    ScrollReveal().reveal('#career .timeline-wrapper', { duration: 1500 })
    ScrollReveal().reveal('#career .skills', { duration: 1500 })
    ScrollReveal().reveal('#contact', { duration: 1500 })
    ScrollReveal().reveal('#works', { duration: 1500 })
    ScrollReveal().reveal('#citation', { duration: 1500 })
  }, [])
  return (
    <React.Fragment>
      <Header />
      <main>
        <Home />
        <About />
        <Career />
        <Works />
        <Contact />
        <Citation />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
