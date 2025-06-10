import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "../src/Pages/Home"
import ScrollToTop from './utils/ScrollToTop';
import Project from '../src/Pages/Project'
import Services from './Pages/Services';
import Contact from './Pages/Contact';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
