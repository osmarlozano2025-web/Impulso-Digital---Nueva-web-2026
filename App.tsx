
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { HomePage } from './pages/HomePage';
import { CerebroPage } from './pages/CerebroPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { ContactPage } from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cerebro" element={<CerebroPage />} />
            <Route path="/escalera" element={<RoadmapPage />} />
            <Route path="/servicios" element={<HomePage />} /> {/* Redirige temporalmente o crea servicios */}
            <Route path="/nosotros" element={<HomePage />} />   {/* Redirige temporalmente o crea nosotros */}
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;
