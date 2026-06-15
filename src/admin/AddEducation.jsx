import React from "react";
import { useState } from "react";

const AddEducation = () => {

    const [form, setForm] = useState({
        institution: "",
        degree: "",
        field: "",
        start: "",
        end: "",
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
                "http://localhost:5000/api/education",
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
            alert("Education Added Successfully");
            setForm({
                institution: "",
                degree: "",
                field: "",
                start: "",
                end: "",
            });
        } catch (error) {
            console.error("Error adding education:", error);
            alert("Error adding education");
        }
    };  
    return (
        <>
            <style>{`
                .add-education {
                    min-height: 100vh;
                    padding: 40px;  
                    background: radial-gradient(circle at top, #0f172a, #020617);
                    color: white;
                }

                .add-education h2 {         
                    font-size: 2.5rem;
                    color: #38bdf8;
                    margin-bottom: 30px;
                    text-align: center;
                }
                .form {
                    max-width: 500px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .form input {
                    padding: 12px;
                    border: none;
                    border-radius: 8px;
                    background: rgba(255,255,255,0.1);
                    color: white;
                    font-size: 1rem;
                }
                .form input::placeholder {
                    color: rgba(255,255,255,0.7);
                }
                .form button {
                    padding: 12px;
                    border: none;
                    border-radius: 8px;
                    background: #38bdf8;
                    color: #0f172a;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: 0.3s;
                }
                .form button:hover {
                    background: #0ea5e9;
                }
            `}</style>
            <div className="add-education">
                <h2>Add Education</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                            
                        name="institution"
                        placeholder="Institution Name"
                        value={form.institution}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        value={form.degree}
                        onChange={handleChange}
                        required
                    />  
                    <input
                        type="text"
                        name="field"
                        placeholder="Field of Study"
                        value={form.field}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="start"
                        placeholder="Start Year"
                        value={form.start}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="end"
                        placeholder="End Year"
                        value={form.end}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Add Education</button>
                </form>
            </div>
        </>
    );
};

export default AddEducation;
