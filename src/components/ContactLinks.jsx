// importing Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactLinks() {

    // ENTER YOUR EMAIL HERE
    const Email = 'methw.dev@gmail.com'

    return(
        <section id='contact-links'>
            <h2>want to get in touch with me?
                {/* <i class="fa-solid fa-link"></i> */}
                </h2>

            <div className="contact-main">

                <div className="contact-left">

                    <h1 className='contact-greeting'>See you again!  
                        <i class="fa-regular fa-hand fa-float"></i>
                        </h1>

                    <p className='contact-text'>I'm still on my way to 1st year of Software Engineering, and I'm very keen on making a website for your business. <p>
                    <br />
                    </p>Send an <span className="highlighted-text">Email</span>, View my <span className="highlighted-text">GitHub</span> for more work I've done, or check out my <span className="highlighted-text">LinkedIn</span> profile :).</p>
                        <div className='contact-links-container'>
                            <a href={`mailto:${Email}`} target="_blank" rel='noopener noreferrer' className="email-button">
                                <FontAwesomeIcon icon={faEnvelopeOpen} /> Email 
                            </a>


                            <a href='https://github.com/MethWijesundara' target="_blank" rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                            </a>

                            <a href='https://www.linkedin.com/in/meth-wijesundara' target='_blank' rel='noopener noreferer'>
                                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                            </a>
                        </div>
                </div>

                
                <div className="contact-right"></div>
                
            </div>
        </section>
    );
}

export default ContactLinks;