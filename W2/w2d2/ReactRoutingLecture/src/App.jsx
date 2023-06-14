import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Landing from './pages/Landing';
import About from './pages/About';
import Navbar from './components/Navbar';
import FavFood from './pages/FavFood';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <h1>My Routing Application</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/favFood/" element={<FavFood />} />
        <Route path="/favFood/:food" element={<FavFood />} />
      </Routes>
      
        </BrowserRouter>
    </div>
  );
}

export default App;
