import axios from "axios";

const BASE_URL = "http://localhost:8000/api"; // Update if deployed

export const api = axios.create({
  baseURL: BASE_URL,
});

// Company APIs
export const fetchCompanies = () => api.get("/companies/");
export const createCompany = (data: { name: string }) =>
  api.post("/companies/", data);
export const deleteCompany = (id: number) => api.delete(`/companies/${id}/`);

// Contact APIs
export const fetchContacts = () => api.get("/contacts/");
export const createContact = (data: any) => api.post("/contacts/", data);
export const deleteContact = (id: number) => api.delete(`/contacts/${id}/`);
