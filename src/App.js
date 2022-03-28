import './App.scss';
import MainSection from './components/MainSection';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailSection from './components/DetailSection/DetailSection';
import Footer from './components/Footer/Footer';
import ProjectsContainer from './components/Projects/ProjectsContainer';
import Context from './Context/Context'
import {useState } from 'react';
import About from './components/About/About';



const App = () => {
  const [language, setLanguage] = useState('en');
  const [lightTheme, setLightTheme] = useState(false);

  const context = {
    language: language,
    setLanguage: setLanguage,
    lightTheme: lightTheme,
    setLightTheme: setLightTheme,
  }

  document.documentElement.lang = context.language

  return (
    <Context.Provider value={context}>
      <BrowserRouter>
        <div className={lightTheme ? 'light-theme' : 'App'}>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/details/:project" element={<DetailSection />} />
            <Route path="/projects" element={<ProjectsContainer />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;
