import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import TechnologyPage from "./pages/TechnologyPage.jsx";
import AgriScanPage from "./pages/AgriScanPage.jsx";
import DemoPage from "./pages/DemoPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#content">Skip to content</a>
      <Navbar />
      <main id="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/agriscan" element={<AgriScanPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
