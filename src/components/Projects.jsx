import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 'dayli',
            title: 'DAYLI',
            tech: 'Python, MySQL',
            theme: 'Productivity',
            date: 'July 15 - Present',
            description: 'CLI journal app with persistent MySQL storage, tag-based search, and mood tracking.',
            github: 'https://github.com/MethWijesundara/DAYLI'
        },

        {
            id: 'movieflix',
            title: 'MovieFlix',
            tech: 'HTML, CSS',
            theme: 'Entertainment',
            date: 'May 2026',
            description: 'A UI design for a movie/tv-show streaming website',
            github: 'https://github.com/MethWijesundara/MovieFlix'
        },

        {
            id: 'expense-tracker',
            title: 'Expense Tracker',
            tech: 'React.js, JSX',
            theme: 'Data Analysis',
            date: 'March 2026',
            description: 'An expense tracker built with React.js that shows expenses, earnings and the total amount remaining.',
            github: 'https://github.com/MethWijesundara/expense-tracker-react-app'
        }
    ];

    return (
        <section id="projects">

            <h2>PROJECTS/WORK <i className='fas fa-folder-open'></i></h2>

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
                                View Project » <i className='fab fa-github'></i>
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