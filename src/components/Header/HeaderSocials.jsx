import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className="header_socials">
       <a href='https://www.linkedin.com/feed/'><FaLinkedinIn /></a>
       <a href='https://www.linkedin.com/feed/'><FaGithub /></a>
       <a href='https://www.linkedin.com/feed/'><FaInstagram /></a>

    </div>
  )
}

export default HeaderSocials