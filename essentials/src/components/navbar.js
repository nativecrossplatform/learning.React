import React from 'react';
function NavBar({onNavClick})
{
    return (
    <nav>
            <button onClick={() => onNavClick('Home')} id="name">
                Jash Upadhyay
            </button>
            <button onClick={() => onNavClick('Home')}>
                Home
            </button>
            <button onClick={() => onNavClick('Skills')}>
                Skills
            </button>
            <button onClick={() => onNavClick('Projects')}>
                Projects
            </button>
            <button onClick={() => onNavClick('Education')}>
                Education
            </button>
            <button onClick={() => onNavClick('Contact')}>
                Contact
            </button>
    </nav>
    );
}

export default NavBar;