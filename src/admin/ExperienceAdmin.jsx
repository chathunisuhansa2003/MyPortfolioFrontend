import React, {
  useEffect,
  useState,
} from "react";

const ExperienceAdmin = () => {

  const [items, setItems] =
    useState([]);

  const fetchData = async () => {

    const response =
      await fetch(
        "http://localhost:5000/api/experience"
      );

    const data =
      await response.json();

    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteExperience =
    async (id) => {

      await fetch(
        `http://localhost:5000/api/experience/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchData();
    };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Manage Experience</h1>

      {items.map((item) => (

        <div
          key={item._id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h3>{item.title}</h3>

          <p>{item.company}</p>

          <p>{item.duration}</p>

          <button
            onClick={() =>
              deleteExperience(item._id)
            }
          >
            Delete
          </button>

        </div>
      ))}
    </div>
  );
};

export default ExperienceAdmin;