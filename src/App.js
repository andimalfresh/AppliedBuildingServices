import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App} >
        <Navbar />
        <Content className={styles.Content} />
        <Footer className={styles.Footer} />
    </div>
  );
}

export default App;
