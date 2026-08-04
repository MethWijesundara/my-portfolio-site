import React from 'react';


const Education = () => {
    const courses=[
        'Data Structures & Algorithms',
        'OOP with C#',
        'Database Management',
        'Web Development',
        'Mobile App Development',
        'System Analysis'
    ];

    return(
        <section id='education'>
            <h2 className='education-heading'><i className='fas fa-graduation-cap'></i> Education</h2>
            <div className='edu-item'>
                <h3 className='uni-name'>BSc (Hons) Computer Science</h3>
                <p>NSBM Green University</p>
                <p className='date'>March 2023 - May 2025</p>
                <br />
                <p>Relevant Coursework :</p>
                <ul className='unordered-list'>
                    {courses.map((course, index)=>(
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Education;