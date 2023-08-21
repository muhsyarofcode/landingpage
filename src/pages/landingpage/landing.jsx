import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar/navbar';
import Home from '../../components/home/home';
import Projects from '../../components/projects/projects';
import Service from '../../components/service/service';
import Skills from '../../components/skills/skills';
import Galeri from '../../components/galeri/galeri';
import Footer from '../../components/footer/footer';
import { useState,useEffect } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import '../../globalStyle/globalStyle.css'


function Landing() {
  const [loading,setloading] = useState(false)
  
  useEffect(()=>{
    setloading(true);
    setTimeout(()=>{
      setloading(false)
    },5000)
  },[])

 
 
  return (
    <div className="landingpage">
      {
        loading ? 
        <div className='load'>
        <ClimbingBoxLoader
        color="#ece255"
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        </div>  
        :
        <>
        <Navbar/>
        <Home/>
        <Projects/>
        <Skills/>
        <Service/>
        <Galeri/>
        <Footer/>
        </>
      }    
    </div>
  );
}

export default Landing;
