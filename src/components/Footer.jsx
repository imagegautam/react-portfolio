import React from 'react'

export const Footer = () => {
  return (
    <footer className="flex footer" id="footer">
            

    <div className=" flex top">
        
            <div className="links">
                <h3>Links</h3>
                <ul>
                    <li>
                        <a href="#header">Home</a>
                    </li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                    

        
                </ul>
            </div>

            <div className="socials">
                <h3>Socials</h3>
                <ul>
                    <li><a href="" target="_blank">LinkedIn</a></li>
                    <li><a href="" target="_blank">GitHub</a></li>
                    <li><a href="" target="_blank">Facebook</a></li>
                    <li><a href="" target="_blank">Youtube</a></li>
                </ul>
            </div>


       
    </div>

    <div className="bottom">All rights reserved</div>


</footer>
  )
}


