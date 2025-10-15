import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import PageShell from './components/PageShell';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FacilitiesPage from './pages/FacilitiesPage';
import BrandsPage from './pages/BrandsPage';
import DistributionPage from './pages/DistributionPage';
import NewsPage from './pages/NewsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageShell />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="facilities" element={<FacilitiesPage />} />
          <Route path="brands" element={<BrandsPage />} />
          <Route path="distribution" element={<DistributionPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;