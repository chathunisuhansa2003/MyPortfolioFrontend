import React, { useState } from "react";

const AddProject = () => {

  const [form, setForm] = useState({
    title: "",
    description: "",
    github: "",
    live: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Project Added Successfully");

      setForm({
        title: "",
        description: "",
        github: "",
        live: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <style>{`
        .container {
          min-height: 100vh;

          display: flex;
          justify-content: center;
          align-items: center;

          background: radial-gradient(circle at top, #0f172a, #020617);
        }

        form {
          width: 450px;

          display: flex;
          flex-direction: column;
          gap: 16px;

          padding: 35px;

          background: rgba(255,255,255,0.05);

          border-radius: 20px;

          backdrop-filter: blur(14px);

          border: 1px solid rgba(255,255,255,0.08);
        }

        h1 {
          color: #38bdf8;
          text-align: center;
        }

        input, textarea {
          padding: 14px;

          border-radius: 10px;
          border: none;

          outline: none;

          background: rgba(255,255,255,0.08);

          color: white;
        }

        button {
          padding: 14px;

          border: none;

          border-radius: 10px;

          background: linear-gradient(135deg, #38bdf8, #0ea5e9);

          font-weight: bold;

          cursor: pointer;

          transition: 0.3s;
        }

        button:hover {
          transform: scale(1.03);
        }
      `}</style>

      <div className="container">

        <form onSubmit={handleSubmit}>

          <h1>Add Project</h1>

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={form.title}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={form.description}
            onChange={handleChange}
          />

          <input
            type="text"
            name="github"
            placeholder="GitHub Link"
            value={form.github}
            onChange={handleChange}
          />

          <input
            type="text"
            name="live"
            placeholder="Live Website Link"
            value={form.live}
            onChange={handleChange}
          />

          <button type="submit">
            Add Project
          </button>

        </form>

      </div>
    </>
  );
};

export default AddProject;