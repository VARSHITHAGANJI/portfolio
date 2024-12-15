// src/data/projects.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython } from '@fortawesome/free-brands-svg-icons';



const projectData = [
  {
    id: '1',
    title: 'Sentiment Analysis of IMDB Reviews',
    description: "Performed preprocessing techniques for cleaning the data and embedding the text to integer sequence by tokenization. \
    \n Researched various RNN models for analyzing the polarity of the review and classifying it as positive or \
negative.",
    tags: [ 'Tensorflow','Pandas','nltk'],
    timeline: '2022-04-15',
    links:[{name: 'Source Code',url: 'https://github.com/VARSHITHAGANJI/SENTIMENT-ANALYSIS-IMDB-REVIEWS'}],
    detailPage: '/project/1',
    icon: <FontAwesomeIcon icon={faPython}/>
  },
  {
    id: '2',
    title: ' Relational database modeling and design for research papers',
    description: "PostgreSQL was used to build the database \’Research Papers\’.\n \
Created an ER diagram, preprocessed the data thoroughly, and formatted it to CSV files.\n \
Used a parser(python code) to load 6 lakh research paper entries from a text file into the database.",
    tags: ['Python', 'PostgresQL', 'Linux'],
    timeline: '2022-10-15',
    links:[{name: 'Source Code',url: 'https://github.com/VARSHITHAGANJI/CS3563'}],
    detailPage: '/project/2',
    icon: <FontAwesomeIcon icon={faPython}/>
  },
  {
    id: '3',
    title: 'Investigating XAI models for Vision Transformers',
    description: "Explored gradient-based visualizations for ViT models for classification tasks.\n \
Experimented with new techniques to improve SOTA methods and analyzed the faithfulness of explanations.",
    tags: ['Transformers', 'HuggingFace', 'Latex'],
    timeline: '2023-12-15',
    links:[{name: 'Source Code',url: 'https://github.com/vojeswitha/XML_AI51020/tree/main/xml_code'}],
    detailPage: '/project/3',
    icon: <FontAwesomeIcon icon={faPython}/>
  },
  {
    id: '4',
    title: 'Yolov3 implementation with voice feedback',
    description: "Implemented Yolov3 architecture in TensorFlow and trained on coco dataset using pretrained weights.\n And used gTTs library\
    to convert predications to voice",
    tags: ['Tensorflow'],
    timeline: '2022-12-15',
    links:[{name: 'Source Code',url: 'https://github.com/Rahul27n/Deep_Learning_Project'}],
    detailPage: '/project/3',
    icon: <FontAwesomeIcon icon={faPython}/>
  }

  // Add more projects as needed
];

export default projectData;
