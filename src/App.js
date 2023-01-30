import React from 'react'
// React Router Import
import { BrowserRouter , Routes , Route } from 'react-router-dom'

// Components and Pages Imports
import Home from './Pages/Home'
import About from './Pages/About'
import Register from "./Pages/Register";
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full h-full ">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App