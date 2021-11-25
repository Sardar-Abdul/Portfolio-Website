import Topbar from './components/Topbar/Topbar'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Work from './components/Work/Work'
import Contacts from './components/Contact/Contact'
import Menu from './components/Menu/Menu'
import './app.scss'
import {useState} from 'react'

function App() {
  const [menuOpen, setmenuOpen] = useState(false)
  const toggleNavbar = () => setmenuOpen(menuOpen => !menuOpen)
  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setmenuOpen = {setmenuOpen} toggleNavbar = {toggleNavbar}/>
      <Menu menuOpen = {menuOpen} setmenuOpen = {setmenuOpen} toggleNavbar = {toggleNavbar}/>
      <div className = "sections">
        <Intro />
        <Work />
        <Portfolio />
        <Contacts />
      </div>
    </div>
    
  );
}

export default App;
