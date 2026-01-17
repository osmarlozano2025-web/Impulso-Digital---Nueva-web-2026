
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CerebroPage } from './pages/CerebroPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { PageTransition } from './components/PageTransition';
import { BookingProvider } from './components/BookingModal';
import { ChatWidget } from './components/ChatWidget';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cerebro" element={<CerebroPage />} />
          <Route path="/escalera" element={<RoadmapPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <BookingProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-background-light">
          <Navbar />
          <main className="flex-1 flex flex-col">
            <AnimatedRoutes />
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </BookingProvider>
  );
};

export default App;
