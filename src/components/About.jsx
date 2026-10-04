import "../styles/About.css" ;

// import state
import { useState } from 'react';
function About(){

    // state for description.
    const [Index, setIndex] = useState(0);

    // Name, description and email. 
    const name = "Meth"; 
    const descriptions = [
        "I'm an indie developer who likes making web applications with React.",
        "I like to learn new things and improve my skills.",
        "Thanks for visiting my portfolio site. I hope you enjoy it!"
    ];
    const email = "methw.dev@gmail.com";

    return(
        <section id="About">
            <h2>about</h2>
            <div className = "about-container">
                <div className = "description-container">

                    <p>
                        <span className="name">Hi, I'm 
                            <span className="about-name"> {name} </span> 
                            <span className="about-emoji">:)!</span>
                            {/* <i class="fa-regular fa-hand fa-float"></i> */}
                        </span> 
                        <br />
                        <p key={Index} className="description">
                            {descriptions[Index]}
                        </p>
                    </p>
                    
                    <div className= "about-button-container">
                        <a href={`mailto:${email}`} className="about-contact-button">Contact Me</a>

                        <button className="about-easter-egg"
                            onClick={() => setIndex(
                                (Index + 1) % descriptions.length
                            )}
                        ><i class="fa-solid fa-egg "></i></button>
                    </div>

                        

                </div>
                <div className = "image-container">

                </div>
            </div>
        </section>
    );
}
export default About;