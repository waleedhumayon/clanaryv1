import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => {
    setClick(!click);
  }
  const closeMenu = () => {setClick(false)}
  
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton()
  },[])

  window.addEventListener('resize', showButton);
  return(
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMenu}>
          Clanary <i className='fab fa-typo3'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li classname='nav-item-home'>
            <Link to='/' className='nav-links' onClick={closeMenu}>
              Home
            </Link> 
          </li>
          <li classname='nav-item-what'>
            <Link to='/what-we-do' className='nav-links' onClick={closeMenu}>
              What we do
            </Link> 
          </li>
          <li classname='nav-item-how'>
            <Link to='/how-to-use' className='nav-links' onClick={closeMenu}>
              How to use
            </Link> 
          </li>
          <li classname='nav-item-signup'>
            <Link to='/signup' className='nav-links-mobile' onClick={closeMenu}>
              Sign Up
            </Link> 
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
      </div>
    </nav>
    </>
  )
}

export default Navbar;