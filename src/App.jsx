import React from 'react';
import Home  from './Home/Home';
import { About } from './About/About';
import { Nav } from './Nav/Nav';
import { Assets } from './assets/Assets';
import { Logoing } from './Logoing/logoing';
import { Login } from './Login/Login';
import { Testimonials } from './Testimonials/Testimonials';


const App = () => {
  return (
   
  
     <>
    {/* <Login/> */}
     <Assets/>
       <Nav/>
    <About/>
     <Home/>
     <Logoing/>
      <Testimonials/>
  
    
  </>
  );
};

export default App;