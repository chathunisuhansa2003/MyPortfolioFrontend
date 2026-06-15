import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SecretGate() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/secret-check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();

    if (data.success) {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Secret Code");
    }
  };

  return (
    <div>
      <h2>Enter Secret Code</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default SecretGate;