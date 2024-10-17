import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Importeer je pagina componenten hier
import HomePage from './components/homepage/home';
import ReviewPage from './components/recensies/film-recensies';
import VestigingenPage from './components/vestigingen/vestigingen';
import PlaceholderPage from './components/films/films';

const App = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recensies" element={<ReviewPage />} />
            <Route path="/vestigingen" element={<VestigingenPage />} />
            <Route path="/films" element={<PlaceholderPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
