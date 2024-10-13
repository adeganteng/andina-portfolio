import { Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import HomePage from "./pages/HomePage";
import NavSheets from "./components/layouts/NavSheets";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="dark relative overflow-hidden">
      <Navbar />
      <div className="px-3 pt-16 md:px-24 md:pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <NavSheets />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
