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

    // ENTER YOUR DEGREE(S) HERE
    const title_1 = "BSc (Hons) Computer Science (Year 1)"
    const institute_1 = "National School of Business Management"
    const duration_1 = "March, 2023 - May, 2025"
    const description_1 = "Completed two years of Computer Science coursework which included Data Structures & Algorithms, OOP with C#, Database Management Systems, Web Development and System Analysis."

    return(
        // <section id='education'>
        //     <h2 className='education-heading'><i className='fas fa-graduation-cap'></i> EDUCATION</h2>

        //     <div className='edu-item'>
        //         <h3 className='uni-name'>BSc (Hons) Computer Science</h3>
        //         <p>National School of Business Management (NSBM)</p>
        //         <p className='date'>March 2023 - May 2025</p>
        //         <br />
        //         <p>Relevant Coursework :</p>
        //         <ul className='unordered-list'>
        //             {courses.map((course, index)=>(
        //                 <li key={index}>{course}</li>
        //             ))}
        //         </ul>
        //     </div>
            
        // </section>

        <section id='education'>
            <h2>EDUCATION <i class="fa-solid fa-user-graduate"></i></h2>

            <div className="edu-main-container">
                <div className="edu-item">
                    <h3>University of Plymouth (NSBM affiliation)</h3>
                    <h4>BSc (Hons) Computer Science -  Year 2</h4>
                    <i>2024- 2025 May</i>
                </div>

                <div className="edu-logo-container">
                    <div className='edu-1'></div>
                </div>
            </div>

            <div className="edu-main-container">
                <div className="edu-item">
                    <h3>National School of Business Management (NSBM)</h3>
                    <h4>BSc (Hons) Computer Science -  Year 1</h4>
                    <i>2023 March - 2024</i>
                </div>

                <div className="edu-logo-container">
                    <div className='edu-2'></div>
                </div>
            </div>

        </section>
    );
};

export default Education;