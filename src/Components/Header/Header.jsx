import React, { useRef, useState, useEffect } from 'react'
import './Header.css'
import DraggableSticker from '../DraggableSticker/DraggableSticker'

import illustration from '../../assets/webp/portfolio_sketch_1.webp'
import name_logo from '../../assets/webp/name_logo.webp'
import linkedin_icon from '../../assets/webp/linkedin_logo.webp'
import github_icon from '../../assets/webp/github_logo.webp'
import instagram_icon from '../../assets/webp/instagram_logo_alt.webp'

const sticker1 = 'https://em-content.zobj.net/source/apple/354/star_2b50.png'
const sticker2 = 'https://em-content.zobj.net/source/apple/354/cherry-blossom_1f338.png'
const sticker3 = 'https://em-content.zobj.net/source/apple/354/butterfly_1f98b.png'

const STICKERS_DESKTOP = [
  { id: 1, src: sticker1, alt: 'star sticker',      size: 30, initialXPercent: 0.73, initialYPercent: 0.08, rotate: -10 },
  { id: 2, src: sticker2, alt: 'flower sticker',    size: 30, initialXPercent: 0.45, initialYPercent: 0.75, rotate: 8   },
  { id: 3, src: sticker3, alt: 'butterfly sticker', size: 30, initialXPercent: 0.83, initialYPercent: 0.55, rotate: -5  },
]

const STICKERS_MOBILE = [
  { id: 1, src: sticker1, alt: 'star sticker',      size: 30, initialXPercent: 0.65, initialYPercent: 0.50, rotate: -10 },
  { id: 2, src: sticker2, alt: 'flower sticker',    size: 30, initialXPercent: 0.10, initialYPercent: 0.80, rotate: 8   },
  { id: 3, src: sticker3, alt: 'butterfly sticker', size: 30, initialXPercent: 0.80, initialYPercent: 0.70, rotate: -5  },
]

const Header = () => {
  const stickerBoundsRef = useRef(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 500px)')
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const STICKERS = isMobile ? STICKERS_MOBILE : STICKERS_DESKTOP

  return (
    <div
      ref={stickerBoundsRef}
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {STICKERS.map(s => (
        <DraggableSticker
          key={s.id}
          src={s.src}
          alt={s.alt}
          size={s.size}
          initialXPercent={s.initialXPercent}
          initialYPercent={s.initialYPercent}
          rotate={s.rotate}
          containerRef={stickerBoundsRef}
          resetKey={isMobile ? 'mobile' : 'desktop'}
        />
      ))}

      <div className="header">
        <div className="header-left">
          <h1 className="about-me-description"><span>Hello! </span>My name is</h1>

          <img
            className="name-logo"
            src={name_logo}
            alt="name logo"
          />

          <h2 className="subtitle">
            <p className="about-me-description">
              and I am a BSc Computer Science student based in
              <span className="impact-font"> Vancouver, B.C. </span>
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/dilna-davi/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin_icon} className="icon" alt="LinkedIn" />
              </a>
              <a href="https://github.com/dilnadavi" target="_blank" rel="noopener noreferrer">
                <img src={github_icon} className="icon github" alt="GitHub" />
              </a>
              {/* <a href="https://www.instagram.com/dillpicklx/" target="_blank" rel="noopener noreferrer">
                <img src={instagram_icon} className="icon instagram" alt="Instagram" />
              </a> */}
            </div>
          </h2>
        </div>

        <div className="header-right">
          <img
            className="illustration"
            src={illustration}
            alt="portfolio illustration"
          />
        </div>
      </div>
    </div>
  )
}

export default Header