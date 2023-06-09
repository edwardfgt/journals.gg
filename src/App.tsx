import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/home';
import Newsletters from './components/newsletters/newsletters';
import Navbar from './components/navbar/navbar';
import './App.css';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';

function App() {

  return (
    <Router>
    <Navbar currentPath={window.location.pathname} />
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newsletters" element={<Newsletters />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
