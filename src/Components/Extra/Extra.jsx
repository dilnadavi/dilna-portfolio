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
