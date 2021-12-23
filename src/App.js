import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Signup from './pages/signup';
import Home from './pages/home';
import Login from './pages/login';
import Scan from './pages/scan';
import About from './pages/about';



const App = () => {
  return (


    <Router>

      <Navbar>

      </Navbar>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/scan" element={<Scan />} />
        <Route exact path="/About" element={<About />} />


      </Routes>

    </Router>
  );
}


export default App;

