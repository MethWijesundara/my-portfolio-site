import React from "react";
import { useState } from "react";
function NavMenu(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <button 
            className="NavMenu-button"
            onClick= {() => setIsOpen(!isOpen)}
            >Menu <i class="fa-solid fa-bars"></i>
        </button>
    );
}
export default NavMenu;