import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import picture1 from '../assets/Photos/picture1.jpg';
import picture2 from '../assets/Photos/picture2.jpg'; // Add more images as needed
import picture3 from '../assets/Photos/picture3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const HealthWellness = () => {
    return (
        <div className="container-fluid p-0">
            {/* Image Slider Section */}
            <div className="row">
                <div className="col-12">
                    <Carousel>
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
                    </Carousel>
                </div>
            </div>

            {/* Content Section */}
            <div className="row justify-content-center mt-4">
                <div className="col-md-10">
                    {/* Introduction Section */}
                    <div className="mb-4">
                        <h2>Health and Wellness Program</h2>
                        <p>
                        Our Health and Wellness Program is meticulously designed to help you achieve holistic well-being. In today's fast-paced world, it's easy to overlook the importance of a balanced lifestyle. Through this program, we emphasize not only physical fitness but also mental health, nutritional balance, and comprehensive wellness strategies. Participants will receive personalized guidance tailored to their individual needs, whether they are looking to improve their physical condition, reduce stress, or adopt healthier habits. Our holistic approach aims to empower you with the tools and knowledge necessary for cultivating a healthier and more balanced life
                        </p>
                    </div>

                    {/* Program Benefits Section */}
                    <div className="mb-4">
                        <h3>Program Benefits</h3>
                        <ul className="list-group">
                            <li className="list-group-item">Improved physical fitness and stamina</li>
                            <li className="list-group-item">Better mental clarity and emotional resilience</li>
                            <li className="list-group-item">Healthy eating habits and nutritional guidance</li>
                            <li className="list-group-item">Stress management techniques and mindfulness practices</li>
                            <li className="list-group-item">Enhanced overall well-being and life satisfaction</li>
                        </ul>
                    </div>

                    {/* Skills You Will Learn Section */}
                    <div className="mb-4">
                        <h3>What You Will Learn</h3>
                        <ul className="list-group">
                            <li className="list-group-item">Effective fitness routines for different body types</li>
                            <li className="list-group-item">Understanding mental health and self-care practices</li>
                            <li className="list-group-item">Balanced nutrition and meal planning strategies</li>
                            <li className="list-group-item">Techniques to manage stress and reduce anxiety</li>
                            <li className="list-group-item">Creating sustainable healthy habits for long-term wellness</li>
                        </ul>
                    </div>

                    {/* Program Requirements Section */}
                    <div className="mb-4">
                        <h3>Program Requirements</h3>
                        <ul className="list-group">
                            <li className="list-group-item">A willingness to commit to personal well-being</li>
                            <li className="list-group-item">Openness to adopt new health and fitness routines</li>
                            <li className="list-group-item">Access to basic fitness equipment (optional)</li>
                            <li className="list-group-item">Positive mindset towards mental and physical health improvement</li>
                        </ul>
                    </div>

                    {/* Why Choose This Program Section */}
                    <div className="mb-4">
                        <h3>Why Choose Our Health and Wellness Program?</h3>
                        <p>
                        Living a healthy life is about more than just physical fitness; it involves achieving a harmonious balance between your mind, body, and emotions. Our program stands out because it focuses on all aspects of wellness, ensuring that participants achieve long-lasting, positive results. Whether you are just starting your wellness journey or looking to enhance your current lifestyle, our program provides the knowledge and guidance needed to foster growth and transformation. We believe that everyone deserves the opportunity to lead a fulfilling and healthy life, and our Health and Wellness Program is the stepping stone toward that goal.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthWellness;
