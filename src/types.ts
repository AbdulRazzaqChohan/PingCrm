export interface Company {
  id: number;
  name: string;
  created_at: string;
}

export interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: number;
  created_at: string;
}
