import React from 'react';
import "tailwindcss/tailwind.css "
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Family from './components/Family';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

const App=() =>{
  return (
    <div>
        <Navbar/>
        <Banner/>
        <About/>
        <Gallery/>
        <Blog/>
        <Family/>
        <Footer/>
        <Login/>
        <Signup/>
    </div>
  );
};

export default App