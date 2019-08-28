import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import './styleSheet.css'


function App() {
  return (
    <div className="App" >
        <Navbar />
        <Content />
        <Footer />
    </div>
  )
}

export default App
