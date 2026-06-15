import { useEffect, useState } from "react";
import axios from "axios";

export default function ContactsAdmin() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await axios.get("http://localhost:5000/api/contact");
    setContacts(res.data);
  };

  return (
    <div>
      <h2>Contact Messages</h2>

      {contacts.map((c) => (
        <div key={c._id}>
          <h4>{c.name}</h4>
          <p>{c.email}</p>
          <p>{c.message}</p>
        </div>
      ))}
    </div>
  );
}