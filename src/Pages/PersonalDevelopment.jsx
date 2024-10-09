
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import picture1 from '../assets/Photos/picture1.jpg';
import picture2 from '../assets/Photos/picture2.jpg'; // Add other images as needed
import picture3 from '../assets/Photos/picture3.jpg';
import picture4 from '../assets/Photos/picture4.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const PersonalDevelopment = () => {
    return (
        <div className="program-container">
            {/* Image Carousel with Auto Transition */}
            <div className="row">
                <div className="col-12">
                    <Carousel interval={3000} controls={true} indicators={true}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={picture1}
                                alt="First slide"
                                style={{ height: "80vh", objectFit: "cover" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={picture2}
                                alt="Second slide"
                                style={{ height: "80vh", objectFit: "cover" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={picture3}
                                alt="Third slide"
                                style={{ height: "80vh", objectFit: "cover" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={picture4}
                                alt="Fourth slide"
                                style={{ height: "88vh", objectFit: "cover" }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div className="program-content">
                {/* Introduction Section */}
                <div className="intro">
                    <h2>Personal Development Program</h2>
                    <p>
                        The Personal Development Program is designed to help individuals build
                        self-awareness, develop their potential, and achieve personal and professional
                        goals. Whether you want to enhance your leadership skills, improve communication,
                        or achieve work-life balance, this program is tailored to your personal growth.
                    </p>
                </div>

                {/* Goals Section */}
                <div className="goals">
                    <h3>Program Goals</h3>
                    <ul>
                        <li>Build self-awareness and emotional intelligence</li>
                        <li>Set and achieve personal and professional goals</li>
                        <li>Enhance leadership and communication skills</li>
                        <li>Develop time management and productivity techniques</li>
                        <li>Improve work-life balance and stress management</li>
                        <li>Master the art of continuous learning and self-improvement</li>
                    </ul>
                </div>
            </div>

            {/* Skills You Will Learn Section */}
            <div className="skills">
                <h3>Skills You Will Learn</h3>
                <ul>
                    <li>Goal setting and strategic planning</li>
                    <li>Public speaking and interpersonal communication</li>
                    <li>Emotional intelligence and conflict resolution</li>
                    <li>Time management and productivity tools</li>
                    <li>Mindfulness and stress management techniques</li>
                    <li>Leadership development and decision making</li>
                </ul>
                <h3>Why Choose Personal Development?</h3>
                <p>
                    Personal development is a lifelong process that helps individuals assess
                    their skills and qualities, consider their aims in life, and set goals to
                    realize and maximize their potential. By choosing this program, you are
                    investing in your future and taking the steps to become the best version
                    of yourself, both personally and professionally.
                </p>
            </div>
        </div>
    );
};

export default PersonalDevelopment;
