// importing CSS
import "/src/styles/Navbar.css"

// importing fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar(){
    return(
        
        <nav className="floating-navbar">

            <a href="#header" aria-label="Home">Home • <i className="fas fa-house"></i></a>

            <a href="#skills" aria-label="Skills">Skills • <i className="fas fa-code"></i></a>

            <a href="#education" aria-label="Education">Education • <i className="fas fa-graduation-cap"></i></a>

            <a href="#projects" aria-label="Projects">Projects • <i className="fas fa-folder-open"></i></a>

            <a href="#extra">Extras • <i className="fas fa-star"></i></a>

        </nav>
    )
}

export default Navbar;