import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUpFrom from "./auth/forms/SignUpFrom"
import SigninFrom from "./auth/forms/SigninFrom"
import Home from "./pages/Home"
import About from "./pages/About"
import NewsArtical from "./pages/NewsArtical"
import Dashbord from "./pages/Dashbord"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SigninFrom />} />
        <Route path="/sign-up" element={<SignUpFrom />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Dashboard" element={<Dashbord />} />
        <Route path="/news-artical" element={<NewsArtical />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App