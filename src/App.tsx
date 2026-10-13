import {BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Hero from "./components/Hero"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/navbar" element={<NavBar/>} />
      <Route path="/hero" element={<Hero/>} />
    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
