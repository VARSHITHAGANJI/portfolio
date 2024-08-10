// src/components/Education.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import '../styles/Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>
      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: 'rosybrown', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science</h3>
          <h4 className="vertical-timeline-element-subtitle">XYZ University</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2016"
          iconStyle={{ background: 'rosybrown', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">High School Diploma</h3>
          <h4 className="vertical-timeline-element-subtitle">ABC High School</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2016"
          iconStyle={{ background: 'rosybrown', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">High School Diploma</h3>
          <h4 className="vertical-timeline-element-subtitle">ABC High School</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis.</p>
        </VerticalTimelineElement>
        {/* Add more timeline items as needed */}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
