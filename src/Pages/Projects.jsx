// src/pages/Projects.js
import React, { useState } from 'react';
// import { Container, Row, Col, Form } from 'react-bootstrap';
import { Container, Row, Col, Dropdown, DropdownButton , Button, Form } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Project from '../Components/Project';
import '../styles//Projects.css';
import projectData from '../data/projects';
import Select from 'react-select';
// // Example project data
// const projectData = [
//   // Add your project data here
//   {
//     id: '1',
//     title: 'Project One',
//     description: 'This is the description for project one.',
//     tags: ['React', 'JavaScript'],
//     tools: ['React', 'Bootstrap'],
//     skills: ['Front-end Development', 'UI Design'],
//     timeline: '2023-05-01',
//     githubLink: 'https://github.com/yourusername/project-one',
//     detailPage: '/project/1',
//   },
//   {
//     id: '2',
//     title: 'Project Two',
//     description: 'This is the description for project two.',
//     tags: ['Node.js', 'Express'],
//     tools: ['Node.js', 'Express'],
//     skills: ['Back-end Development', 'API Development'],
//     timeline: '2022-10-15',
//     githubLink: 'https://github.com/yourusername/project-two',
//     detailPage: '/project/2',
//   },
// ];


const Projects = () => {
    const [selectedTags, setSelectedTags] = useState([]);
  const [sortOption, setSortOption] = useState('recent');

  const allTags = [...new Set(projectData.flatMap(project => project.tags))];

  const handleTagChange = (selected) => {
    setSelectedTags(selected ? selected.map(option => option.value) : []);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const sortedProjects = [...projectData].sort((a, b) => {
    if (sortOption === 'recent') {
      return new Date(b.timeline) - new Date(a.timeline);
    }
    return new Date(a.timeline) - new Date(b.timeline);
  });

  const filteredProjects = sortedProjects.filter(project =>
    selectedTags.every(tag => project.tags.includes(tag))
  );

  const tagOptions = allTags.map(tag => ({ value: tag, label: tag }));


  return (
    <Container className="projects-container">
    <Row>
        <Col className="filter-sort-container">
          <Select
            isMulti
            options={tagOptions}
            onChange={handleTagChange}
            className="tag-select"
            placeholder="Filter by tags"
          />
          <DropdownButton
            id="dropdown-basic-button"
            title="Sort by"
            className="sort-dropdown"
          >
            <Dropdown.Item onClick={() => handleSortChange('recent')}>Most Recent</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange('oldest')}>Oldest</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row></Row>
      {/* <Row className='project-controls'>
        <Col md={4}>
          <Form.Group controlId="filter">
            <Form.Label>Filter by Tag</Form.Label>
            <Form.Control as="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="React">React</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Express">Express</option>
              <option value="Node.js">Node.js</option>
              
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="sortOrder">
            <Form.Label>Sort by Timeline</Form.Label>
            <Form.Control as="select" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row> */}
      <VerticalTimeline lineColor='black'>
        {filteredProjects.map((project, index) => (
          <VerticalTimelineElement key={index}  icon={project.icon} iconStyle={{ background: 'rosybrown', color: '#fff' }}>
            <Project {...project} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default Projects;
