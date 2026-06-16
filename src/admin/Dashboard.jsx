import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <style>{`
        .dashboard {
          min-height: 100vh;
          padding: 40px;

          background: radial-gradient(circle at top, #0f172a, #020617);

          color: white;
        }

        .title {
          font-size: 3rem;
          color: #38bdf8;
          margin-bottom: 40px;
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          max-width: 1000px;
          margin: auto;
        }

        .card {
          padding: 30px;
          display: block;
          text-decoration: none;

          background: rgba(255,255,255,0.05);

          backdrop-filter: blur(14px);

          border: 1px solid rgba(255,255,255,0.08);

          border-radius: 20px;

          text-align: center;

          transition: 0.3s;
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-8px);

          border-color: rgba(56,189,248,0.4);

          box-shadow: 0 0 25px rgba(56,189,248,0.25);
        }

        .card h3 {
          color: #38bdf8;
          margin-bottom: 15px;
        }

        .card p {
          color: #cbd5e1;
        }
      `}</style>

      <div className="dashboard">

        <h1 className="title">
          Admin Dashboard
        </h1>

        <div className="grid">

          <Link to="/admin/add-project" className="card">
            <h3>Add Projects</h3>
            <p>Manage portfolio projects</p>
          </Link>

          <Link to="/admin/add-education" className="card">
            <h3>Add Education</h3>
            <p>Manage education details</p>
          </Link>

          <Link to="/admin/add-skills" className="card">
            <h3>Add Skills</h3>
            <p>Manage skills section</p>
          </Link>

          <Link to="/admin/add-experience" className="card">
            <h3>Add Experience</h3>
            <p>Manage work experience details</p>
          </Link>

          <Link to="/admin/upload-cv" className="card">
            <h3>Upload CV</h3>
            <p>Upload downloadable resume</p>
          </Link>

        </div>

      </div>
    </>
  );
};

export default Dashboard;