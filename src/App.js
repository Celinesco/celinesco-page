import './App.scss';
import MainSection from './components/MainSection';
import NavBar from './components/NavBar';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import DetailSection from './components/DetailSection';
import Footer from './components/Footer';



const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="*" element= {<MainSection />} />
          <Route path="/details/:project" element={<DetailSection />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
