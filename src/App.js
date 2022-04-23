import './App.scss';
import MainSection from './components/MainSection';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailSection from './components/DetailSection/DetailSection';
import ProjectsContainer from './components/Projects/ProjectsContainer';
import Context from './Context/Context'
import { useState } from 'react';
import About from './components/About/About';
import Huellitas from './components/Huellitas';



const App = () => {
  const [language, setLanguage] = useState('en');
  const [lightTheme, setLightTheme] = useState(false);

  const context = {
    language: language,
    setLanguage: setLanguage,
    lightTheme: lightTheme,
    setLightTheme: setLightTheme,
  }

  document.documentElement.lang = context.language;

  return (
    <Context.Provider value={context}>
      <BrowserRouter>
        <div className={lightTheme ? 'light-theme' : 'App'}>
          <NavBar />
          <Huellitas />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/details/:project" element={<DetailSection />} />
            <Route path="/projects" element={<ProjectsContainer />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;
