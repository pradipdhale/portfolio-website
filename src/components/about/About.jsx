import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
// import {VscFolderLibrary} from 'react-icons/vsc'
import {VscFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about-img" srcset="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>300+ clients worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolder className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>

          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ut et ducimus. Ducimus neque 
            aspernatur, quos corrupti, distinctio ipsam recusandae magni ipsum officia dolores debitis voluptatibus? Doloribus corporis quod nam.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About