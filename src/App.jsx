// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import background from '../src/assets/container-background.avif'

const App = () => {
  return (
    <div className='container' style={{ backgroundImage: `url(${background})`}}>
      <Navbar/>
    </div>
  )
}

export default App
