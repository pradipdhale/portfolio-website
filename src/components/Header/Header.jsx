import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Pradip Dhale</h1>
        <h5 className="lext-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="img of me" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header