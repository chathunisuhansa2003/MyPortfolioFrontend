import React from "react";

const About = () => {
  return (
    <>
      <style>{`
        /* ABOUT SECTION */
        .about-section {
          min-height: 100vh;

          display: flex;
          justify-content: center;
          align-items: center;

          padding: 80px 20px;

          background: radial-gradient(circle at top, #0f172a, #020617);

          color: #e2e8f0;
          position: relative;
          overflow: hidden;
        }

        /* BACKGROUND GLOW */
        .about-section::before {
          content: "";
          position: absolute;

          width: 450px;
          height: 450px;

          background: #38bdf8;
          filter: blur(160px);

          opacity: 0.12;

          right: -120px;
          top: -100px;
        }

        /* CONTENT BOX */
        .about-container {
          max-width: 850px;

          text-align: center;

          padding: 50px 40px;

          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;

          box-shadow: 0 10px 40px rgba(0,0,0,0.35);

          z-index: 1;
          transition: 0.3s ease;
        }

        .about-container:hover {
          transform: translateY(-6px);

          box-shadow: 0 0 30px rgba(56,189,248,0.15);
        }

        /* TITLE */
        .about-title {
          font-size: 4rem;
          font-weight: 800;

          margin-bottom: 25px;

          color: #38bdf8;

          letter-spacing: 1px;
        }

        /* TEXT */
        .about-text {
          font-size: 1.2rem;
          line-height: 1.9;

          color: #cbd5e1;

          max-width: 720px;
          margin: auto;
        }

        /* HIGHLIGHT TEXT */
        .highlight {
          color: #38bdf8;
          font-weight: 600;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {

          .about-container {
            padding: 35px 25px;
          }

          .about-title {
            font-size: 2.8rem;
          }

          .about-text {
            font-size: 1rem;
            line-height: 1.7;
          }
        }
      `}</style>

      <section id="about" className="about-section">

        <div className="about-container">

          <h2 className="about-title">
            About Me
          </h2>

          <p className="about-text">
            I am a passionate <span className="highlight">full-stack developer</span>
            specializing in the <span className="highlight">MERN stack</span>.
            I enjoy building modern, responsive and scalable web applications
            with clean UI and smooth user experiences.
          </p>

        </div>

      </section>
    </>
  );
};

export default About;