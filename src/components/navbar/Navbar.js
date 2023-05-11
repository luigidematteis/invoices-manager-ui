import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../navbar/Navbar.css';

function Navbar() {
    const [activeButton, setActiveButton] = useState(null);
    const navigate = useNavigate();

    const handleButtonClick = (buttonName, path) => {
        setActiveButton(buttonName);
        navigate(path);
    };

    return (
        <nav className="navbar">
            <ul>
                <button
                    className={activeButton === 'Home' ? 'active' : ''}
                    onClick={() => handleButtonClick('Home', '/')}
                >
                    Home
                </button>
                <button
                    className={activeButton === 'About' ? 'active' : ''}
                    onClick={() => handleButtonClick('About', '/about')}
                >
                    About
                </button>
                <button
                    className={activeButton === 'Contact' ? 'active' : ''}
                    onClick={() => handleButtonClick('Contact', '/contact')}
                >
                    Contact
                </button>
            </ul>
        </nav>
    );
}

export default Navbar;
