// importing React
import React from 'React';

// importing Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css'

const Skills = () =>{
    const skills = ['Python', 'HTML', 'CSS', 'JavaScript', 'SQL', 'React.js', 'Notion'];

    return (
        <section id='skills'>
            <h2><i className='fas fa-tools'></i> Skills</h2>
            <div className='skills-grid'>
                {skills.map((skill,index)=>(
                    <span key={index} className='skill-tag'>{skill}</span>
                ))}
            </div>
        </section>
    );
};

export default Skills;