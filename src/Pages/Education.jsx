// src/components/Education.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import { IoMdBriefcase } from "react-icons/io";
import '../styles/Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">Experience and Education</h2>
      <VerticalTimeline lineColor='black'>
       <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024 - Present"
          iconStyle={{ background: 'rosybrown', color: '#fff' }}
          icon={<IoMdBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Algorithms and Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Ceremorphic Technologies</h4>
          {/* <p>Designed segmentation algorithms for lung segmentation as part of the preprocessing pipeline.</p>
          <p>Integrated workflow of machine learning pipelines in CT scan machines for lung tumor detection</p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2023"
          iconStyle={{ background: 'rosybrown', color: '#fff' }}
          icon={<IoMdBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Research Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Philips Innovation Center</h4>
          <p>Designed segmentation algorithms for lung segmentation as part of the preprocessing pipeline.</p>
          <p>Integrated workflow of machine learning pipelines in CT scan machines for lung tumor detection</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: 'rosybrown', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">BTech in AI</h3>
          <h4 className="vertical-timeline-element-subtitle">IIT Hyderabad</h4>
          <p>Activites: Epoch Club</p>
          <p>CGPA: 8.34</p>
        </VerticalTimelineElement>
        
        {/* Add more timeline items as needed */}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
