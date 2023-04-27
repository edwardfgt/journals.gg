import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/home';
import Newsletters from './components/newsletters/newsletters';
import Navbar from './components/navbar/navbar';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletters" element={<Newsletters />} />
      </Routes>
    </Router>
  );
}

export default App;
