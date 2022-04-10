import React from 'react'
import image3 from './image11/fa-instagram.jfif'
import image4 from './image11/mail.jfif'
import image5 from './image11/fa-whatsapp.jfif'

function Socialmedia() {
    return(
        <div id="example1">
            <h1>Get In Touch:</h1>
            <h5>Click on the icon</h5>
            <a href="https://www.instagram.com/jaithra__vinith/">
                <img src={image3} alt="instagram" width="30" height="30" />
            </a>
            {"    "}
            <a href="https://mail.google.com/mail/u/0/#inbox">
                <img src={image4} alt="gmail" width="30" height="30" />
            </a>
            {"    "}
            <a href="https://wa.me/8197044799">
                <img src={image5} alt="whatsapp" width="30" height="30" />
            </a>
        </div>
    )

}
export default Socialmedia;