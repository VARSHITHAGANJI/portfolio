// src/data/projects.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython } from '@fortawesome/free-brands-svg-icons';



const projectData = [
  {
    id: '1',
    title: 'Project One',
    description: 'This is the description for project one.',
    tags: ['React', 'JavaScript'],
    timeline: '2023-05-01',
    links:[{name: 'Source Code',url: 'https://github.com/yourusername/project-one'}],
    detailPage: '/project/1',
    icon: <FontAwesomeIcon icon={faPython}/>
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'This is the description for project two.',
    tags: ['Node.js', 'Express'],
    timeline: '2022-10-15',
    links:[{name: 'Source Code',url: 'https://github.com/yourusername/project-one'}],
    detailPage: '/project/2',
    icon: <FontAwesomeIcon icon={faPython}/>
  },
  // Add more projects as needed
];

export default projectData;
