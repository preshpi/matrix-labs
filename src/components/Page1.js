import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import About2 from './About2';
import Services from './Services';
import Services2 from './Services2';
import Projects from './Projects';
import Footer from './Footer';
function Page1() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <About2/>
        <Services/>
        <Services2/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default Page1