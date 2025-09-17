import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Skillset from './components/skillset/Skillset'
import Navbar from './components/navbar/Navbar'
import Sidepanel from './components/sidepanel/sidepanel'
import ContentPanel from './components/contentPanel/contentPanel'
import { Button, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function App() {
  const navs=["Who a'm I","Career Objectives","Projects","Social Media"]
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile,seIsMobile] = useState(false);
  const toggleDrawer = () => () => {
    setOpen((prev) => !prev);
  };
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
    if (width <= 768) {
      seIsMobile(true);
    } else {
      seIsMobile(false);
    }
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
 
  const Ham=()=>{
    return(<Button onClick={toggleDrawer(true)}><MenuIcon/></Button>)
  }
  const Close=()=>{
    return(<Button onClick={toggleDrawer(false)}><CloseOutlinedIcon/></Button>)
  }
  return (
    <div className="app">
      <div className='header'>
         <Header/>
      </div>
      {isMobile && <Ham/>}
      <div className='midLayer'>
        {!isMobile && <Sidepanel/> }
        
      <Drawer open={open} onClose={toggleDrawer(false)}>
       <Close/>
        <Sidepanel isMobile={isMobile}/>
      </Drawer>

        {/* <Sidepanel/> */}
        <ContentPanel/>
      </div>
      
      {/* <Navbar navs={navs}/> */}
      {/* <Skillset skills={skills}/> */}
      <Footer/>
    </div>
  )
}

export default App
