import React, { useEffect, useState } from "react";

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/projects")

      .then((res) => res.json())

      .then((data) => {

        console.log(data);

        setProjects(data);

      })

      .catch((err) => console.log(err));

  }, []);

  return (
    <>
      <style>{`
        .projects-section {
          min-height: 100vh;
          padding: 100px 20px;
          background: radial-gradient(circle at top, #0f172a, #020617);
          color: white;
          text-align: center;
        }

        .projects-title {
          font-size: 3.5rem;
          color: #38bdf8;
          margin-bottom: 60px;
        }

        .projects-container {
          max-width: 1200px;
          margin: auto;

          display: grid;

          grid-template-columns:
          repeat(auto-fit, minmax(320px, 1fr));

          gap: 30px;
        }

        .project-card {
          padding: 30px;

          background: rgba(255,255,255,0.05);

          border-radius: 20px;

          backdrop-filter: blur(14px);

          border: 1px solid rgba(255,255,255,0.08);

          transition: 0.3s;
        }

        .project-card:hover {
          transform: translateY(-8px);

          border-color: rgba(56,189,248,0.4);

          box-shadow: 0 0 25px rgba(56,189,248,0.2);
        }

        .project-card h3 {
          color: #38bdf8;
          margin-bottom: 15px;
        }

        .project-card p {
          color: #cbd5e1;
          margin-bottom: 20px;
          line-height: 1.7;
        }

        .buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .buttons a {
          padding: 10px 16px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: bold;
        }

        .github {
          background: #111827;
          color: white;
        }

        .live {
          background: #38bdf8;
          color: #0f172a;
        }
      `}</style>

      <section id="projects" className="projects-section">

        <h2 className="projects-title">
          Projects
        </h2>

        <div className="projects-container">

          {projects.map((project) => (

            <div key={project._id} className="project-card">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="buttons">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github"
                  >
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="live"
                  >
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          ))}

        </div>

      </section>
    </>
  );
};

export default Projects;