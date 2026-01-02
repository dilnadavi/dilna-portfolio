import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Header from './Components/Header/Header.jsx'
import Roadmap from './Components/Roadmap/Roadmap.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Extra from './Components/Extra/Extra.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Roadmap />
      <Projects/>
      <Extra/>
    </div>
  )
}

export default App