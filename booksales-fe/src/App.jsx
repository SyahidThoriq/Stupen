import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/public/index"; // Mengarah ke halaman Home / Public
import AdminDashboard from "./pages/admin/index"; // Mengarah ke Dashboard Admin

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route / untuk Halaman Utama / Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/* Route /admin khusus untuk Dashboard Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;