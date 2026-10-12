import {BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/navbar" element={<NavBar/>} />
    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
