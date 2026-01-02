import React from 'react'
import './Projects.css'
import projectsLogo from '../../assets/projects_logo.png'

import sectionsInsightPreview from '../../assets/sectionsinsight.png'
import typeScriptLogo from '../../assets/stack_logos/typescript.png'
import mochaLogo from '../../assets/stack_logos/mocha.png'
import chaiLogo from '../../assets/stack_logos/chai.png'
import nodeLogo from '../../assets/stack_logos/nodejs.png'

import basilPreview from '../../assets/basil.png'
import javaLogo from '../../assets/stack_logos/java.png'
import swingLogo from '../../assets/stack_logos/swing.png'
import junitLogo from '../../assets/stack_logos/junit.webp'

import biomePreview from '../../assets/biome.png'
import javaScriptLogo from '../../assets/stack_logos/javascript.png'
import expressLogo from '../../assets/stack_logos/express.png'
import oracleLogo from '../../assets/stack_logos/oracle.png'
import htmlLogo from '../../assets/stack_logos/html.png'
import cssLogo from '../../assets/stack_logos/css.webp'

const Projects = () => {
  const [index, setIndex] = React.useState(0);

  const projects = [
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

      {projects[index]}

      <div className="dots-container">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`dot ${index === i ? "active-dot" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
