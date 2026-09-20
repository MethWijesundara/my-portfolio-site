import "../styles/About.css" ;

function About(){

    const name = "Meth"
    const description = "I'm a software developer who likes making web applications with React. I also love studying science on the side :)."
    return(
        <section id="About">
            <h2>ABOUT <i class="fa-solid fa-circle-info"></i></h2>
            <div className = "about-container">
                <div className = "description-container">
                    {/* <p className = "name">Hi, I'm {name}!</p> */}
                    <p><span className="name">Hi, I'm <span className="about-name">{name}</span> <i class="fa-regular fa-hand fa-float"></i></span> <br />{description}</p>
                </div>
                <div className = "image-container"></div>
            </div>
        </section>
    );
}
export default About;