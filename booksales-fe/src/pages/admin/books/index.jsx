import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks, deleteBook } from "../../../services/books";

export default function AdminBooks() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBooksData = async () => {
    try {
      const data = await getBooks();
      setBooks(data || []);
    } catch (error) {
      console.log("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooksData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus buku ini?");
    if (confirmDelete) {
      try {
        await deleteBook(id);
        alert("Buku berhasil dihapus!");
        setBooks(books.filter((b) => b.id !== id));
      } catch (error) {
        setBooks(books.filter((b) => b.id !== id));
      }
    }
  };

  const filteredBooks = books.filter((book) =>
    book.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-4">
      {/* HEADER & SEARCH BAR */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Cari judul buku..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Link to="/admin/books/create" className="btn btn-primary fw-semibold px-4">
          + Add product
        </Link>
      </div>

      {/* TABEL DATA BUKU */}
      <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light text-uppercase small text-muted">
                <tr>
                  <th>Cover</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Genre</th>
                  <th>Author</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.length > 0 ? (
                  filteredBooks.map((book) => (
                    <tr key={book.id}>
                      <td>
                        <img
                          src={book.cover_photo || "https://via.placeholder.com/50x70?text=No+Cover"}
                          alt={book.title}
                          className="rounded shadow-sm"
                          style={{ width: "45px", height: "60px", objectFit: "cover" }}
                        />
                      </td>
                      <td className="fw-semibold text-dark">{book.title}</td>
                      <td>Rp {Number(book.price).toLocaleString("id-ID")}</td>
                      <td>
                        <span className={`badge ${book.stock > 15 ? 'bg-success' : 'bg-warning'} text-white`}>
                          {book.stock} pcs
                        </span>
                      </td>
                      <td>{book.genre?.name || book.genre || "Umum"}</td>
                      <td>{book.author?.name || book.author || "-"}</td>
                      <td className="text-center">
                        <div className="btn-group">
                          <Link
                            to={`/admin/books/edit/${book.id}`}
                            className="btn btn-sm btn-outline-warning"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(book.id)}
                            className="btn btn-sm btn-outline-danger"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4 text-muted">
                      Tidak ada buku ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* PAGINATION INFO */}
        <div className="card-footer bg-white d-flex justify-content-between align-items-center py-3">
          <span className="small text-muted">Showing 1-{filteredBooks.length} of {books.length}</span>
          <ul className="pagination pagination-sm mb-0">
            <li className="page-item disabled"><span className="page-link">Prev</span></li>
            <li className="page-item active"><span className="page-link">1</span></li>
            <li className="page-item disabled"><span className="page-link">Next</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}