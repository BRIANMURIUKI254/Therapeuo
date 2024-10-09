import { Link } from 'react-router-dom';
import '../Styles/Hero.css';

const Hero = () => {
return (
<div className="hero-container">
    <div className="hero-content text-center">
    <h1 className="title">Define Your Future</h1>
    <p className="subtitle">Therapeuo Mentorship Program</p>
    <Link to="/apply">
        <button className="cta-button">Build Your Startup</button>
    </Link>
    </div>
</div>
);
};

export default Hero;
