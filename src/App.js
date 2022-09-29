import './App.css';
import { useEffect, useState } from 'react';
import RingLoader from "react-spinners/RingLoader";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import About2 from './components/About2';
import Services from './components/Services';
import Services2 from './components/Services2';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  const  [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
}, []);

  return (
    <div>
      {
        loading ?

      <div className="loader">
        <RingLoader
        color={"#FF1700"} 
        loading={loading} 
        size={100} />
       </div>

        :
      
     <>
     <Navbar />
     <Hero />
     <About />
     <About2 />
     <Services />
     <Services2 />
     <Projects />
     <Footer />
     </> 

      }
    </div>
  );
}

export default App;
