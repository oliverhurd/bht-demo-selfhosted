import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation } from
'react-router-dom';
// Public Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { ResultsPage } from './pages/ResultsPage';
import { NotesPage } from './pages/NotesPage';
import { AffiliatesPage } from './pages/AffiliatesPage';
import { ContributionPage } from './pages/ContributionPage';
import { ContactPage } from './pages/ContactPage';
// Vault Pages
import { VaultCourses } from './pages/vault/VaultCourses';
import { VaultCourseLessons } from './pages/vault/VaultCourseLessons';
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/affiliates" element={<AffiliatesPage />} />
        <Route path="/contribute" element={<ContributionPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Vault Routes */}
        <Route path="/vault" element={<VaultCourses />} />
        <Route path="/vault/courses" element={<VaultCourses />} />
        <Route
          path="/vault/courses/:courseId"
          element={<VaultCourseLessons />} />

      </Routes>
    </Router>);

}