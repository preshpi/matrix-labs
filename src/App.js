import './App.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import About2 from './components/About2';
import Services from './components/Services';
import Services2 from './components/Services2';
import Projects from './components/Projects';
//import Projects2 from './components/Projects2';
//import Team from './components/Team';
//import Testimony from './components/Testimony';
// import Faq from './components/Faq';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
}, []);

  return (
    <div>
     <Navbar/>
     <Hero/>
      <About/>
     <About2/>
    <Services/>
    <Services2/>
    <Projects/>
   {/*   <Team/>
  <Projects2/>
      
     <Testimony/> */}
      {/*<Faq/>*/}
      <Footer/>
     <Contact/> 
    </div>
  );
}

export default App;
