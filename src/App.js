import React from 'react'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Drawer />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
