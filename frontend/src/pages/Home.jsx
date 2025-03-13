import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import About from '../components/About'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <About/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default Home