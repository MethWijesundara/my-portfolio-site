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
        
        <section id='education'>
            <h2>TIMELINE <i className="fa-solid fa-user-graduate"></i></h2>

            <div className="edu-main-container">
                <div className="edu-item">
                    <h3>BSc (Hons) Computer Science | 2023 - 2025</h3>
                    <h3 className = "uni">University of Plymouth</h3>
                    <h4 className="uni-description"><i>*National School of Business Management (NSBM) affiliation.</i></h4>
                    <br />
                    <p>I completed 2 years of CS coursework before dropping out. What I learned includes: </p>
                    <ul className="courses">
                        <li>Introduction to Programming with C</li>
                        <li>Object Oriented Programming with C#</li>
                        <li>Web Development</li>
                        <li>Data Structures & Algorithms</li>
                        <li>Database Management</li>
                    </ul>
                    
                </div>

                <div className="edu-logo-container">
                </div>
            </div>

            {/* <hr /> */}

        </section>
    );
};

export default Education;