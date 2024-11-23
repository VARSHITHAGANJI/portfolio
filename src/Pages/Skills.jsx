

// // src/pages/Skills.js
// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import {
//   SiPython, SiJavascript, SiCplusplus, SiMysql, SiMongodb, SiPostgresql, SiLatex, SiTensorflow, SiPytorch, SiReact
// } from 'react-icons/si';
// import { FaLinux, FaGitAlt, FaGithub, FaJava, FaMarkdown, FaDatabase, FaRulerCombined, FaLaptopCode, FaBrain } from 'react-icons/fa';
// import { IoLogoJavascript } from 'react-icons/io5';
// import '../styles/Skills.css';

// const skillsData = [
//   {
//     category: 'Languages',
//     icon: <FaLaptopCode />,
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
//     icon: <FaLaptopCode />,
//     skills: [
//       { name: 'Tensorflow', icon: <SiTensorflow /> },
//       { name: 'Pytorch', icon: <SiPytorch /> },
//       { name: 'React.js', icon: <SiReact /> },
//       { name: 'Node.js', icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/anaconda--v2.png" alt="anaconda--v2"/> },
//     ],
//   },
//   {
//     category: 'Databases',
//     icon: <FaDatabase />,
//     skills: [
//       { name: 'MySQL', icon: <SiMysql /> },
//       { name: 'MongoDB', icon: <SiMongodb /> },
//       { name: 'PostgresSQL', icon: <SiPostgresql /> },
//     ],
//   },
//   {
//     category: 'Developer Tools',
//     icon: <FaRulerCombined />,
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
//     icon: <FaRulerCombined />,
//     skills: [
//       'Probability and Statistics',
//       'Linear Algebra',
//       'Convex Optimisation',
//     ],
//   },
//   {
//     category: 'CS',
//     icon: <FaLaptopCode />,
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
//     icon: <FaBrain />,
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
//           <Col key={index} md={3} >
//             <Card className="skill-card h-100">
//               <Card.Body>
//                 <Card.Title className="skill-card-title">
//                   {category.icon} <span className="skill-category-name">{category.category}</span>
//                 </Card.Title>
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
//             <Card className="skill-card h-100">
//               <Card.Body>
//                 <Card.Title className="skill-card-title">
//                   {category.icon} <span className="skill-category-name">{category.category}</span>
//                 </Card.Title>
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
import React, { useState } from 'react';
import '../styles/Skills.css';

const skillsData = [
  { category: 'Programming Languages', skills: ['C', 'C++', 'Python', 'JavaScript', 'SQL'] },
  { category: 'Machine Learning Frameworks', skills: [ 'PyTorch', 'Hugging Face','TensorFlow'] },
  { category: 'Development Tools', skills: ['Linux','Git', 'Bash', 'VS Code', 'LaTeX'] },
  { category: 'Systems Knowledge', skills: ['MLIR', 'LLVM', 'Parallel Computing', 'Distributed Systems'] },
  { category: 'AI Expertise', skills: ['LLMs', 'Deep Learning', 'Explainability', 'Optimization'] },
];

const coursesData = [
  {
    category: 'Computer Science',
    courses: [
      { name: 'Data Structures and Algorithms', description: 'Explored advanced problem-solving and optimization.' },
      { name: 'Operating Systems', description: 'Learned process management, memory, and file systems.' },
      { name: 'Compiler Design', description: 'Built a mini compiler using flex and bison tools.' },
    ],
  },
  {
    category: 'Mathematics',
    courses: [
      { name: 'Linear Algebra', description: 'Focused on matrix decompositions and eigenvalues.' },
      { name: 'Probability', description: 'Studied probability distributions and random variables.' },
      { name: 'Convex Optimization', description: 'Solved optimization problems in ML contexts.' },
    ],
  },
  {
    category: 'AI and Machine Learning',
    courses: [
      { name: 'Deep Learning', description: 'Worked on CNNs, RNNs, and GANs for vision and NLP tasks.' },
      { name: 'Reinforcement Learning', description: 'Implemented policy gradients for robotic control.' },
      { name: 'Explainability in ML', description: 'Analyzed models with SHAP and LIME.' },
    ],
  },
];

const Skills = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelect = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const allTags = [...new Set(skillsData.flatMap((cat) => cat.skills))];

  return (
    <div className="skills-courses-page">

      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-container">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className='skills-h3'>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="courses-section">
        <h2>Courses</h2>
        <div className="courses-container">
          {coursesData.map((category, index) => (
            <div key={index} className="course-category">
              <h3>{category.category}</h3>
              {category.courses.map((course, idx) => (
                <div key={idx} className="course-item">
                  <h4>{course.name}</h4>
                  <p>{course.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default Skills;
