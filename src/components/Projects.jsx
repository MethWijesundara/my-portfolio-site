import React from 'react';

const Projects = ({onViewDetails}) => {
    const projects = [
        {
            id: 'dayli',
            title: 'DAYLI',
            tech: 'Python, MySQL, Productivity',
            date: 'July 15 - Present',
            description: 'CLI journal app with persistent MySQL storage, tag-based search, and mood tracking.',
            github: 'https://github.com/MethWijesundara/DAYLI'
        },

        {
            id: 'movieflix',
            title: 'MovieFlix',
            tech: 'HTML, CSS, Entertainment',
            date: 'May 2026',
            description: 'A UI design for a movie/tv-show streaming website',
            github: 'https://github.com/MethWijesundara/MovieFlix'
        },

        {
            id: 'expense-tracker',
            title: 'Expense Tracker',
            tech: 'React.js, JSX, Data Analysis',
            date: 'March 2026',
            description: 'An expense tracker built with React.js that shows expenses, earnings and the total amount remaining.',
            github: 'https://github.com/MethWijesundara/expense-tracker-react-app'
        }
    ];

    return (
        <section id="projects">
            <h2><i className='fas fa-folder-open'></i>Projects</h2>
            {projects.map((project)=>(
                <div key={project.id} className='project-card'>
                    <h3>
                        {project.title}<span className='straight-line'> | </span>{''}
                        <i><span className='tech'>{project.tech}</span></i>
                    </h3>
                    <p className='date'>{project.date}</p>
                    <p className='description'>{project.description}</p>
                    <div style={{display : 'flex', gap:'10px', flexWrap:'wrap'}}>
                        <a href={project.github} className='btn' target="_blank" rel='noopener noreferrer'>
                            View Project → <i className='fab fa-github'></i>
                        </a>
                        {/* Uncomment if you want to use the details panel */}
                        <button className='btn view-details-btn' onClick={()=> onViewDetails(project.id)}>
                         View details →
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Projects;