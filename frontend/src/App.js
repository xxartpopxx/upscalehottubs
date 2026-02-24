import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import JinglePlayer from './components/layout/JinglePlayer';

// Pages
import HomePage from './pages/HomePage';
import HotTubsPage from './pages/HotTubsPage';
import GrandRiverPage from './pages/GrandRiverPage';
import VikingSpasPage from './pages/VikingSpasPage';
import SwimSpasPage from './pages/SwimSpasPage';
import SaunasPage from './pages/SaunasPage';
import ColdPlungesPage from './pages/ColdPlungesPage';
import WellnessPage from './pages/WellnessPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import FinancingPage from './pages/FinancingPage';
import SpaButlerPage from './pages/SpaButlerPage';
import ProductDetailPage from './pages/ProductDetailPage';

import './App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="App">
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <Header />
          <main id="main-content" role="main">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              
              {/* Shop Pages - Individual Brand Pages */}
              <Route path="/hot-tubs" element={<HotTubsPage />} />
              <Route path="/grand-river-spas" element={<GrandRiverPage />} />
              <Route path="/viking-spas" element={<VikingSpasPage />} />
              <Route path="/swim-spas" element={<SwimSpasPage />} />
              <Route path="/saunas" element={<SaunasPage />} />
              <Route path="/cold-plunges" element={<ColdPlungesPage />} />
              
              {/* Product Detail */}
              <Route path="/products/:id" element={<ProductDetailPage />} />
              
              {/* Wellness */}
              <Route path="/wellness" element={<WellnessPage />} />
              
              {/* Discover Pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/financing" element={<FinancingPage />} />
              <Route path="/spa-butler" element={<SpaButlerPage />} />
              
              {/* Contact */}
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <JinglePlayer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
