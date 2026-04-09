import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ArtworkDetail from './pages/ArtworkDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/p50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
