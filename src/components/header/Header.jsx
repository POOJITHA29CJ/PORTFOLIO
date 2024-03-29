import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.jpg"

const Header = () => {
  return ( 
   <header>
     <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Poojitha</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA></CTA>
      
      <div className="me">
        <img src={ME} alt="me" ></img>
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
     </div>
   </header>
  )
};

export default Header;