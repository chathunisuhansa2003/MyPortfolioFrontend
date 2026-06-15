import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await axios.get("http://localhost:5000/api/projects");
    setProjects(res.data);
  };

  const deleteProject = async (id) => {
    await axios.delete(`http://localhost:5000/api/projects/${id}`);
    load();
  };

  return (
    <div>
      <h2>Projects</h2>

      {projects.map((p) => (
        <div key={p._id} className="card">
          <h3>{p.title}</h3>
          <p>{p.description}</p>

          <button onClick={() => deleteProject(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}