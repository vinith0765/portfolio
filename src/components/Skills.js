import React , {components} from 'react';
import image1 from './image11/coding.png';
import image2 from './image11/personal.jfif';

function Skills() {
    return (
        <div id="example2">
            <h1>SKILLS:</h1>
            <img id="logo" src={image1} width="100" height="100"/>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>C Language</li>
                <li>JAVA</li>
                <li>PYTHON(basics)</li>
            </ul>
            <p><b>.......</b></p>
            <h1>PERSONAL INTERESTS:</h1>
            <img id="logo" src={image2} width="100" height="100" />
            <ul>
                <li>Web series</li>
                <li>Listening to Music</li>
                <li>Playing Cricket</li>
            </ul>
            <p><b>.......</b></p>
            </div>
        
        
    )
}

export default Skills;
