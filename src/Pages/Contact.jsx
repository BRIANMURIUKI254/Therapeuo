// import '../Styles/Contact.css';
import DOLImage from '../assets/Photos/D.O.L.PNg'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="contact-image">
                        <img src={DOLImage} alt="Contact" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="contact-info">
                        <div className="contact-info-item mb-4">
                            <i className="fas fa-map-marker-alt fa-2x"></i>
                            <h3>PHYSICAL ADDRESS</h3>
                            <p>4th Floor, Paramount Plaza - Nairobi</p>
                        </div>
                        <div className="contact-info-item mb-4">
                            <i className="fas fa-phone-alt fa-2x"></i>
                            <h3>Contact Us</h3>
                            <p>0712482838</p>
                        </div>
                        <div className="contact-info-item mb-4">
                            <i className="fas fa-envelope fa-2x"></i>
                            <h3>EMAIL US</h3>
                            <p>Daysoflight@gmail.com</p>
                            <p>admin@Daysoflight.com</p>
                        </div>
                        <div className="contact-info-item mb-4">
                            <i className="fas fa-clock fa-2x"></i>
                            <h3>WORKING HOURS</h3>
                            <p>Mon to Friday - 8 AM to 5 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
