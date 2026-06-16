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
import Experience from "./components/Experience";

import Dashboard from "./admin/Dashboard";
import AddProject from "./admin/AddProject";
import AddEducation from "./admin/AddEducation";
import SecretGate from "./admin/SecretGate";

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
      <Experience />
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
        <Route path="/admin/add-project" element={<AddProject />} />
        <Route path="/admin/add-education" element={<AddEducation />} />
        <Route path="/admin/contacts" element={<ContactsAdmin />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<Education />} />

        {/* Portfolio Website */}
        <Route path="/" element={<HomePage />} />

        {/* Add Project */}
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/add-education" element={<AddEducation />} />
      </Routes>


    </BrowserRouter>
    
  );
}

export default App;