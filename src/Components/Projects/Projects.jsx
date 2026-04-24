import React from 'react'
import './Projects.css'
import projectsLogo from '../../assets/webp/projects_logo_alt_serif.webp'

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

const projects = [
  {
    label: 'Watchdog',
    preview: watchDogPreview,
    previewClass: 'watchdog',
    title: 'Watchdog',
    link: 'https://devpost.com/software/watchdog-0kgj53',
    description: 'A browser extension that "sniffs" out suspicious patterns in chat messages with a trained ML model that identifies linguistic patterns common in fraud.',
    tags: [
      { label: 'JavaScript',   logo: javaScriptLogo, cls: 'js' },
      { label: 'Python',       logo: pythonLogo,     cls: 'python' },
      { label: 'FastAPI',      logo: fastapiLogo,    cls: 'fastapi' },
      { label: 'PyTorch',      logo: pytorchLogo,    cls: 'pytorch' },
      { label: 'Scikit-learn', logo: sklearnLogo,    cls: 'sklearn' },
      { label: 'HTML',         logo: htmlLogo,       cls: 'html' },
      { label: 'CSS',          logo: cssLogo,        cls: 'css' },
      { label: 'Gemini API',   logo: geminiLogo,     cls: 'gemini' },
    ],
  },
  {
    label: 'Sections Insight',
    preview: sectionsInsightPreview,
    previewClass: 'sectionsinsight',
    title: 'UBC Sections Insight!',
    link: null,
    description: 'A website to view aggregations of historical UBC course data to aid students in making educated decisions in course selection.',
    tags: [
      { label: 'TypeScript', logo: typeScriptLogo, cls: 'ts' },
      { label: 'Mocha',      logo: mochaLogo,      cls: 'mocha' },
      { label: 'Chai',       logo: chaiLogo,       cls: 'chai' },
      { label: 'Node.js',    logo: nodeLogo,       cls: 'node' },
      { label: 'Express',    logo: expressLogo,    cls: 'express' },
      { label: 'HTML',       logo: htmlLogo,       cls: 'html' },
      { label: 'CSS',        logo: cssLogo,        cls: 'css' },
    ],
  },
  {
    label: 'BC Biomes',
    preview: biomePreview,
    previewClass: 'biome',
    title: 'Query B.C. Biomes',
    link: null,
    description: 'A website that allows students to query a B.C. biome database and visualize SQL commands throughout the process.',
    tags: [
      { label: 'JavaScript', logo: javaScriptLogo, cls: 'js' },
      { label: 'Express',    logo: expressLogo,    cls: 'express' },
      { label: 'Oracle',     logo: oracleLogo,     cls: 'oracle' },
      { label: 'HTML',       logo: htmlLogo,       cls: 'html' },
      { label: 'CSS',        logo: cssLogo,        cls: 'css' },
      { label: 'Node.js',    logo: nodeLogo,       cls: 'node' },
    ],
  },
  {
    label: 'Basil',
    preview: basilPreview,
    previewClass: 'basil',
    title: 'Basil',
    link: null,
    description: 'A desktop application that enables users to browse public recipes using multiple criteria, add personal recipes, and organize them into saved collections.',
    tags: [
      { label: 'Java',  logo: javaLogo,  cls: 'java' },
      { label: 'JUnit', logo: junitLogo, cls: 'junit' },
      { label: 'Swing', logo: swingLogo, cls: 'swing' },
    ],
  },
]

const CARD_WIDTH = 200
const GAP = 14

