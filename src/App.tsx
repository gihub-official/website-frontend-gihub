import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import Platform from './pages/Platform';
import Research from './pages/Research';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/research" element={<Research />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
