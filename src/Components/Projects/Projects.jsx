import React from 'react'
import './Projects.css'
import projectsLogo from '../../assets/webp/projects_logo_alt.webp'

import sectionsInsightPreview from '../../assets/webp/sectionsinsight.webp'
import typeScriptLogo from '../../assets/stack_logos/webp/typescript.webp'
import mochaLogo from '../../assets/stack_logos/webp/mocha.webp'
import chaiLogo from '../../assets/stack_logos/webp/chai.webp'
import nodeLogo from '../../assets/stack_logos/webp/nodejs.webp'

import basilPreview from '../../assets/webp/basil.webp'
import javaLogo from '../../assets/stack_logos/webp/java.webp'
import swingLogo from '../../assets/stack_logos/webp/swing.webp'
import junitLogo from '../../assets/stack_logos/webp/junit.webp'

import biomePreview from '../../assets/webp/biome.webp'
import javaScriptLogo from '../../assets/stack_logos/webp/javascript.webp'
import expressLogo from '../../assets/stack_logos/webp/express.webp'
import oracleLogo from '../../assets/stack_logos/webp/oracle.webp'
import htmlLogo from '../../assets/stack_logos/webp/html.webp'
import cssLogo from '../../assets/stack_logos/webp/css.webp'

import watchDogPreview from '../../assets/webp/watchdog.webp'
import pythonLogo from '../../assets/stack_logos/webp/python.webp'
import fastapiLogo from '../../assets/stack_logos/webp/fastapi.svg'
import pytorchLogo from '../../assets/stack_logos/webp/pytorch.webp'
import sklearnLogo from '../../assets/stack_logos/webp/scikitlearn.webp'
import geminiLogo from '../../assets/stack_logos/webp/gemini.webp'
import linkIcon from '../../assets/webp/link.svg'

const Projects = () => {
  const [index, setIndex] = React.useState(0);
  const [animKey, setAnimKey] = React.useState(0);

  const handleDotClick = (i) => {
    setIndex(i);
    setAnimKey(prev => prev + 1);
  };

  const projects = [
    <div className="project-card">
      <div className="project-info">
        <h2 className='project-header-text'>
          Watchdog
          <a href="https://devpost.com/software/watchdog-0kgj53" target="_blank" rel="noopener noreferrer">
            <img src={linkIcon} width="15" height="15" />
          </a>
        </h2>
        <p className='project-description'>
          A browser extension that "sniffs" out suspicious patterns in chat messages with a trained ML model that identifies linguistic patterns common in fraud.
        </p>
        <div className="tech-row">
          <button className="tech-tag js"><img src={javaScriptLogo}/>JavaScript</button>
          <button className="tech-tag python"><img src={pythonLogo}/>Python</button>
          <button className="tech-tag fastapi"><img src={fastapiLogo}/>FastAPI</button>
          <button className="tech-tag pytorch"><img src={pytorchLogo}/>PyTorch</button>
          <button className="tech-tag sklearn"><img src={sklearnLogo}/>Scikit-learn</button>
          <button className="tech-tag html"><img src={htmlLogo}/>HTML</button>
          <button className="tech-tag css"><img src={cssLogo}/>CSS</button>
          <button className="tech-tag gemini"><img src={geminiLogo}/>Gemini API</button>
        </div>
      </div>
      <div className="project-preview">
        <img className='watchdog' src={watchDogPreview} />
      </div>
    </div>,

    <div className="project-card">
      <div className="project-info">
        <h2 className='project-header-text'>UBC Sections Insight!</h2>
        <p className='project-description'>
          A website to view aggregations of historical UBC course data to aid students in making educated decisions in course selection.
        </p>
        <div className="tech-row">
          <button className="tech-tag ts"><img src={typeScriptLogo}/>TypeScript</button>
          <button className="tech-tag mocha"><img src={mochaLogo}/>Mocha</button>
          <button className="tech-tag chai"><img src={chaiLogo}/>Chai</button>
          <button className="tech-tag node"><img src={nodeLogo}/>Node.js</button>
          <button className="tech-tag express"><img src={expressLogo}/>Express</button>
          <button className="tech-tag html"><img src={htmlLogo}/>HTML</button>
          <button className="tech-tag css"><img src={cssLogo}/>CSS</button>
        </div>
      </div>
      <div className="project-preview">
        <img className='sectionsinsight' src={sectionsInsightPreview} />
      </div>
    </div>,

    <div className="project-card">
      <div className="project-info">
        <h2 className='project-header-text'>Query B.C. Biomes</h2>
        <p className='project-description'>
          A website that allows students to query a B.C. biome database and visualize SQL commands throughout the process.
        </p>
        <div className="tech-row">
          <button className="tech-tag js"><img src={javaScriptLogo}/>JavaScript</button>
          <button className="tech-tag express"><img src={expressLogo}/>Express</button>
          <button className="tech-tag oracle"><img src={oracleLogo}/>Oracle</button>
          <button className="tech-tag html"><img src={htmlLogo}/>HTML</button>
          <button className="tech-tag css"><img src={cssLogo}/>CSS</button>
          <button className="tech-tag node"><img src={nodeLogo}/>Node.js</button>
        </div>
      </div>
      <div className="project-preview">
        <img className='biome' src={biomePreview} />
      </div>
    </div>,

    <div className="project-card">
      <div className="project-info">
        <h2 className='project-header-text'>Basil</h2>
        <p className='project-description'>
          A desktop application that enables users to browse public recipes using multiple criteria, add personal recipes, and organize them into saved collections.
        </p>
        <div className="tech-row">
          <button className="tech-tag java"><img src={javaLogo}/>Java</button>
          <button className="tech-tag junit"><img src={junitLogo}/>JUnit</button>
          <button className="tech-tag swing"><img src={swingLogo}/>Swing</button>
        </div>
      </div>
      <div className="project-preview">
        <img className='basil' src={basilPreview} />
      </div>
    </div>
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <div className="projects-line"></div>
        <img src={projectsLogo} className="projects-header-logo" />
        <div className="projects-line"></div>
      </div>

      <div key={animKey} className="slide-in">
        {projects[index]}
      </div>

      <div className="dots-container">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`dot ${index === i ? "active-dot" : ""}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
