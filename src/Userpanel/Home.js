import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Popular from './Popular'
import Bestdeals from './Bestdeals'
import Allproducts from './Allproducts'
import Newarivals from './Newarivals'
import Featured from './Featured'
import Nopage from './Nopage'


function Home() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar/>}/>
            <Route path='/Popular' element={<Popular/>}/>
            <Route path='/Allproducts' element={<Allproducts/>}/>
            <Route path='/Newarivals' element={<Newarivals/>}/>
            <Route path='/Bestdeals' element={<Bestdeals/>}/>
            <Route path='/Featured' element={<Featured/>}/>
            <Route path='*' element={<Nopage/>}/>
          </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default Home