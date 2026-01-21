import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Header from './Components/Header/Header.jsx'
import Roadmap from './Components/Roadmap/Roadmap.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Extra from './Components/Extra/Extra.jsx'
import EmailTag from './Components/EmailTag/EmailTag.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
    <Navbar />
    <div className="page-wrapper">
      <div id="header"><Header /></div>
      <div id="roadmap"><Roadmap /></div>
      <div id="projects"><Projects /></div>
      <div id="extra"><Extra /></div>
      <EmailTag />
      <Footer />
    </div>
    </div>
  )
}

export default App