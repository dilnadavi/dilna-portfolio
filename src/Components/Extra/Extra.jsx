import React, { useState } from 'react'
import './Extra.css'

import photoshopLogo from '../../assets/design_logos/webp/photoshop.webp'
import illustratorLogo from '../../assets/design_logos/webp/illustrator.webp'
import indesignLogo from '../../assets/design_logos/webp/indesign.webp'
import figmaLogo from '../../assets/design_logos/webp/figma.webp'
import afterEffectsLogo from '../../assets/design_logos/webp/after_effects.webp'
import premiereProLogo from '../../assets/design_logos/webp/premiere_pro.webp'
import sonyVegasLogo from '../../assets/design_logos/webp/sony_vegas.webp'

import carlLutzPoster from '../../assets/designs/webp/carl_lutz.webp'
import digestionPoster from '../../assets/designs/webp/digestion_poster.webp'
import dreamingPoster from '../../assets/designs/webp/dreaming_poster.webp'
import muffinsPoster from '../../assets/designs/webp/muffins_poster.webp'
import ramenPoster from '../../assets/designs/webp/ramen_doodle.webp'

import linkIcon from '../../assets/webp/link.svg'

const Extra = () => {
  const [selected, setSelected] = useState(null);

  const designs = [
    carlLutzPoster,
    digestionPoster,
    dreamingPoster,
    muffinsPoster,
    ramenPoster
  ];

  return (
    <>
      <div className='extra-card'>
        <div className="header-extra">
          <p>I am also</p>
          <h2>a designer.</h2>

          <div className="design-logos">
            <img src={photoshopLogo} loading="lazy"/>
            <img src={illustratorLogo} loading="lazy"/>
            <img src={indesignLogo} loading="lazy"/>
            <img src={figmaLogo} loading="lazy"/>
            <img src={afterEffectsLogo} loading="lazy"/>
            <img src={premiereProLogo} loading="lazy"/>
            <img src={sonyVegasLogo} loading="lazy"/>
          </div>

          <div className="design-carousel">
            <div className="carousel-track">
              {designs.concat(designs).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="carousel-img"
                  loading="lazy"
                  onClick={() => setSelected(img)}
                />
              ))}
            </div>
          </div>
          <div className="view-more">
          <a href="https://drive.google.com/drive/folders/1nNRqrfaIP1K25LD8flIGLJDgKfl9-cGq?usp=drive_link" target="_blank" rel="noopener noreferrer">
            View More
            <img src={linkIcon} width="13" height="13" />
          </a>
        </div>
        </div>
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <img src={selected} className="modal-image" />
        </div>
      )}
    </>
  )
}

export default Extra