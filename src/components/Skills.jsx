// importing Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'

const Skills = () =>{
    const skillsDictionary = {
        'Programming Languages' : ['Python', 'C'],
        'Frontend Web Development' : ['HTML', 'CSS', 'JavaScript', 'React.js'],
        'Backend Web Development' : ['Express.js', 'Node.js'],
        'Databases' : ['MySQL', 'MongoDB'],
        'Productivity' : ['Notion']
    }
    const ProgrammingLangs = ['Python', 'C', 'C#'];
    const FrontEndDev = ['HTML', 'CSS', 'JavaScript', 'React.js'];
    const BackEndDev = ['Express.js', 'Node.js'];
    const Databases_Tools = ['MySQL', 'Git'];
    const ProductivitySoftware = ['Notion'];

    return (
        <section id='skills'>
            <h2 className='heading'>SKILLS & OTHER TOOLS <i className="fas fa-code"></i></h2>

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
                    <h3>Databases & Tools</h3>
                    <div className='skills-grid'>
                        {Databases_Tools.map((skill,index)=>(
                            <span key={index} className='skill-tag'>{skill}</span>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Skills;