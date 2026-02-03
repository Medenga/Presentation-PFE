import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import de vos slides
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7'; 
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';
import Slide13 from './slides/Slide13';
import Slide14 from './slides/Slide_template';
import Simulation from './slides/Simulation';
import NavigationControls from './components/NavigationControls';

const slides = ["/", "/slide2", "/slide3", "/slide4", "/slide5", "/slide6", "/slide7", "/slide8", "/slide9", "/slide10", "/slide11", "/slide12", "/slide13", "/slide14"];

// --- COMPOSANT DE MISE À L'ÉCHELLE (Anti-coupure) ---
const ScaleWrapper = ({ children }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const targetWidth = 1280;
      const targetHeight = 720;
      const scaleX = window.innerWidth / targetWidth;
      const scaleY = window.innerHeight / targetHeight;
      // On choisit le ratio le plus petit pour que tout rentre dans l'écran
      setScale(Math.min(scaleX, scaleY));
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      <div 
        style={{
          width: '1280px',
          height: '720px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          flexShrink: 0
        }}
        className="relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        {children}
      </div>
    </div>
  );
};

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = slides.indexOf(location.pathname);

  const goToNext = () => {
    if (currentIndex !== -1 && currentIndex < slides.length - 1) {
      navigate(slides[currentIndex + 1]);
    }
  };

  const goToPrev = () => {
    if (currentIndex !== -1 && currentIndex > 0) {
      navigate(slides[currentIndex - 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Désactiver la navigation clavier si on est dans la simulation
      if (location.pathname === '/simulation') return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault(); // Évite le scroll avec Espace
        goToNext();
      }
      if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, location.pathname]); // On écoute aussi le changement de page

  return (
    <ScaleWrapper>
      {/* Barre de Progression (calculée uniquement si on est sur une slide) */}
      {currentIndex !== -1 && (
        <div 
          className="absolute top-0 left-0 h-1 bg-[#FFE600] transition-all duration-500 ease-in-out z-[100]"
          style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
        />
      )}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Slide1 />} />
          <Route path="/slide2" element={<Slide2 />} />
          <Route path="/slide3" element={<Slide3 />} />
          <Route path="/slide4" element={<Slide4 />} />
          <Route path="/slide5" element={<Slide5 />} />
          <Route path="/slide6" element={<Slide6 />} />
          <Route path="/slide7" element={<Slide7 />} />
          <Route path="/slide8" element={<Slide8 />} />
          <Route path="/slide9" element={<Slide9 />} />
          <Route path="/slide10" element={<Slide10 />} />
          <Route path="/slide11" element={<Slide11 />} />
          <Route path="/slide12" element={<Slide12 />} />
          <Route path="/slide13" element={<Slide13 />} />
          <Route path="/slide14" element={<Slide14 />} />
          <Route path="/simulation" element={<Simulation />} />
        </Routes>
      </AnimatePresence>

      {/* Afficher les contrôles seulement si on n'est pas en simulation */}
      {location.pathname !== '/simulation' && (
        <NavigationControls onNext={goToNext} onPrev={goToPrev} />
      )}
    </ScaleWrapper>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}