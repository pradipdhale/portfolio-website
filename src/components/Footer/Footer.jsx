import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer_logo'>Pradip Dhale</a>
      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><BsFacebook /></a>
        <a href="https://facebook.com"><BsInstagram /></a>
        <a href="https://facebook.com"><BsTwitter /></a>

      </div>

      <div className="footer_copyright">
        <small>&copy; Pradip Dhale. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer