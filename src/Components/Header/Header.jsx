import React from 'react'
import './Header.css'
import illustration from '../../assets/temp_icon.png'
import name_logo from '../../assets/name_logo.png'
import linkedin_icon from '../../assets/linkedin_logo.png' 
import github_icon from '../../assets/github_logo.png'

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="intro-text"><span>Hello! </span>My name is</h1>

        <img
          className="name-logo"
          src={name_logo}
        />

        <h2 className="subtitle">
           <p className='about-me-description'>a BSc Computer Science student exploring software, <span>impact</span>, and innovation.</p>
                     <div className="social-icons">
            <a href="https://www.linkedin.com/in/dilna-davi/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin_icon} className="icon" />
            </a>
            <a href="https://github.com/dilnadavi" target="_blank" rel="noopener noreferrer">
              <img src={github_icon} className="icon github" />
            </a>
          </div>
        </h2>
      </div>

      <div className="header-right">
        <img
          className="illustration"
          src={illustration}
        />
      </div>
    </div>
  )
}

export default Header
