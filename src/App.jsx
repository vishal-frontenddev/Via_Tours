import React from 'react'
import Nav from './components/Nav'
import Destination from './Destination';
import Activities from './Activities';
import USD from './USD';
import SignUp from './SignUp';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    
    <Nav />
    
    <Routes>

     <Route path="/" element={<Destination />} />
     <Route path="Activities" element={<Activities />} />
     <Route path="USD" element={<USD />} />
     <Route path="SignUp" element={<SignUp />} />

    </Routes>

    </>
  )
}

export default App