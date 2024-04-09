import React from 'react'
import image from '../assets/image.png'

export const Hero = () => {
  return (
    <section className="hero-section container" id="header">
            <div className="grid hero">
                <div className="left flex">
                    <div>Hi I'm <span>Akriti Gautam</span></div>
                    <div class="tag">Software Developer</div>
                    <p>I love to learn coding.</p>
                    <div>
                        <a href="./assets/image.png" download>
                        <button>Download CV  <i className="fa-solid fa-download"></i></button></a>
                    </div>
                </div>
                <div className="right flex">
                    <img src={image} alt="Photo" />
                </div>

            </div>
        </section>
  )
}


