import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Companies from "./pages/Companies";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Router>
      <div className="p-6">
        <nav className="flex gap-4 mb-6">
          <Link to="/" className="text-blue-600">
            Companies
          </Link>
          <Link to="/contacts" className="text-blue-600">
            Contacts
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Companies />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
