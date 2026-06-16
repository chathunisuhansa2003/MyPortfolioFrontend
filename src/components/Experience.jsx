import React,
{
  useEffect,
  useState
}
from "react";

const Experience = () => {

  const [experiences,
    setExperiences] =
    useState([]);

  useEffect(() => {

    fetch(
      "http://localhost:5000/api/experience"
    )
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is always an array
        if (Array.isArray(data)) {
          setExperiences(data);
        } else if (data && typeof data === 'object') {
          // If data is an object but not an array, try to extract array from it
          setExperiences(data.experiences || data.data || []);
        } else {
          setExperiences([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching experiences:", error);
        setExperiences([]);
      });

  }, []);

  return (
    <>
        
    <style>{`
        /* SECTION */
        .experience-section {
          min-height: 100vh;

          padding: 100px 20px;

          background: radial-gradient(circle at top, #0f172a, #020617);

          color: #e2e8f0;
          text-align: center;
        }

        /* TITLE */
        .experience-title {
          font-size: 3.5rem;
          font-weight: 800;

          color: #38bdf8;

          margin-bottom: 60px;
        }

        /* CONTAINER */
        .experience-container {
          max-width: 1000px;
          margin: auto;

          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

          gap: 30px;
        }

        /* CARD */
        .experience-card {
          padding: 30px;

          background: rgba(255,255,255,0.05);

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          border: 1px solid rgba(255,255,255,0.08);

          border-radius: 20px;

          transition: 0.3s ease;

          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .experience-card:hover {
          transform: translateY(-8px);

          border-color: rgba(56,189,248,0.4);

          box-shadow: 0 0 25px rgba(56,189,248,0.2);
        }

        /* JOB TITLE */
        .job-title {
          font-size: 1.4rem;
          font-weight: 700;

          color: #38bdf8;

          margin-bottom: 10px;
        }

        /* COMPANY */
        .company {
          font-size: 1rem;
          color: #cbd5e1;

          margin-bottom: 8px;
        }

        /* DURATION */
        .duration {
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

          .experience-title {
            font-size: 2.7rem;
          }

          .experience-card {
            padding: 24px;
          }
        }
      `}</style>
    <section
      id="experience"
      className="experience-section"
    >

      <h2 className="experience-title">
        Experience
      </h2>

      <div className="experience-container">

        {Array.isArray(experiences) && experiences.length > 0 ? (
          experiences.map((exp) => (

            <div key={exp._id} className="experience-card">

              <h3 className="job-title">
                {exp.title}
              </h3>

              <p className="company">
                {exp.company}
              </p>

              <p className="duration">
                {exp.duration}
              </p>

              <p className="desc">
                {exp.description}
              </p>

            </div>

          ))
        ) : (
          <p className="desc">No experiences found</p>
        )}

      </div>

    </section>
    </>
  );
};

export default Experience;