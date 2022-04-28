import './App.scss';
import MainSection from './components/MainSection/MainSection';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectsContainer from './components/Projects/ProjectsContainer';
import Context from './Context/Context'
import { useState } from 'react';
import About from './components/About/About';
import SkillsContainer from './components/SkillsContainer/SkillsContainer';
import Contact from './components/Contact/Contact'
import Huellitas from './components/Huellitas/Huellitas';



const App = () => {
  const [language, setLanguage] = useState('en');
  const [scrollAvailable, setScrollAvailable] = useState(true)

  const context = {
    language: language,
    setLanguage: setLanguage,
  }


  console.log(window.innerHeight)
  window.onscroll = () => {
    if ((document.body.scrollHeight) - window.scrollY <= window.innerHeight) {
      setScrollAvailable(false)
    }
  }

  document.documentElement.lang = context.language;

  return (
    <Context.Provider value={context}>
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          {scrollAvailable && <Huellitas />}
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/projects" element={<ProjectsContainer />} />
            <Route path="/about" element={<About />} />
            <Route path='/skills' element={<SkillsContainer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;
