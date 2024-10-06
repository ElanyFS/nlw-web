import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { PrivateRouter } from "./service/auth";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rota public */}
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        />
      </Routes>
    </Router>
  );
}
