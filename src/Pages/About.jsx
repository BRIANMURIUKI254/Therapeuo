import '../Styles/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <section className="about-section d-flex align-items-center justify-content-center text-white">
      {/* Bootstrap classes added */}
      <div className="container text-center">
        <h2 className="mb-4">About Us</h2> {/* Bootstrap margin-bottom utility */}
        <h3 className="mb-3">WHAT IS DAYS OF LIGHT (D.O.L)?</h3>
        <p className="lead"> {/* Bootstrap lead class for slightly larger text */}
          Days of Light is a movement that seeks to see the word of God prevail and be glorified
          amongst men through the teaching and demonstration of the wisdom and power of God
          which is Jesus Christ our Lord. We stand to be counted amongst many in the massive move
          of the spirit that God is doing in this tail-end of the end of the days, where the earth shall be
          filled with the knowledge of the glory of the Lord as the waters cover the sea.
        </p>
        <h4 className="mt-4 mb-3">VISION</h4> {/* Bootstrap margin-top and margin-bottom utility */}
        <p className="lead">
          To stand as witnesses of the Godhead as a communion of believers.
        </p>
        <h5 className="mt-4 mb-3">MISSION</h5>
        <p className="lead">
          Groom men in God by the ministry of the word and prayer that they be counted in the
          end-time army of our Lord Jesus
        </p>
        <h6 className="mt-4 mb-3">MINISTRY VERSES</h6>
        <p className="lead">
          (Eph 1:17-20 KJV)
        </p>
      </div>
    </section>
  );
};

export default About;
