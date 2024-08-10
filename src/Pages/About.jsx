// // src/components/About.js
// import React from 'react';
// import { Button, Container, Row, Col } from 'react-bootstrap';
// import '../styles/About.css';
// import myPhoto from '../assets/varshu.jpg';
// import resume from '../assets/Varshitha_Resume.pdf' // Replace with your actual photo path

// const About = () => {
//   return (
//     <Container className="about-container">
//       <Row className="justify-content-center align-items-center about-content">
//         <Col md={4} className="about-photo">
//           <img src={myPhoto} alt="My Photo" />
//         </Col>
//         <Col md={8} className="about-bio">
//           <h2>About Me</h2>
//           <p>
//             Hi, I'm [Your Name], a passionate developer with expertise in various technologies. 
//             I enjoy building impactful projects and constantly learning new skills. 
//             I have a background in [Your Background] and am currently focusing on [Your Current Focus].
//           </p>
//           <div className="resume-button">
//             <Button variant="primary" href={resume} target="_blank">
//               View Resume 
//             </Button>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default About;

// src/pages/About.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/About.css';
import myPhoto from '../assets/varshu.jpg'; // Ensure you have an image in the assets folder

const About = () => {
  return (
    <Container className="about-container">
      <Row className="justify-content-center align-items-center">
        <Col md={4} className="photo-column">
          <img src={myPhoto} alt="My Photo" className="my-photo" />
        </Col>
        <Col md={8} className="bio-column">
          <h2>About Me</h2>
          <p>
            [Your bio goes here. This section can include information about your background,
            experience, education, and any other details you want to share.]
          </p>
          <div className='button-group'>
          <Button variant="primary" href="path/to/resume.pdf" target="_blank" className="custom-button">
              View Resume Online
            </Button>
            <Button variant="secondary" href="mailto:youremail@example.com" className="custom-button">
              Contact Me
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

