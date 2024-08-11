// // src/pages/Skills.js
// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import {
//   SiPython, SiJavascript, SiCplusplus, SiMysql, SiMongodb, SiPostgresql, SiLatex, SiTensorflow, SiPytorch, SiReact
// } from 'react-icons/si';
// import { FaLinux, FaGitAlt, FaGithub, FaJava, FaMarkdown, FaDatabase } from 'react-icons/fa';
// import { IoLogoJavascript } from 'react-icons/io5';
// import '../styles/Skills.css';

// const skillsData = [
//   {
//     category: 'Languages',
//     skills: [
//       { name: 'C++', icon: <SiCplusplus /> },
//       { name: 'C', icon: <FaJava /> },
//       { name: 'Python', icon: <SiPython /> },
//       { name: 'Javascript', icon: <IoLogoJavascript /> },
//       { name: 'SQL', icon: <FaDatabase /> },
//       { name: 'Matlab', icon: <FaDatabase /> },
//       { name: 'Bash', icon: <FaLinux /> },
//     ],
//   },
//   {
//     category: 'Frameworks',
//     skills: [
//       { name: 'Tensorflow', icon: <SiTensorflow /> },
//       { name: 'Pytorch', icon: <SiPytorch /> },
//       { name: 'React.js', icon: <SiReact /> },
//       { name: 'Node.js', icon: <img width="48" height="48" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs"/> },
//     ],
//   },
//   {
//     category: 'Databases',
//     skills: [
//       { name: 'MySQL', icon: <SiMysql /> },
//       { name: 'MongoDB', icon: <SiMongodb /> },
//       { name: 'PostgresSQL', icon: <SiPostgresql /> },
//     ],
//   },
//   {
//     category: 'Developer Tools',
//     skills: [
//       { name: 'Linux', icon: <FaLinux /> },
//       { name: 'Git', icon: <FaGitAlt /> },
//       { name: 'GitHub', icon: <FaGithub /> },
//       { name: 'LateX', icon: <SiLatex /> },
//       { name: 'Markdown', icon: <FaMarkdown /> },
//       { name: 'Anaconda', icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/anaconda--v2.png" alt="anaconda--v2"/> },
//     ],
//   },
// ];

// const mathCSAI = [
//   {
//     category: 'Math',
//     skills: [
//       'Probability and Statistics',
//       'Linear Algebra',
//       'Convex Optimisation',
//     ],
//   },
//   {
//     category: 'CS',
//     skills: [
//       'Algorithms',
//       'Computer Architecture',
//       'Operating Systems',
//       'Compiler Engineering',
//       'Cryptology',
//     ],
//   },
//   {
//     category: 'AI',
//     skills: [
//       'Deep Learning',
//       'Reinforcement Learning',
//       'Explainability in ML',
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <Container className="skills-container">
//       <h2 className="skills-heading">My Skills</h2>
//       <p className="skills-intro">Here are some of the programming languages, frameworks, databases, and tools I have experience with:</p>
//       <Row>
//         {skillsData.map((category, index) => (
//           <Col key={index} md={3}>
//             <Card className="skill-card">
//               <Card.Body>
//                 <Card.Title className="card-title">{category.category}</Card.Title>
//                 <Card.Text>
//                   <ul className="skill-list">
//                     {category.skills.map((skill, idx) => (
//                       <li key={idx}>
//                         {skill.icon} <span className="skill-name">{skill.name}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       <Row className="mt-4">
//         {mathCSAI.map((category, index) => (
//           <Col key={index} md={4}>
//             <Card className="skill-card">
//               <Card.Body>
//                 <Card.Title className="card-title">{category.category}</Card.Title>
//                 <Card.Text>
//                   <ul className="skill-list">
//                     {category.skills.map((skill, idx) => (
//                       <li key={idx}>
//                         <span className="skill-name">{skill}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Skills;

// src/pages/Skills.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  SiPython, SiJavascript, SiCplusplus, SiMysql, SiMongodb, SiPostgresql, SiLatex, SiTensorflow, SiPytorch, SiReact
} from 'react-icons/si';
import { FaLinux, FaGitAlt, FaGithub, FaJava, FaMarkdown, FaDatabase, FaRulerCombined, FaLaptopCode, FaBrain } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import '../styles/Skills.css';

const skillsData = [
  {
    category: 'Languages',
    icon: <FaLaptopCode />,
    skills: [
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C', icon: <FaJava /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Javascript', icon: <IoLogoJavascript /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'Matlab', icon: <FaDatabase /> },
      { name: 'Bash', icon: <FaLinux /> },
    ],
  },
  {
    category: 'Frameworks',
    icon: <FaLaptopCode />,
    skills: [
      { name: 'Tensorflow', icon: <SiTensorflow /> },
      { name: 'Pytorch', icon: <SiPytorch /> },
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Node.js', icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/anaconda--v2.png" alt="anaconda--v2"/> },
    ],
  },
  {
    category: 'Databases',
    icon: <FaDatabase />,
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgresSQL', icon: <SiPostgresql /> },
    ],
  },
  {
    category: 'Developer Tools',
    icon: <FaRulerCombined />,
    skills: [
      { name: 'Linux', icon: <FaLinux /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'LateX', icon: <SiLatex /> },
      { name: 'Markdown', icon: <FaMarkdown /> },
      { name: 'Anaconda', icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/anaconda--v2.png" alt="anaconda--v2"/> },
    ],
  },
];

const mathCSAI = [
  {
    category: 'Math',
    icon: <FaRulerCombined />,
    skills: [
      'Probability and Statistics',
      'Linear Algebra',
      'Convex Optimisation',
    ],
  },
  {
    category: 'CS',
    icon: <FaLaptopCode />,
    skills: [
      'Algorithms',
      'Computer Architecture',
      'Operating Systems',
      'Compiler Engineering',
      'Cryptology',
    ],
  },
  {
    category: 'AI',
    icon: <FaBrain />,
    skills: [
      'Deep Learning',
      'Reinforcement Learning',
      'Explainability in ML',
    ],
  },
];

const Skills = () => {
  return (
    <Container className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <p className="skills-intro">Here are some of the programming languages, frameworks, databases, and tools I have experience with:</p>
      <Row>
        {skillsData.map((category, index) => (
          <Col key={index} md={3} >
            <Card className="skill-card h-100">
              <Card.Body>
                <Card.Title className="skill-card-title">
                  {category.icon} <span className="skill-category-name">{category.category}</span>
                </Card.Title>
                <Card.Text>
                  <ul className="skill-list">
                    {category.skills.map((skill, idx) => (
                      <li key={idx}>
                        {skill.icon} <span className="skill-name">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        {mathCSAI.map((category, index) => (
          <Col key={index} md={4}>
            <Card className="skill-card h-100">
              <Card.Body>
                <Card.Title className="skill-card-title">
                  {category.icon} <span className="skill-category-name">{category.category}</span>
                </Card.Title>
                <Card.Text>
                  <ul className="skill-list">
                    {category.skills.map((skill, idx) => (
                      <li key={idx}>
                        <span className="skill-name">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
