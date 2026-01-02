import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Header from './Components/Header/Header.jsx'
import Roadmap from './Components/Roadmap/Roadmap.jsx'
import Projects from './Components/Projects/Projects.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Roadmap />
      <Projects/>
    </div>
  )
}

export default App