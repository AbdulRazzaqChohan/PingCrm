import { useEffect, useState } from "react";
import {
  fetchContacts,
  createContact,
  deleteContact,
  fetchCompanies,
} from "../api/api";

export default function Contacts() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [companies, setCompanies] = useState<any[]>([]);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
  });

  const loadData = async () => {
    const [cRes, compRes] = await Promise.all([
      fetchContacts(),
      fetchCompanies(),
    ]);
    setContacts(cRes.data);
    setCompanies(compRes.data);
  };

  const handleAdd = async () => {
    if (!form.first_name || !form.company) return;
    await createContact(form);
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      company: "",
    });
    loadData();
  };

  const handleDelete = async (id: number) => {
    await deleteContact(id);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <input
          placeholder="First Name"
          value={form.first_name}
          onChange={(e) => setForm({ ...form, first_name: e.target.value })}
          className="border px-2 py-1 rounded"
        />
        <input
          placeholder="Last Name"
          value={form.last_name}
          onChange={(e) => setForm({ ...form, last_name: e.target.value })}
          className="border px-2 py-1 rounded"
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border px-2 py-1 rounded"
        />
        <input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="border px-2 py-1 rounded"
        />
        <select
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="col-span-2 border px-2 py-1 rounded"
        >
          <option value="">Select Company</option>
          {companies.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleAdd}
          className="col-span-2 bg-green-600 text-white px-4 py-1 rounded"
        >
          Add Contact
        </button>
      </div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="mb-2">
            {contact.first_name} {contact.last_name} -{" "}
            {contact.company_name || "N/A"}
            <button
              onClick={() => handleDelete(contact.id)}
              className="ml-4 text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
