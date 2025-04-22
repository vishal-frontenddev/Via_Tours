import React from 'react'
import Nav from './components/Nav'
import Destination from './components/Destination'
import Activities from './components/Activities'
import Usd from './components/Usd'
import SignUp from './components/SignUp'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>

     
        <Nav />
     


     <Routes>

      <Route path='/' element={<Destination />} />
      <Route path='/activities' element={<Activities />} />
      <Route path='/usd' element={<Usd />} />
      <Route path='/signup' element={<SignUp />} />

     </Routes>
     

    </>
  )
}

export default App
