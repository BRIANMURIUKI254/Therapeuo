
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import picture1 from '../assets/Photos/picture1.jpg';
import code3 from '../assets/code3.jpg';
// import '../Styles/Comunity.css';
import community from '../assets/Photos/community.jpeg';
import community2 from '../assets/Photos/community2.jpeg';

const CommunityEngagement = () => {
    return (
        <div className="container my-5">
            <div className="row mb-4 align-items-center">
                <div className="col-md-6">
                    <img src={picture1} className="img-fluid rounded" alt="Community Engagement Program" />
                </div>
                <div className="col-md-6">
                    <h2>Community Engagement Program</h2>
                    <p>
                        Our Community Engagement Program is designed to foster social responsibility and encourage active
                        involvement in local and global communities. This program equips you with the skills needed to
                        collaborate with diverse groups, lead community projects, and create a positive impact in the world.
                        Whether you are passionate about environmental sustainability, social justice, or improving local
                        neighborhoods, this program is your gateway to making a difference.
                    </p>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6">
                    <h3>Program Benefits</h3>
                    <ul className="list-unstyled">
                        <li>Develop leadership and project management skills</li>
                        <li>Build strong connections with community organizations</li>
                        <li>Gain hands-on experience in community outreach and advocacy</li>
                        <li>Enhance your communication and teamwork abilities</li>
                        <li>Make a lasting impact in local and global communities</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <img src={community} className="img-fluid rounded" alt="Benefits of the program" />
                </div>
            </div>

            <div className="row mb-4 align-items-center">
                <div className="col-md-6">
                    <img src={code3} className="img-fluid rounded" alt="Skills learned in the program" />
                </div>
                <div className="col-md-6">
                    <h3>What You Will Learn</h3>
                    <ul className="list-unstyled">
                        <li>Community project planning and implementation</li>
                        <li>Effective communication and conflict resolution</li>
                        <li>Cultural competence and working with diverse groups</li>
                        <li>Volunteer recruitment and team building strategies</li>
                        <li>Advocacy and influencing public policy</li>
                        <li>Fundraising and resource management for community initiatives</li>
                    </ul>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-md-6">
                    <h3>Why Choose Our Community Engagement Program?</h3>
                    <p>
                        Community engagement is essential for fostering positive social change and addressing key issues in
                        society. By joining this program, you will have the opportunity to influence meaningful outcomes and
                        become a catalyst for progress. Whether you are advocating for environmental sustainability, human rights,
                        or local development, your actions will contribute to building a better future for everyone. This program
                        helps you become a leader in your community and offers personal growth while making a real-world impact.
                    </p>
                </div>
                <div className="col-md-6">
                    <img src={community2} className="img-fluid rounded" alt="Why choose this program?" />
                </div>
            </div>
        </div>
    );
};

export default CommunityEngagement;
