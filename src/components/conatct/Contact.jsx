import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebookMessenger} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i90u3ce', 'template_goabfd2', form.current, 'JyLyD7lLUOWEq2678')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>Pradipdhale167
              @gmail.com</h5>
            <a href="mailto:pradipdhale167@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <FaFacebookMessenger className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Pradipdhale</h5>
            <a href="https://api.whatsapp.com/send?phone+7875265561">Send a message</a>
          </article>

          <article className="contact_option">
            <ImWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>7875265561</h5>
            <a href="https://api.whatsapp.com/send?phone+7875265561">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required />
          <input type="email" name="email" id="" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact