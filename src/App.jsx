import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Review from './components/Review'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div id='home'>
          <Home/>
        </div>
        <div id='menu'>
          <Menu/>
        </div>
        <div id='about'>
          <About/>
        </div>
        <div id='reviews'>
          <Review/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App
