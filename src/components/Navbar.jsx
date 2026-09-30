// importing fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// importing NavMenu
import NavMenu from "./NavMenu";

function Navbar(){
    return(
        
        <nav className="floating-navbar">

            <div className="nav-left">

                <a href="#About" aria-label="About" data-section="About">Home 🏠
                </a>

                <div className="nav-logo">
                </div>    

                <a href="#skills" aria-label="Skills" data-section="skills">Skills 🖥️</a>

                <a href="#education" aria-label="Education">Timeline 🎓</a>

                <a href="#projects" aria-label="Projects">Work 📂</a>

                <a href="#extra">Extras 🌟</a>

                <a href='#contact-links'>Contact Me 📲</a>
            </div>

            <div className="nav-right">
                <a href="#Shop" aria-label="Shop" data-section="Shop">Shop <i class="fa-solid fa-tags"></i>  </a>

                <a href="#Blog" aria-label="Blog" data-section="Blog">Blog <i class="fa-solid fa-pencil"></i></a>

                <button className='mode-toggle'><i class="fa-solid fa-sun"></i> | <i class="fa-solid fa-moon"></i></button>
            </div>


        </nav>
    )
}

export default Navbar;