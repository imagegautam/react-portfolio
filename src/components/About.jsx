import React from 'react'
import image from '../assets/image.png'

export const About = () => {
  return (
    <section className="about" id="about">

            <h2 className="title"   >
                <span>About me</span>
            </h2>

            <div className="container flex about-content">

                <div className="myImg flex">
                    <img src={image} alt="" width="100%" />
                </div>

                <div className="my-bio container">
                    <h2>Akriti Gautam</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit tempora laboriosam natus ad quis deserunt officiis quisquam, repellat iure, eligendi architecto porro nobis aperiam fugiat. Exercitationem optio amet sed ex.</p>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi voluptatem maiores error ex facere incidunt modi dolores, eos sunt tempore ab neque atque magni voluptas consequuntur ut sapiente porro iusto.</p>

                    <p>Sydney Australia</p>

                    <div>
                        <div className="tag">
                            Interest
                        </div>

                        <div className="flex">
                            <span>Coding </span><span>Watching series</span><span>Cooking</span>
                        </div>
                    </div>

                </div>

            </div>
            
        </section>
  )
}


