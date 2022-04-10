import React from 'react';
import images from './image11/Jaithra.jpeg';


function AboutMe() {
    return(
        <div id="example2">
            <h1>ABOUT ME:</h1>
            <img id="img" src = {images} width="125" height="125" />
            <p>This is <b>JAITHRA VINITH M</b> studying B.E in <b>BANGALORE INSTITUTE OF TECHNOLOGY</b> under <b>ISE</b> Department. </p>
            <p>A 3rd year undergrad seeking roles in an organization where technical skills are useful and I am provided
with opportunities to grow.</p>
            <p><b>.......</b></p>
        </div>
    )
}

export default AboutMe;