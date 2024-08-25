import React from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import PopularAreas from './sections/PopularAreas'
import Properties from './sections/Properties'
import Services from './sections/Services'
import Footer from './components/Footer'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
const App = () => {
  return (
    <>
    
      <Header/>
      <Hero/>
      <About/>
      <PopularAreas/>
      <Properties/>
      <Services/>
      <Clients/>
      <Contact/>
      <Footer/>
   
    </>
  )
}

export default App