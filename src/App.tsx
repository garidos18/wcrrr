// import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Instructor from './components/Instructor';
import Testimonials from './components/Testimonials';
import Enrollment from './components/Enrollment';

import FAQ from './components/FAQ';
import Footer from './components/Footer';
import TransitionEffect from './components/TransitionEffect';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <TransitionEffect>
        <Hero />
      </TransitionEffect>
      <TransitionEffect>
        <Features />
      </TransitionEffect>
      <TransitionEffect>
        <Courses />
      </TransitionEffect>
      <TransitionEffect>
        <Instructor />
      </TransitionEffect>
      <TransitionEffect>
        <Testimonials />
      </TransitionEffect>
      <TransitionEffect>
        <Enrollment />
      </TransitionEffect>     
      <TransitionEffect>
        <FAQ />
      </TransitionEffect>
      <Footer />
    </div>
  );
}

export default App;