const Projects = () => {
  const [index, setIndex] = React.useState(0)
  const [visible, setVisible] = React.useState(true)
  const [pillProgress, setPillProgress] = React.useState({ from: 0, to: 0, t: 0 })
  const scrollerRef = React.useRef(null)
  const scrollTimerRef = React.useRef(null)
  const indexRef = React.useRef(0)

  const updateIndex = (i) => {
    if (i === indexRef.current) return
    indexRef.current = i
    setVisible(false)
    setTimeout(() => { setIndex(i); setVisible(true) }, 180)
  }

  const handleScroll = () => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const stride = CARD_WIDTH + GAP
    const scrollerCenter = scroller.offsetWidth / 2
    const firstCard = scroller.children[0]
    if (!firstCard) return
    const firstCenter = firstCard.offsetLeft + CARD_WIDTH / 2

    const rawIndex = (scroller.scrollLeft + scrollerCenter - firstCenter) / stride
    const fromCard = Math.floor(rawIndex)
    const t = Math.max(0, Math.min(1, rawIndex - fromCard))

    setPillProgress({
      from: Math.max(0, Math.min(projects.length - 1, fromCard)),
      to:   Math.max(0, Math.min(projects.length - 1, fromCard + 1)),
      t,
    })

    clearTimeout(scrollTimerRef.current)
    scrollTimerRef.current = setTimeout(() => {
      const center = scroller.scrollLeft + scroller.offsetWidth / 2
      let closest = 0, minDist = Infinity
      Array.from(scroller.children).forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center)
        if (dist < minDist) { minDist = dist; closest = i }
      })
      // always reset pill to clean snapped state
      setPillProgress({ from: closest, to: closest, t: 0 })
      updateIndex(closest)
    }, 80)
  }

  const scrollToCard = (i) => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const card = scroller.children[i]
    if (!card) return
    const offset = card.offsetLeft - (scroller.offsetWidth - CARD_WIDTH) / 2
    scroller.scrollTo({ left: offset, behavior: 'smooth' })
    updateIndex(i)
  }

  const getPillWidth = (i) => {
    const CIRCLE = 8, PILL = 24
    const { from, to, t } = pillProgress
    if (from === to && i === from) return PILL
    if (i === from) return CIRCLE + (PILL - CIRCLE) * (1 - t)
    if (i === to)   return CIRCLE + (PILL - CIRCLE) * t
    return CIRCLE
  }

  const getPillColor = (i) => {
    const colors = [
      [248, 99,  76],
      [104, 196, 247],
      [184, 164, 214],
      [240, 150, 203],
    ]
    const gray = [208, 208, 208]
    const lerp = (a, b, x) => Math.round(a + (b - a) * x)
    const { from, to, t } = pillProgress

    const getColor = (idx) => {
      if (idx < 0 || idx >= colors.length) return gray
      return colors[idx]
    }

    if (from === to && i === from) {
      const c = getColor(i)
      return `rgb(${c.join(',')})`
    }
    if (i === from) {
      const c = getColor(i)
      const x = 1 - t
      return `rgb(${lerp(gray[0], c[0], x)}, ${lerp(gray[1], c[1], x)}, ${lerp(gray[2], c[2], x)})`
    }
    if (i === to) {
      const c = getColor(i)
      return `rgb(${lerp(gray[0], c[0], t)}, ${lerp(gray[1], c[1], t)}, ${lerp(gray[2], c[2], t)})`
    }
    return `rgb(${gray.join(',')})`
  }

  const active = projects[index]

  return (
    <div className="projects-container">
      <div className="projects-header">
        <div className="projects-line" />
        <img src={projectsLogo} className="projects-header-logo" alt="projects" />
        <div className="projects-line" />
      </div>

      <div className="scroller-row">
        <button
          className="arrow-btn arrow-left"
          onClick={() => scrollToCard(Math.max(0, index - 1))}
          disabled={index === 0}
          aria-label="Previous project"
        >
          ‹
        </button>

        <div className="projects-scroller" ref={scrollerRef} onScroll={handleScroll}>
          {projects.map((p, i) => (
            <div
              key={i}
              className={`project-card ${index === i ? 'card-active' : 'card-inactive'}`}
              onClick={() => scrollToCard(i)}
            >
              <img src={p.preview} alt={p.title} className={p.previewClass} loading="lazy" />
            </div>
          ))}
        </div>

        <button
          className="arrow-btn arrow-right"
          onClick={() => scrollToCard(Math.min(projects.length - 1, index + 1))}
          disabled={index === projects.length - 1}
          aria-label="Next project"
        >
          ›
        </button>
      </div>

      <div className={`project-details ${visible ? 'details-visible' : 'details-hidden'}`}>
        <h2 className="project-header-text">
          {active.title}
          {active.link && (
            <a href={active.link} target="_blank" rel="noopener noreferrer">
              <img src={linkIcon} width="15" height="15" alt="link" />
            </a>
          )}
        </h2>
        <p className="project-description">{active.description}</p>
        <div className="tech-row">
          {active.tags.map((t, i) => (
            <button key={i} className={`tech-tag ${t.cls}`}>
              <img src={t.logo} alt={t.label} loading="lazy" />
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-nav">
        {projects.map((p, i) => (
          <button
            key={i}
            className="nav-pill"
            style={{ width: getPillWidth(i), background: getPillColor(i) }}
            onClick={() => scrollToCard(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects