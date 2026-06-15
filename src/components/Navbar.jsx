import React from "react";

const Navbar = () => {
  return (
    <>
      <style>{css}</style>

      <nav className="navbar">
        <div className="container">

          <h1 className="logo">Chathuni Suhansa </h1>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            
            <li><a href="#contact">Contact</a></li>
          </ul>

          <a
            href="http://localhost:5000/download-cv"
            className="btn"
            download="Chathuni-Suhansa-CV.pdf"
          >
            Download CV
          </a>

        </div>
      </nav>
    </>
  );
};

export default Navbar;

/* ========== MODERN CSS FIXED ========== */
const css = `
/* NAVBAR */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

/* CONTAINER (IMPORTANT FIX) */
.container {
  max-width: 1200px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 20px;
  flex-wrap: wrap;   /* 🔥 allows safe wrapping */
  gap: 10px;
}

/* LOGO */
.logo {
  font-size: 22px;
  font-weight: 700;
  color: #38bdf8;
  white-space: nowrap;
}

/* NAV LINKS */
.nav-links {
  display: flex;
  gap: 25px;
  list-style: none;
  flex-wrap: wrap;  /* 🔥 prevents overflow */
  justify-content: center;
}

.nav-links a {
  text-decoration: none;
  color: #cbd5e1;
  font-size: 15px;
  padding: 6px 8px;
  border-radius: 8px;
  transition: 0.3s;
  white-space: nowrap;
}

.nav-links a:hover {
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.08);
}

/* BUTTON */
.btn {
  padding: 10px 16px;
  border-radius: 10px;
  background: linear-gradient(135deg, #38bdf8, #0ea5e9);
  color: #0f172a;
  font-weight: bold;
  text-decoration: none;

  white-space: nowrap;  /* 🔥 prevents cut */
  flex-shrink: 0;
  transition: 0.3s;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(56,189,248,0.5);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .container {
    justify-content: center;
    text-align: center;
  }

  .nav-links {
    gap: 12px;
  }
}
`;