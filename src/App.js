import './App.scss';
import MainSection from './components/MainSection';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailSection from './components/DetailSection';
import Footer from './components/Footer';
import ProjectsContainer from './components/ProjectsContainer';



const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element= {<MainSection />} />
          <Route path="/details/:project" element={<DetailSection />} />
          <Route path="/projects" element={<ProjectsContainer />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
