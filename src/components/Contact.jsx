import React, { useState } from "react";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    try {

      const response = await fetch(
        "http://localhost:5000/api/contact",
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

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);

      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <>
      <style>{`
        .contact-section {
          min-height: 100vh;

          display: flex;
          justify-content: center;
          align-items: center;

          padding: 40px 20px;

          background:
          radial-gradient(circle at top, #0f172a, #020617);
        }

        .contact-box {
          width: 100%;
          max-width: 500px;

          padding: 35px;

          border-radius: 24px;

          background: rgba(255,255,255,0.05);

          backdrop-filter: blur(14px);

          border: 1px solid rgba(255,255,255,0.08);

          box-shadow: 0 0 25px rgba(0,0,0,0.3);
        }

        .contact-title {
          text-align: center;

          font-size: 3rem;

          margin-bottom: 30px;

          color: #38bdf8;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 14px;

          border-radius: 12px;

          border: none;

          outline: none;

          background: rgba(255,255,255,0.08);

          color: white;

          font-size: 15px;
        }

        .contact-form textarea {
          resize: none;
        }

        .contact-form button {
          padding: 14px;

          border: none;

          border-radius: 12px;

          background:
          linear-gradient(135deg, #38bdf8, #0ea5e9);

          color: #0f172a;

          font-weight: bold;

          cursor: pointer;

          transition: 0.3s;
        }

        .contact-form button:hover {
          transform: scale(1.03);

          box-shadow:
          0 0 20px rgba(56,189,248,0.5);
        }

        .success-message {
          margin-top: 20px;

          text-align: center;

          color: #22c55e;

          font-weight: bold;
        }
      `}</style>

      <section id="contact" className="contact-section">

        <div className="contact-box">

          <h2 className="contact-title">
            Contact Me
          </h2>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
            />

            <button type="submit">
              Send Message
            </button>

          </form>

          {success && (
            <div className="success-message">
              ✅ Message Sent Successfully
            </div>
          )}

        </div>

      </section>
    </>
  );
};

export default Contact;