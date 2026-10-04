import React from "react";
import { useState } from "react";


function NavMenu(){
    const [isOpen, setIsOpen] = useState(false);
    return(

        <div className="mobile-nav">
        <button 
            className="NavMenu-button"
            onClick= {() => setIsOpen(!isOpen)}
            >Menu <i class="fa-solid fa-bars"></i>
        </button>

        {isOpen && (
            <nav className= "mobile-menu">

                <a href="#About" onClick={()=> setIsOpen(false)}>
                    Home <i className="fas fa-house"></i>
                </a>
                
                <a href="#skills" onClick={() => setIsOpen(false)}>
                    Education  <i className="fas fa-graduation-cap"></i>
                </a>

                <a href="#projects" onClick={() => setIsOpen(false)}>
                    Work  <i className="fas fa-folder-open"></i>
                </a>

                <a href="#extra" onClick={() => setIsOpen(false)}>
                    Extras  <i className="fas fa-star"></i>
                </a>

            </nav>
        )}

    </div>
    );
}
export default NavMenu;