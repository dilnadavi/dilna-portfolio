import React, { useState } from 'react'
import './Extra.css'

import photoshopLogo from '../../assets/design_logos/photoshop.png'
import illustratorLogo from '../../assets/design_logos/illustrator.png'
import indesignLogo from '../../assets/design_logos/indesign.png'
import figmaLogo from '../../assets/design_logos/figma.png'
import afterEffectsLogo from '../../assets/design_logos/after_effects.png'
import premiereProLogo from '../../assets/design_logos/premiere_pro.png'
import sonyVegasLogo from '../../assets/design_logos/sony_vegas.webp'

import carlLutzPoster from '../../assets/designs/carl_lutz.jpg'
import digestionPoster from '../../assets/designs/digestion_poster.png'
import dreamingPoster from '../../assets/designs/dreaming_poster.png'
import muffinsPoster from '../../assets/designs/muffins_poster.png'
import ramenPoster from '../../assets/designs/ramen_doodle.png'

const Extra = () => {
  const [selected, setSelected] = useState(null);

  // RANDOM WEB IMAGES
  const designs = [
    carlLutzPoster,
    digestionPoster,
    dreamingPoster,
    muffinsPoster,
    ramenPoster
  ];

  return (
    <div className='extra-card'>
      <div className="header-extra">
        <p>I am also</p>
        <h2>a designer.</h2>

        <div className="design-logos">
          <img src={photoshopLogo}/>
          <img src={illustratorLogo}/>
          <img src={indesignLogo}/>
          <img src={figmaLogo}/>
          <img src={afterEffectsLogo}/>
          <img src={premiereProLogo}/>
          <img src={sonyVegasLogo}/>
        </div>

        <div className="design-carousel">
          <div className="carousel-track">
            {designs.concat(designs).map((img, i) => (
              <img
                key={i}
                src={img}
                className="carousel-img"
                onClick={() => setSelected(img)}
              />
            ))}
          </div>
        </div>

        {selected && (
          <div className="modal-overlay" onClick={() => setSelected(null)}>
            <img src={selected} className="modal-image" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Extra
