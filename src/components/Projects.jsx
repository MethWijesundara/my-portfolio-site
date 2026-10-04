import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Cozy Notebook',
            tech: 'Flask, JSON',
            theme: 'Productivity',
            date: 'September 2026',
            description: 'A simple note-taking web application built with Flask and JSON for data storage.',
            github: 'https://github.com/MethWijesundara/cozy-notebook'
        },

        {
            id: 2,
            title: 'Energy and Momentum Calculator',
            tech: 'Python',
            theme: 'Physics',
            date: 'March 2026',
            description: 'A simple calculator that calculates the energy and momentum of an object based on its mass, height and velocity.',
            github: 'https://github.com/MethWijesundara/energy-and-momentum-calculator'
        },

        {
            id: 3,
            title: 'DNA to RNA transcription',
            tech: 'Python',
            theme: 'Biology',
            date: 'August 2026',
            description: 'A simple tool for converting DNA sequences to RNA sequences.',
            github: 'https://github.com/MethWijesundara/DNA-to-RNA-transcription'
        }
    ];

    return (
        <section id="projects">

            <h2>work
                 {/* <i className='fas fa-folder-open'></i> */}
                 </h2>

            {projects.map((project, index)=>(
                <div key={project.id} className='project-container'>

                    <div className='project-card'>
                        <div className="project-top">

                            <div className='project-title-date'>
                                <h3 className="project-title">{project.title}</h3>
                                <p className='date'>{project.date}</p>
                            </div>

                            <div className='project-meta'>
                                <span className="tech">{project.tech}</span>
                                <span className="theme">{project.theme}</span>
                            </div>
                        </div>

                        <div className='project-bottom'>
                            <p className='description'>{project.description}</p>

                            <a href={project.github} className='project-btn' target="_blank" rel='noopener noreferrer'>
                                View Project <i className='fab fa-github'></i>
                            </a>

                        </div>

                    </div>

                     {index < projects.length - 1 && <hr className='hr' />}
                </div>

            ))}
        </section>
    );
};

export default Projects;