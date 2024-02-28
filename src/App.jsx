// eslint-disable-next-line no-unused-vars
import React from 'react'
import AppRouter from './Components/AppRouter'
import Navbar from './Components/Navbar/Navbar'
import background from '../src/assets/container-background.avif'

const App = () => {
  return (
    <div className='container' style={{ backgroundImage: `url(${background})`}}>
      <AppRouter/>
      <Navbar/>
    </div>
  )
}

export default App
