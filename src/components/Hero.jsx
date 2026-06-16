import React from "react";

const Hero = () => {
  return (
    <>
      <style>{`
        /* HERO SECTION */
        .hero-section {
          min-height: 100vh;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          text-align: center;
          padding: 60px 20px 40px;

          background: radial-gradient(circle at top, #0f172a, #020617);
          color: #e2e8f0;

          position: relative;
          overflow: hidden;
        }

        /* BACKGROUND GLOW */
        .hero-section::before {
          content: "";
          position: absolute;

          width: 500px;
          height: 500px;

          background: #38bdf8;
          filter: blur(160px);

          opacity: 0.15;
          top: -120px;

          z-index: 0;
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
          flex-wrap: wrap;
          width: 100%;
          max-width: 1200px;
          z-index: 1;
        }

        .hero-text {
          flex: 1;
          min-width: 300px;
          text-align: left;
        }

        .hero-image-wrap {
          flex: 0 0 320px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-card {
          width: 280px;
          height: 280px;
          border-radius: 50% 50% 20px 50%;
          overflow: hidden;
          border: 2px solid rgba(56, 189, 248, 0.35);
          box-shadow: 0 20px 45px rgba(8, 15, 35, 0.45);
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(2, 6, 23, 0.8));
          padding: 8px;
        }

        .hero-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50% 50% 20px 50%;
          display: block;
        }

        /* TITLE */
        .hero-title {
          font-size: 4.5rem;
          font-weight: 800;

          z-index: 1;
          line-height: 1.2;
        }

        .hero-title span {
          color: #38bdf8;
          text-shadow: 0 0 12px rgba(56, 189, 248, 0.5);
        }

        /* SUBTITLE */
        .hero-subtitle {
          margin-top: 18px;

          font-size: 1.2rem;
          color: #94a3b8;

          z-index: 1;
          max-width: 700px;
          line-height: 1.8;
        }

        .hero-badge {
          display: inline-block;
          margin-bottom: 16px;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(56, 189, 248, 0.3);
          background: rgba(56, 189, 248, 0.12);
          color: #7dd3fc;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* BUTTON WRAPPER */
        .hero-buttons {
          margin-top: 35px;

          display: flex;
          gap: 18px;

          z-index: 1;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* PRIMARY BUTTON */
        .btn-primary {
          padding: 14px 28px;

          border-radius: 12px;
          text-decoration: none;

          font-weight: 600;
          color: #0f172a;

          background: linear-gradient(135deg, #38bdf8, #0ea5e9);

          transition: 0.3s ease;

          box-shadow: 0 0 0 rgba(56,189,248,0);
        }

        .btn-primary:hover {
          transform: translateY(-4px) scale(1.04);

          box-shadow: 0 0 22px rgba(56,189,248,0.55);
        }

        /* SECONDARY BUTTON */
        .btn-secondary {
          padding: 14px 28px;

          border-radius: 12px;
          text-decoration: none;

          font-weight: 600;
          color: #e2e8f0;

          border: 1px solid rgba(255,255,255,0.15);

          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);

          transition: 0.3s ease;
        }

        .btn-secondary:hover {
          transform: translateY(-4px) scale(1.04);

          border-color: rgba(56,189,248,0.4);
          color: #38bdf8;

          box-shadow: 0 0 18px rgba(56,189,248,0.25);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero-content {
            gap: 30px;
          }

          .hero-text {
            text-align: center;
          }

          .hero-image-wrap {
            flex-basis: 100%;
          }

          .hero-image-card {
            width: 220px;
            height: 220px;
          }

          .hero-title {
            font-size: 2.8rem;
          }

          .hero-subtitle {
            font-size: 1rem;
            line-height: 1.6;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 280px;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
          }
        }
      `}</style>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">Full Stack Developer</span>
            <h1 className="hero-title">
              Hi, I'm <span>Chathuni Suhansa </span>
            </h1>

            <p className="hero-subtitle">
              MERN Stack Developer | UI Designer | Creating modern,
              responsive and scalable web applications with beautiful UI.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>

              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-image-card">
              <img
                src={require("../assets/suhansa.jpg")}
                alt="Chathuni Suhansa" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;