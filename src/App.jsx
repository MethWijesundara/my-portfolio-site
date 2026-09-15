
// importing React and useState modules. 
import React, {useState} from 'react';

// importing styling
import './App.css';
import './styles/Header.css';
import './styles/Skills.css';
import './styles/Education.css';
import './styles/Projects.css';
import './styles/ContactLinks.css';
import './styles/Extra.css';
import './styles/Footer.css';
import './styles/Responsive.css';
import "./styles/Navbar.css";


// importing components
// keep this empty for now'
import Navbar from './components/Navbar';
import NavMenu from './components/NavMenu';
import Header from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Extra from './components/Extra';
import Footer from './components/Footer';
import ContactLinks from './components/ContactLinks';

// import Helmet
import { Helmet } from 'react-helmet'

// main function 
function App(){

  // ENTER YOUR NAME HERE (FOR THE TITLE)
  const name = "Your name here"

  return(
    <div>

      <Helmet>
        <title>✨ Portfolio • {name}</title>
      </Helmet>
      
      <Navbar />

      <NavMenu className="NavMenu" />

      <Header />

      <ContactLinks />

      <Skills />

      <Education />

      <Projects /> 

      <Extra />

      <Footer />

    </div>
  )
}

export default App;