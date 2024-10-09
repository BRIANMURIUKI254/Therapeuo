/* eslint-disable react/no-unescaped-entities */
import code3 from "../assets/code3.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

const AcademicMentorship = () => {
  return (
    <div className="container my-5">
      {/* Academic Mentorship Program Section */}
      <div className="row mb-5 align-items-stretch">
        <div className="col-md-6 d-flex">
          <img
            src={code3}
            alt="Academic Mentorship"
            className="img-fluid rounded shadow w-100"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3>What the Academic Mentorship Program Contains</h3>
          <p>
            Our Academic Mentorship Program is designed to provide students with
            the tools and support they need to succeed in their academic and
            professional careers. Through personalized guidance, skill-building
            workshops, and networking opportunities, we aim to foster a
            community of motivated and capable individuals ready to take on the
            challenges of the future.
          </p>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Career Guidance:</strong>Receive personalized mentorship to help navigate various career paths, from choosing the right industry to identifying job opportunities that align with your strengths and passions. Our experts offer insights into resume building, interview preparation, and career mapping to ensure you make informed choices.
            </li>
            <li className="list-group-item">
              <strong>Leadership Development:</strong>  Participate in a series of workshops and real-world projects that foster essential leadership skills. Engage in activities that develop decision-making, problem-solving, and strategic thinking, preparing you for leadership roles in your future career.
            </li>
            <li className="list-group-item">
              <strong>Networking Opportunities:</strong>  Build valuable connections with industry professionals, alumni, and peers. Attend exclusive networking events, panel discussions, and guest lectures to gain insights into diverse career paths and expand your professional network.
            </li>
            <li className="list-group-item">
              <strong>Skill Building:</strong> Engage in practical skill-building sessions that cover a wide range of topics, including effective communication, teamwork, time management, critical thinking, and technical expertise. These workshops are designed to enhance both your soft and hard skills, ensuring you are well-rounded and job-ready.
            </li>
            <li className="list-group-item">
              <strong>Internship Placement:</strong> Benefit from our established partnerships with reputable organizations and companies. We provide guidance and support in securing internship positions that align with your career goals, giving you the opportunity to gain hands-on experience and build your professional portfolio.
            </li>
            <li className="list-group-item">
              <strong>Continued Support:</strong>Our mentorship doesn't end when the program does. We offer ongoing support and guidance even after program completion, providing career advice, job search assistance, and professional development resources to ensure your long-term success.
            </li>
          </ul>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <h3>Testimonials</h3>
          <blockquote className="blockquote">
            "The mentorship program has been a game-changer for my career. The
            guidance and support I received were invaluable." - Jane Doe
          </blockquote>
          <blockquote className="blockquote">
            "Thanks to the networking opportunities, I was able to secure an
            internship that kickstarted my career." - John Smith
          </blockquote>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={code3}
            alt="Testimonial"
            className="rounded-circle img-fluid"
            style={{ width: "15cm", height: "15cm", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AcademicMentorship;
