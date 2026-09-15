// importing fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// importing NavMenu
import NavMenu from "./NavMenu";

function Navbar(){
    return(
        
        <nav className="floating-navbar">

            <a href="#header" aria-label="Home" data-section="header">Home 🏠  </a>

            <a href="#skills" aria-label="Skills" data-section="skills">Skills 🖥️</a>

            <a href="#education" aria-label="Education">Education 🎓</a>

            <a href="#projects" aria-label="Projects">Projects 📂</a>

            <a href="#extra">Extras 🌟</a>

        </nav>
    )
}

export default Navbar;