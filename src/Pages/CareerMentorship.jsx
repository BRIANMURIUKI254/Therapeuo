/* eslint-disable react/no-unescaped-entities */

import picture1 from '../assets/Photos/picture1.jpg'; // Adjust path

const CareerMentorship = () => {
    return (
        <div className="mentorship-container">
            <div className="mentorship-image">
                <img src={picture1} alt="Career Mentorship" />
            </div>
            <div className="mentorship-details">
                <h3>What the Career Mentorship Program Contains</h3>
                <p>
                Our Career Mentorship Program empowers professionals to navigate their career paths with confidence and purpose. We combine personalized guidance from industry experts, targeted skill-building workshops, and strategic networking opportunities to help you achieve your professional aspirations. Whether you're aiming for a promotion, considering a career pivot, or striving to become a leader in your field, our program provides the tools, knowledge, and support you need to excel. Join us to unlock your full potential and transform your career trajectory.
                </p>
                <ul>
                    <li><strong>Career Guidance:</strong> Personalized support for navigating career paths, setting goals, and finding the right opportunities.</li>
                    <li><strong>Leadership Development:</strong> Fostering leadership skills through various workshops, real-life scenarios, and mentorship from experienced leaders.</li>
                    <li><strong>Networking Opportunities:</strong> Connecting with industry professionals, alumni, and peers to build a strong professional network for long-term career growth.</li>
                    <li><strong>Skill Building:</strong> Practical skill-building sessions focusing on communication, teamwork, technical expertise, and other essential career skills.</li>
                    <li><strong>Job Placement Assistance:</strong> Assistance in securing job positions with partner organizations and companies, including resume reviews and interview preparation.</li>
                    <li><strong>Continued Support:</strong> Ongoing guidance and support even after program completion to ensure continued career success and professional development.</li>
                </ul>

            </div>
        </div>
    );
};

export default CareerMentorship;
