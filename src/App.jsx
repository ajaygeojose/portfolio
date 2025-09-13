import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Skillset from './components/skillset/Skillset'
import Navbar from './components/navbar/Navbar'
import Sidepanel from './components/sidepanel/sidepanel'
import ContentPanel from './components/contentPanel/contentPanel'

function App() {
  const navs=["Who a'm I","Career Objectives","Projects","Social Media"]
  return (
    <div className="app">
      <div className='header'>
         <Header/>
      </div>
      <div className='midLayer'>
        <Sidepanel/>
        <ContentPanel/>
      </div>
      
      {/* <Navbar navs={navs}/> */}
      {/* <Skillset skills={skills}/> */}
      <Footer/>
    </div>
  )
}

export default App
