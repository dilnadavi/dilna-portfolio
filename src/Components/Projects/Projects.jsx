import React from 'react'
import './Projects.css'
import projectsLogo from '../../assets/projects_logo.png'
import sectionsInsightPreview from '../../assets/sectionsinsight.png'
import typeScriptLogo from '../../assets/stack_logos/typescript.png'
import mochaLogo from '../../assets/stack_logos/mocha.png'

const Projects = () => {
  return (
<div className="projects-container">
<div className="projects-header">
  <div className="projects-line"></div>
  <img src={projectsLogo} className="projects-header-logo" />
  <div className="projects-line"></div>
</div>

  <div className="project-card">
    <div className="project-info">
      <h2 className='project-header-text'>UBC Sections Insight!</h2>
      <p className='project-description'>
        A website to view aggregations of historical UBC course data to aid students in making educated decisions in course selection.
      </p>

      <div className="tech-row">
        <button className="tech-tag ts">
            <img src={typeScriptLogo} style={{ width: '20px', height: '20px' }}/>
            TypeScript</button>
        <button className="tech-tag mocha">
          <img src={mochaLogo} style={{ width: '20px', height: '20px' }}/>
          Mocha
          </button>
        <button className="tech-tag chai">Chai</button>
        <button className="tech-tag node">Node.js</button>
      </div>
    </div>

    <div className="project-preview">
      <img src={sectionsInsightPreview} />
    </div>
  </div>
  </div>

  )
}

export default Projects