import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import picture4 from '../assets/Photos/picture4.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [linkVisible, setLinkVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible((prevState) => !prevState);
    };

    const linkDropdown = () => {
        setLinkVisible((prevState) => !prevState);
    };

    const handleClickOutside = (event) => {
        if (
            event.target.closest('.dropdown-menu') === null && 
            !event.target.closest('.navbar-toggler') && 
            !event.target.closest('.nav-link')
        ) {
            setDropdownVisible(false);
            setLinkVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={picture4} alt="Logo" className="rounded-circle" width="40" />
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleDropdown} 
                    aria-controls="navbarNav" 
                    aria-expanded={dropdownVisible ? "true" : "false"} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${dropdownVisible ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link 
                                className="nav-link" 
                                to="#" 
                                onClick={linkDropdown} 
                                aria-expanded={linkVisible}
                            >
                                Mentorship Program
                            </Link>
                            {linkVisible && (
                                <ul className="dropdown-menu show" style={{ position: 'absolute', zIndex: 1000, backgroundColor: 'white', borderRadius: '0' }}>
                                    <li><Link className="dropdown-item" to="/AcademicMentorship">Academic Mentorship</Link></li>
                                    <li><Link className="dropdown-item" to="/CareerMentorship">Career Mentorship</Link></li>
                                    <li><Link className="dropdown-item" to="/PersonalDevelopment">Personal Development Mentorship</Link></li>
                                    <li><Link className="dropdown-item" to="/SocialSkills">Social Skills Mentorship</Link></li>
                                    <li><Link className="dropdown-item" to="/HealthWellness">Health and Wellness Mentorship</Link></li>
                                    <li><Link className="dropdown-item" to="/CommunityEngagement">Community Engagement Mentorship</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link className="btn btn-warning ms-3" to="/Apply">Apply</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
