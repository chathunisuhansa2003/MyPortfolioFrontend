import React from "react";

const Skills = () => {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind",
    "Git",
  ];

  return (
    <>
      <style>{`
        /* SECTION */
        .skills-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 80px 20px;

          background: radial-gradient(circle at top, #0f172a, #020617);
          color: #e2e8f0;
          text-align: center;
        }

        /* TITLE */
        .skills-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 50px;
          color: #38bdf8;
          letter-spacing: 1px;
        }

        /* CONTAINER */
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          max-width: 900px;
        }

        /* SKILL CARD */
        .skill-card {
          padding: 14px 28px;

          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px;

          color: #e2e8f0;
          font-size: 1rem;
          font-weight: 500;

          cursor: pointer;
          transition: all 0.3s ease;

          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        }

        /* HOVER EFFECT */
        .skill-card:hover {
          transform: translateY(-6px) scale(1.05);

          background: rgba(56, 189, 248, 0.12);
          border-color: rgba(56, 189, 248, 0.4);

          color: #38bdf8;

          box-shadow: 0 0 18px rgba(56, 189, 248, 0.35);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .skills-title {
            font-size: 2.5rem;
          }

          .skills-container {
            gap: 15px;
          }

          .skill-card {
            padding: 12px 22px;
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section id="skills" className="skills-section">
        <h2 className="skills-title">Skills</h2>

        <div className="skills-container">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;