// Header component

// importing React
import React from 'react';

// importing Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// unnecessary import
// import '@fortawesome/fontawesome-free/css/all.min.css'

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header-name'>METH WIJESUNDARA</h1>
            <p className='headline'>CS Foundation @ NSBM | Developing Python and Web apps.</p>

            <div className='contact-links'>
                <a href='mailto:methw.dev@gmail.com' target="_blank" rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faEnvelopeOpen} /> methw.dev@gmail.com
                </a>
                <a href='tel:+94762663863' target='_blank' rel='noopener noreferrer'>
                   <FontAwesomeIcon icon={faPhone} /> +94762663863
                </a>
                <a href='https://www.google.com/maps/place/Kadawatha/@7.0095444,79.8776332,12z/data=!3m1!4b1!4m6!3m5!1s0x3ae2f86bd75870f7:0xee362e29dbc079a6!8m2!3d7.0046324!4d79.954155!16s%2Fm%2F02rrpb2?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D' target="_blank" rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />Kadawatha, Sri Lanka
                </a>
                <a href='https://github.com/MethWijesundara' target="_blank" rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faGithub} />GitHub
                </a>

                <a href='https://www.linkedin.com/in/meth-wijesundara' target='_blank' rel='noopener norefferer'>
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
            

            </div>

        </header>
    )
    
}

export default Header;