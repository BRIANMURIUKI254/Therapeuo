import carrer from '../assets/carrer.jpg';

const SocialSkills = () => {
  return (
    <div className="social-container">
      {/* Image Section */}
      <div className="social-image" style={{ height: '90vh', width: '100%', overflow: 'hidden' }}>
        <img 
          src={carrer} 
          alt="Social Skills" 
          className="img-fluid" 
          style={{ height: '100%', width: '100%', objectFit: 'cover' }} 
        />
      </div>

      {/* Content Section */}
      <div className="social-content container mt-4">
        {/* Introduction Section */}
        <div className="social-intro">
          <h2>Social Skills Mentorship Program</h2>
          <p>
            The Social Skills Mentorship Program is designed to help individuals enhance
            their interpersonal communication, build better relationships, and develop
            emotional intelligence. Whether you’re looking to improve your social presence,
            networking abilities, or team collaboration, this program provides essential
            guidance and practice to improve your social interactions. Social skills are critical in both personal and professional settings. By mastering
            these skills, you will improve your relationships, build trust, and become a more
            confident communicator. This mentorship program offers you hands-on practice,
            expert guidance, and tailored feedback to ensure that you become proficient in
            every aspect of social interaction.
          </p>
        </div>

        {/* Goals Section */}
        <div className="social-goals">
          <h3>Program Goals</h3>
          <ul>
            <li>Improve interpersonal communication and listening skills</li>
            <li>Build strong, meaningful relationships</li>
            <li>Enhance networking and collaboration in professional settings</li>
            <li>Develop emotional intelligence and empathy</li>
            <li>Master conflict resolution and problem-solving in social situations</li>
            <li>Increase confidence in social interactions</li>
          </ul>
        </div>

        {/* Skills You Will Learn Section */}
        <div className="social-skills">
          <h3>Skills You Will Learn</h3>
          <ul>
            <li>Active listening and empathy</li>
            <li>Effective verbal and non-verbal communication</li>
            <li>Conflict resolution and negotiation techniques</li>
            <li>Networking strategies for personal and professional growth</li>
            <li>Building rapport and trust in relationships</li>
            <li>Confidence and assertiveness in social situations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SocialSkills;
