
// import {  } from 'lucide-react'
// import './App.css'
// import Experience from './component/Experience'
// import Hero from './component/Hero'
// import ProjectsSection from './component/Project'
// import Skill from './component/skill'
// import Contact from './component/Contact'
// import Footer from './component/Footer'
// import Email from './component/Email'

// function App() {

//   return (
//     <>
 
//  <Hero/>
// <Skill/>
// <ProjectsSection/>
// <Experience/>
// <Contact/>
// <Email/>
// <Footer/>

//     </>
//   )
// }

// export default App



import { Routes, Route } from 'react-router-dom'
import './App.css'

import Hero from './component/Hero'
import Skill from './component/skill'
import ProjectsSection from './component/Project'
import Experience from './component/Experience'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Resume from './component/Resume'

function App() {
  return (
    <>
      <Routes>
        {/* Route for Email page only */}
        <Route path="/resume" element={<Resume />} />
       
        {/* Home route that includes all other sections */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skill />
              <ProjectsSection />
              <Experience />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App
