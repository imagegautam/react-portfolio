import React from 'react'
import p from '../assets/p.png'

export const Recentwork = () => {
  return (
    <section className="projects container" id="projects">
            <h2 className="title">
                <span>
                    Projects
                </span>
            </h2>

            <div className="grid project-container">
                <div className=" project-card">
                    <div className="top">
                        <img src={p} alt="" width="100%" />

                    </div>

                    <div className="bottom container">

                        

                        <div className="links">
                            <a href=""><i className="fa-brands fa-github"></i></a>
                            <a href=""><i className="fa-brands fa-chrome"></i></a>
                        </div>
                        <h3>Personal Portfolio</h3>
                        <p>Techstack: HTML, CSS, JavaScript, React </p>

                        

                    </div>
                </div>

                <div className="project-card">
                    <div className="top">
                        <img src={p} alt="" width="100%" />

                    </div>

                    <div className="bottom container">

                        

                        <div className="links">
                            <a href=""><i className="fa-brands fa-github"></i></a>
                            <a href=""><i className="fa-brands fa-chrome"></i></a>
                        </div>
                        <h3>Personal Portfolio</h3>
                        <p>Techstack: HTML, CSS, JavaScript, React </p>

                        

                    </div>
                </div>


                <div className=" project-card">
                    <div className="top">
                        <img src={p} alt="" width="100%" />

                    </div>

                    <div class="bottom container">

                        

                        <div className="links">
                            <a href=""><i className="fa-brands fa-github"></i></a>
                            <a href=""><i className="fa-brands fa-chrome"></i></a>
                        </div>
                        <h3>Personal Portfolio</h3>
                        <p>Techstack: HTML, CSS, JavaScript, React </p>

                        

                    </div>
                </div>

                <div className="project-card">
                    <div className="top">
                        <img src={p} alt="" width="100%" />

                    </div>

                    <div className="bottom container">

                        

                        <div className="links">
                            <a href=""><i className="fa-brands fa-github"></i></a>
                            <a href=""><i className="fa-brands fa-chrome"></i></a>
                        </div>
                        <h3>Personal Portfolio</h3>
                        <p>Techstack: HTML, CSS, JavaScript, React </p>

                        

                    </div>
                </div>
            </div>
        </section>
  )
}


