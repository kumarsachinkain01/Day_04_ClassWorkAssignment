import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/HEROSECTION/Hero'
import Footer from './Component/Footer/Footer'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    <Footer/>
  </React.StrictMode>,
)
