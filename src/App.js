import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import RingLoader from "react-spinners/RingLoader";
import Page1 from './components/Page1';
import Page2 from './components/Page2';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import About2 from './components/About2';
// import Services from './components/Services';
// import Services2 from './components/Services2';
// import Projects from './components/Projects';
// import Footer from './components/Footer';
// import Dapp from './components/Dapp';
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
     <Routes>
      <Route path='/' element={<Page1/>}/>
      <Route path='/dapp' element={<Page2/>}/>
     </Routes>
     </> 

      }
    </div>
  );
}

export default App;
