import React from 'react'
import './experience.css'
import {BsFillBagCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h2>Frontend Development</h2>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillBagCheckFill />
              <h4>HTML</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            <article className='experience_details'>
              <BsFillBagCheckFill />
              <h4>CSS</h4>
              {/* <small className='text-light'>InterMediate</small> */}
            </article>
            <article className='experience_details'>
              <BsFillBagCheckFill />
              <h4>JavaScript</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            <article className='experience_details'>
              <BsFillBagCheckFill />
              <h4>Bootstap</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            <article className='experience_details'>
              <BsFillBagCheckFill />
              <h4>React</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            <article className='experience_details'>
              <BsFillBagCheckFill />
              <h4>Jquery</h4>
              {/* <small className='text-light'>Intermediate</small> */}
            </article>

          </div>
        </div>
        {/* ghjffddg */}
        <div className="experience_backend">
          <h2>Backend Development</h2>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillBagCheckFill />
              <h4>Node JS</h4>
              {/* <small className='text-light'>Basic</small> */}
            </article>
            <article className='experience_details'>
              <BsFillBagCheckFill />
              <h4>MongoDB</h4>
              {/* <small className='text-light'>InterMediate</small> */}
            </article>
            <article className='experience_details'>
              <BsFillBagCheckFill />
              <h4>PHP</h4>
              {/* <small className='text-light'>Basic</small> */}
            </article>
            <article className='experience_details'>
              <BsFillBagCheckFill />
              <h4>MySQL</h4>
              {/* <small className='text-light'>Basic</small> */}
            </article>
            <article className='experience_details'>
              <BsFillBagCheckFill />
              <h4>Python</h4>
              {/* <small className='text-light'>Basic</small> */}
            </article>
            
          </div>
        </div>
      </div>
    </section>

  )
}

export default Experience