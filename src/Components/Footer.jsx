
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left mb-3">
            <h2>THERAPEUO</h2>
            <div className="social-icons">
              <a href="#" className="text-white mx-2"><FaInstagram /></a>
              <a href="#" className="text-white mx-2"><FaFacebookF /></a>
              <a href="#" className="text-white mx-2"><FaYoutube /></a>
              <a href="#" className="text-white mx-2"><FaTiktok /></a>
            </div>
          </div>

          <div className="col-md-6 text-center text-md-right mb-3">
            <h4>Contact Us</h4>
            <p>Phone: 0712482838</p>
            <p>Email: Daysoflight@gmail.com</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
