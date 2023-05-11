import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiInfo, FiMail, FiMenu } from 'react-icons/fi';
import './Navbar.css';

function Navbar() {
    const [activeButton, setActiveButton] = useState(null);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = (buttonName, path) => {
        setActiveButton(buttonName);
        navigate(path);
    };

    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <nav className={`navbar ${isNavbarOpen ? '' : 'shrink'}`}>
            <div className="navbar-toggle" onClick={handleNavbarToggle}>
                <FiMenu size={24}/>
            </div>
            <ul>
                <li>
                    <button
                        className={activeButton === 'Home' ? 'active' : ''}
                        onClick={() => handleButtonClick('Home', '/')}
                    >
                        {isNavbarOpen ? 'Home' : <FiHome />}
                    </button>
                </li>
                <li>
                    <button
                        className={activeButton === 'About' ? 'active' : ''}
                        onClick={() => handleButtonClick('About', '/about')}
                    >
                        {isNavbarOpen ? 'About' : <FiInfo />}
                    </button>
                </li>
                <li>
                    <button
                        className={activeButton === 'Contact' ? 'active' : ''}
                        onClick={() => handleButtonClick('Contact', '/contact')}
                    >
                        {isNavbarOpen ? 'Contact' : <FiMail />}
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
