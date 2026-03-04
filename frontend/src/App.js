import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components - Keep eagerly loaded
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import JinglePlayer from './components/layout/JinglePlayer';

// Critical page - Load eagerly for performance
import HomePage from './pages/HomePage';

// Lazy load all other pages for better initial load performance
const HotTubsPage = lazy(() => import('./pages/HotTubsPage'));
const GrandRiverPage = lazy(() => import('./pages/GrandRiverPage'));
const VikingSpasPage = lazy(() => import('./pages/VikingSpasPage'));
const DynastySpasPage = lazy(() => import('./pages/DynastySpasPage'));
const SwimSpasPage = lazy(() => import('./pages/SwimSpasPage'));
const SaunasPage = lazy(() => import('./pages/SaunasPage'));
const ColdPlungesPage = lazy(() => import('./pages/ColdPlungesPage'));
const WellnessPage = lazy(() => import('./pages/WellnessPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const FinancingPage = lazy(() => import('./pages/FinancingPage'));
const SpaButlerPage = lazy(() => import('./pages/SpaButlerPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const CoversPage = lazy(() => import('./pages/CoversPage'));
const AnatomyPage = lazy(() => import('./pages/AnatomyPage'));
const BalneotherapyPage = lazy(() => import('./pages/BalneotherapyPage'));
const JetsPage = lazy(() => import('./pages/JetsPage'));
const ARVisualizerPage = lazy(() => import('./pages/ARVisualizerPage'));
const BrochurePage = lazy(() => import('./pages/BrochurePage'));

import './App.css';

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-[#B91C1C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-600 font-medium">Loading...</p>
    </div>
  </div>
);

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
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                
                {/* Shop Pages - Individual Brand Pages */}
                <Route path="/hot-tubs" element={<HotTubsPage />} />
                <Route path="/grand-river-spas" element={<GrandRiverPage />} />
                <Route path="/viking-spas" element={<VikingSpasPage />} />
                <Route path="/dynasty-spas" element={<DynastySpasPage />} />
                <Route path="/swim-spas" element={<SwimSpasPage />} />
                <Route path="/saunas" element={<SaunasPage />} />
                <Route path="/cold-plunges" element={<ColdPlungesPage />} />
                
                {/* Product Detail */}
                <Route path="/products/:id" element={<ProductDetailPage />} />
                
                {/* Wellness */}
                <Route path="/wellness" element={<WellnessPage />} />
                
                {/* Discover Pages */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/covers" element={<CoversPage />} />
                <Route path="/anatomy-of-a-spa" element={<AnatomyPage />} />
                <Route path="/balneotherapy" element={<BalneotherapyPage />} />
                <Route path="/jets" element={<JetsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/financing" element={<FinancingPage />} />
                <Route path="/spa-butler" element={<SpaButlerPage />} />
                <Route path="/brochures" element={<BrochurePage />} />
                
                {/* Contact */}
                <Route path="/contact" element={<ContactPage />} />
                
                {/* AR Visualizer */}
                <Route path="/ar-visualizer" element={<ARVisualizerPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <JinglePlayer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
