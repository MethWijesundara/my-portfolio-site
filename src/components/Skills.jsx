// importing React
import React from 'react';

// importing Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css'

const Skills = () =>{
    const ProgrammingLangs = ['Python', 'C', 'C#'];
    const FrontEndDev = ['HTML', 'CSS', 'JavaScript', 'React.js'];
    const BackEndDev = ['Express.js', 'Node.js'];
    const Databases = ['MySQL'];
    const ProductivitySoftware = ['Notion'];

    return (
        <section className='skills'>
            <h2 className='heading'><i className="fas fa-code"></i> Skills</h2>

            <div className='skill-main-container'>
                <div className='skills-container'>
                    <h3>Programming Languages</h3>
                    <div className='skills-grid'>
                        {ProgrammingLangs.map((skill,index)=>(
                            <span key={index} className='skill-tag'>{skill}</span>
                        ))}
                    </div>
                </div>

                <div className='skills-container'>
                    <h3>Frontend Web Development</h3>
                    <div className='skills-grid'>
                        {FrontEndDev.map((skill,index)=>(
                            <span key={index} className='skill-tag'>{skill}</span>
                        ))}
                    </div>
                </div>

                <div className='skills-container'>
                    <h3>Backend Web Development</h3>
                    <div className='skills-grid'>
                        {BackEndDev.map((skill,index)=>(
                            <span key={index} className='skill-tag'>{skill}</span>
                        ))}
                    </div>
                </div>

                <div className='skills-container'>
                    <h3>Databases</h3>
                    <div className='skills-grid'>
                        {Databases.map((skill,index)=>(
                            <span key={index} className='skill-tag'>{skill}</span>
                        ))}
                    </div>
                </div>

                <div className='skills-container'>
                    <h3>Producitivity</h3>
                    <div className='skills-grid'>
                        {ProductivitySoftware.map((skill,index)=>(
                            <span key={index} className='skill-tag'>{skill}</span>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Skills;