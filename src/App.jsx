
// importing React and useState modules. 
import React, {useState} from 'react';
// importing styling
// import './App.css';
import './Index.css';
import './styles/Header.css';
import './styles/Sections.css';
import './styles/Skills.css';
import './styles/Education.css';
import './styles/Projects.css';
import './styles/Extra.css';
import './styles/Panel.css';
import './styles/Footer.css';
import './styles/Responsive.css';


// importing components
// keep this empty for now'
import Header from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectPanel from './components/ProjectPanel';
import Extra from './components/Extra';
import Footer from './components/Footer';


// main function 
function App(){
  // constants. i think there are some objects here.
  // const[isPanelOpen, setIsPanelOpen] = useState(false)
  // const [selectedProject, setSelectedProject] = useState(null);

  // const openPanel
  return(
    <div className='App'>
      <Header />
      <Skills />
      <Education />
      <Projects/>
      <ProjectPanel />
      <Extra />
      <Footer />
    </div>
  )
}

export default App;