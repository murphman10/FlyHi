import React from 'react'
import { BrowserRouter as Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Help from './Pages/Help'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/help" element={<Help />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter