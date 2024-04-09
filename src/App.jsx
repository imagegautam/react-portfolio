import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Recentwork } from './components/Recentwork'
import { About } from './components/About'
import { Contact } from './components/Contact'


function App() {
 
  return (
    <>
    {/* <!-- dark mode toggler --> */}
    <label for="darkMode" className="dark-mode-toggler">
    <i className="fa-solid fa-circle-half-stroke" ></i></label>
    <input type="checkbox" id="darkMode" />

    <div className="wrapper">
        {/* <!-- for dark mode toggler --> */}
       
        <Navbar />
        {/* <!-- navbar --> */}

       

        {/* <!-- hero section  --> */}
        <Hero />

        {/* <!-- banner  --> */}

       <Banner />

        {/* <!-- skills  --> */}
        <Skills />

        {/* <!-- my recent work  --> */}

        <Recentwork />

        {/* <!-- about me  --> */}
        <About />

        {/* <!-- contact  --> */}

        <Contact />


        {/* <!-- footer  --> */}

        

        <a href="#header" className="flex group"><i className="fa-solid fa-angle-up"></i></a>
        
    </div>
    </>
  )
}

export default App
