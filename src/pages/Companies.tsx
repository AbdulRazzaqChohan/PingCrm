import { useEffect, useState } from "react";
import { fetchCompanies, createCompany, deleteCompany } from "../api/api";

export default function Companies() {
  const [companies, setCompanies] = useState<any[]>([]);
  const [name, setName] = useState("");

  const loadCompanies = async () => {
    const res = await fetchCompanies();
    setCompanies(res.data);
  };

  const handleAdd = async () => {
    if (!name.trim()) return;
    await createCompany({ name });
    setName("");
    loadCompanies();
  };

  const handleDelete = async (id: number) => {
    await deleteCompany(id);
    loadCompanies();
  };

  useEffect(() => {
    loadCompanies();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Companies</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={name}
          placeholder="Company Name"
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {companies.map((company) => (
          <li
            key={company.id}
            className="flex justify-between items-center mb-2"
          >
            <span>{company.name}</span>
            <button
              onClick={() => handleDelete(company.id)}
              className="text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
