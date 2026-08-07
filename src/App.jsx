
// importing React and useState modules. 
import React, {useState} from 'react';
// importing styling
import './App.css';
// import './index.css';
// import './styles/Header.css';
// import './styles/Sections.css';
// import './styles/Skills.css';
// import './styles/Education.css';
// import './styles/Projects.css';
// import './styles/Extra.css';
// import './styles/Panel.css';
// import './styles/Footer.css';
// import './styles/Responsive.css';


// importing components
// keep this empty for now'
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Extra from './components/Extra';
import Footer from './components/Footer';

// import Helmet
import { Helmet } from 'react-helmet'

// main function 
function App(){

  return(
    <div className='App'>
      <Helmet>
        <title>✨ Portfolio • Meth Wijesundara</title>
      </Helmet>
      <Header />
      {/* <Header>
      </Header> */}
      <Skills />
      <Education />
      <Projects /> 
      <Extra />
      <MusicPlayer />
      <Footer />
    </div>
  )
}

export default App;