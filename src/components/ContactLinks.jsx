// importing Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactLinks() {

    // ENTER YOUR EMAIL HERE
    const Email = 'methw.dev@gmail.com'

    return(
        <section id='contact-links'>
            <h2><i class="fa-solid fa-link"></i> contact me</h2>
            <p>Get in touch with me through Email, view my projects on GitHub, or connect with me on LinkedIn :).</p>
        <div className='contact-links-container'>
            <a href={`mailto:${Email}`} target="_blank" rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faEnvelopeOpen} /> Email 
            </a>


            <a href='https://github.com/MethWijesundara' target="_blank" rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>

            <a href='https://www.linkedin.com/in/meth-wijesundara' target='_blank' rel='noopener noreferer'>
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
        </div>
        </section>
    );
}

export default ContactLinks;