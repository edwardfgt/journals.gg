import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/home';
import Newsletters from './components/newsletters/newsletters';
import Navbar from './components/navbar/navbar';
import './App.css';
import Footer from './components/footer/footer';
import Template from './components/template/template';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletters" element={<Newsletters />} />
        <Route path="/template" element={<Template />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
