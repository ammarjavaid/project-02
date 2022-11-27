import React, { useState } from 'react'
import "./header.scss"
import logo from "../../images/logo.png"
import Bars from "../../images/bars.png"
import { Link } from 'react-scroll'

export default function Header() {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <div className='header'>
        <img src={logo} alt="img" className='logo' />

        {
          menuOpened === false && mobile === true ? (
            <div style={{
                backgroundColor:"var(--appColor)", 
                padding:"0.5rem",
                borderRadius:"5px",
                position: "fixed",
                right: "2rem",
                cursor: "pointer",
                zIndex: "999"
                }} onClick={()=>setMenuOpened(true)}> 
              <img src={Bars} alt='' style={{width:"1.5rem", height:"1rem"}} />
            </div>
          ) : (
            <ul className='header__menu'>
              <li>
                <Link 
                  smooth={true}
                  spy={true}
                  onClick={()=>setMenuOpened(false)}
                  activeClass="active"
                  to='home'> Home </Link>
              </li>
              <li>
                <Link 
                  smooth={true}
                  spy={true}
                  onClick={()=>setMenuOpened(false)}
                  to='programs'> Programs </Link>
              </li>
              <li>
                <Link 
                  smooth={true}
                  spy={true}
                  onClick={()=>setMenuOpened(false)}
                  to='reasons'> Why us </Link>
              </li>
              <li>
                <Link 
                  smooth={true}
                  spy={true}
                  onClick={()=>setMenuOpened(false)}
                  to='plans'> Plans </Link>
              </li>
              <li>
                <Link 
                  smooth={true}
                  spy={true}
                  onClick={()=>setMenuOpened(false)}
                  to='testimonials'> Testimonials </Link>
              </li>
              <li>
                <Link 
                  smooth={true}
                  spy={true}
                  onClick={()=>setMenuOpened(false)}
                  to='join-us'> Join Us </Link>
              </li>
            </ul>
          )
        }
      </div>
    </>
  )
}
