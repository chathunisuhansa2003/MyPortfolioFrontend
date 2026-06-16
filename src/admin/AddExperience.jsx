import { useState } from "react";
import axios from "axios";

export default function AddExperience() {
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    duration: "",
    technologies: "",
    description: "",
  });

  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/experience",
        experience
      );

      alert("Experience Added");

      setExperience({
        company: "",
        position: "",
        duration: "",
        technologies: "",
        description: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Experience</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={experience.company}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="position"
          placeholder="Position"
          value={experience.position}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="duration"
          placeholder="Jan 2025 - Present"
          value={experience.duration}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="technologies"
          placeholder="React, Node.js, MongoDB"
          value={experience.technologies}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Describe your work..."
          value={experience.description}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Experience
        </button>

      </form>
    </div>
  );
}