import React from 'react'
import './Header.css'
import illustration from '../../assets/webp/portfolio_sketch.webp'
import name_logo from '../../assets/webp/name_logo.webp'
import linkedin_icon from '../../assets/webp/linkedin_logo.webp' 
import github_icon from '../../assets/webp/github_logo.webp'
import instagram_icon from '../../assets/webp/instagram_logo_alt.webp'

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="about-me-description"><span>Hello! </span>My name is</h1>

        <img
          className="name-logo"
          src={name_logo}
        />

        <h2 className="subtitle">
          <p className='about-me-description'>
            and I am a BSc Computer Science student based in 
            <span className='impact-font'> Vancouver, B.C. </span>
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/dilna-davi/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin_icon} className="icon" />
            </a>
            <a href="https://github.com/dilnadavi" target="_blank" rel="noopener noreferrer">
              <img src={github_icon} className="icon github" />
            </a>
            <a href="https://www.instagram.com/dillpicklx/" target="_blank" rel="noopener noreferrer">
              <img src={instagram_icon} className="icon instagram" />
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
