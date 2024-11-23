import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"  // add here so it is available in all components
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/about-page.tsx'
import Services from './pages/services.tsx'
import Contact from './pages/contact.tsx'
import Portfolio from './pages/portfolio.tsx'
import Appointment from './pages/appointments.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/schedule-appointment' element={<Appointment />} />

    </Routes>
  </BrowserRouter>
)
