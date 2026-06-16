import React, { useState } from "react";

const AddExperience = () => {

  const [form, setForm] = useState({
    title: "",
    company: "",
    duration: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await fetch(
      "http://localhost:5000/api/experience",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      }
    );

    alert("Experience Added");

    setForm({
      title: "",
      company: "",
      duration: "",
      description: "",
    });
  };

  return (
    <div style={{ padding: "50px" }}>

      <h1>Add Experience</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="title"
          placeholder="Job Title"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="company"
          placeholder="Company"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="duration"
          placeholder="Jan 2025 - Present"
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Experience
        </button>

      </form>

    </div>
  );
};

export default AddExperience;