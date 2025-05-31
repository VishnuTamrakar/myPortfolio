import React from 'react'
import logo from '../assets/images/logo.jpg'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/">
                <img className='mx-2 ' width={80}  src={logo} alt="home" />
            </a>
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/vishnu-tamatta-26a645177/"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Linkedin'>
                <FaLinkedin/>
            </a>
            <a href="https://github.com/VishnuTamrakar?tab=repositories"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Github'>
                <FaGithub/>
            </a>
            <a href="https://www.instagram.com/vishnu_tamatta/?next=%2F"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'>
                <FaInstagram/>
            </a>
            <a href="https://www.facebook.com/vishnu.tamatta"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'>
                <FaFacebook/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar