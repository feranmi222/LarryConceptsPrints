// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Quotes from '../pages/Quotes';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
