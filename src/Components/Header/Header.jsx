import React from 'react'
import './Header.css'
import illustration from '../../assets/temp_icon.png'
import name_logo from '../../assets/name_logo.png'

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
