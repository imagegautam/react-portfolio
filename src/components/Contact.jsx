import React from 'react'

export const Contact = () => {
  return (
    <section className="container contact" id="contact">
    <h2 className="title"   >
        <span>Contact</span>
    </h2>

    <div className=" flex social">
        <div>
            <a href=""><i className="fa-brands fa-linkedin"></i></a>
           
        </div>

        <div>
           <a href=""><i className="fa-brands fa-square-github"></i></a> 
            
        </div>


        <div>
           <a href="#youtube.com" ><i className="fa-brands fa-square-youtube"></i></a> 
            
        </div>

        <div>
           <a href="tel:0401641962"><i className="fa-solid fa-mobile"></i></a> 
            
        </div>

      
    </div>

    <div className="details container">

    <h3 >OR</h3>

    <div className=" flex">
        <a href="mailto:a7gautam11@gmail.com" className="email-details flex">
        <div className="email flex">

            <span>a7gautam11@gmail.com </span>

            <div className="flex send" ><i className="fa-solid fa-paper-plane"></i></div>
        </div>
        
        </a>

    </div>



</div>



</section>
  )
}


