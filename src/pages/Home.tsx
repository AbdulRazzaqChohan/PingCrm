import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">PingCRM Clone</h1>
      <Link to="/companies" className="mr-4 text-blue-600 underline">
        Companies
      </Link>
      <Link to="/contacts" className="text-blue-600 underline">
        Contacts
      </Link>
    </div>
  );
}
