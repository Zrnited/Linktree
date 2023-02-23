import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import 'react-toastify/dist/ReactToastify.css';
import LiveSite from './pages/LiveSite';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/livesite' element={<LiveSite />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
