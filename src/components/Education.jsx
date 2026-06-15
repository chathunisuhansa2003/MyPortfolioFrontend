import React, { useEffect, useState } from "react";

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/education");
        const data = await response.json();

        const formattedData = data.map((item) => ({
          degree: item.degree,
          institute: item.institute,
          year: item.year,
          desc: item.description || "",
        }));

        setEducationData(formattedData);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };

    fetchEducation();
  }, []);

  return (
    <>
      <style>{`
        /* SECTION */
        .education-section {
          min-height: 100vh;

          padding: 100px 20px;

          background: radial-gradient(circle at top, #0f172a, #020617);

          color: #e2e8f0;
          text-align: center;
        }

        /* TITLE */
        .education-title {
          font-size: 3.5rem;
          font-weight: 800;

          color: #38bdf8;

          margin-bottom: 60px;
        }

        /* CONTAINER */
        .education-container {
          max-width: 1000px;
          margin: auto;

          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

          gap: 30px;
        }

        /* CARD */
        .education-card {
          padding: 30px;

          background: rgba(255,255,255,0.05);

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          border: 1px solid rgba(255,255,255,0.08);

          border-radius: 20px;

          transition: 0.3s ease;

          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .education-card:hover {
          transform: translateY(-8px);

          border-color: rgba(56,189,248,0.4);

          box-shadow: 0 0 25px rgba(56,189,248,0.2);
        }

        /* DEGREE */
        .degree {
          font-size: 1.4rem;
          font-weight: 700;

          color: #38bdf8;

          margin-bottom: 10px;
        }

        /* INSTITUTE */
        .institute {
          font-size: 1rem;
          color: #cbd5e1;

          margin-bottom: 8px;
        }

        /* YEAR */
        .year {
          font-size: 0.9rem;
          color: #94a3b8;

          margin-bottom: 18px;
        }

        /* DESCRIPTION */
        .desc {
          color: #cbd5e1;

          line-height: 1.7;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {

          .education-title {
            font-size: 2.7rem;
          }

          .education-card {
            padding: 24px;
          }
        }
      `}</style>

      <section id="education" className="education-section">

        <h2 className="education-title">
          Education
        </h2>

        <div className="education-container">

          {educationData.length === 0 ? (
            <p className="desc">No education records available yet.</p>
          ) : (
            educationData.map((edu, index) => (
              <div key={index} className="education-card">

              <h3 className="degree">
                {edu.degree}
              </h3>

              <p className="institute">
                {edu.institute}
              </p>

              <p className="year">
                {edu.year}
              </p>

              <p className="desc">
                {edu.desc}
              </p>

              </div>
            ))
          )}

        </div>

      </section>
    </>
  );
};

export default Education;