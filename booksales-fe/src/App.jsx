import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./layouts/public";
import AdminLayout from "./layouts/admin";

// Pages Public
import Home from "./pages/public/index";
import Books from "./pages/public/books/index";
import ShowBook from "./pages/public/books/show";

// Pages Auth
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

// Pages Admin
import Dashboard from "./pages/admin/index";
import AdminBooks from "./pages/admin/books/index";
import BookCreate from "./pages/admin/books/create";
import BookEdit from "./pages/admin/books/edit";
import AdminGenres from "./pages/admin/genres/index";   // Route Admin Genres
import AdminAuthors from "./pages/admin/authors/index"; // Route Admin Authors

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="books/show/:id" element={<ShowBook />} />
        </Route>

        {/* Auth Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Admin Routes (Nested Routing) */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          
          {/* Admin Books */}
          <Route path="books">
            <Route index element={<AdminBooks />} />
            <Route path="create" element={<BookCreate />} />
            <Route path="edit/:id" element={<BookEdit />} />
          </Route>

          {/* Admin Genres & Authors */}
          <Route path="genres" element={<AdminGenres />} />
          <Route path="authors" element={<AdminAuthors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;