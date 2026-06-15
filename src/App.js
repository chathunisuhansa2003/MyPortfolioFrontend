import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

import Dashboard from "./admin/Dashboard";
import AddProject from "./admin/AddProject";
import SecretGate from "./admin/SecretGate";
import SecretRoute from "./admin/SecretRoute";

import ProjectsAdmin from "./admin/ProjectsAdmin";
import ContactsAdmin from "./admin/ContactsAdmin";
import Login from "./admin/Login";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/admin" element={<SecretGate />} />
        <Route path="/admin/projects" element={<ProjectsAdmin />} />
        <Route path="/admin/contacts" element={<ContactsAdmin />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />

        {/* Portfolio Website */}
        <Route path="/" element={<HomePage />} />

        {/* Add Project */}
        <Route path="/add-project" element={<AddProject />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;