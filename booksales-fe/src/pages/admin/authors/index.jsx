import React, { useState, useEffect } from "react";
import { getAuthors, createAuthor, updateAuthor, deleteAuthor } from "../../../services/authors";

export default function AdminAuthors() {
  const [authors, setAuthors] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAuthors = async () => {
    setLoading(true);
    const data = await getAuthors();
    setAuthors(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Nama penulis wajib diisi!");

    if (editingId) {
      await updateAuthor(editingId, { name });
      alert("Data Penulis berhasil diperbarui!");
    } else {
      await createAuthor({ name });
      alert("Penulis berhasil ditambahkan!");
    }

    setName("");
    setEditingId(null);
    fetchAuthors();
  };

  const handleEdit = (author) => {
    setEditingId(author.id);
    setName(author.name);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus penulis ini?")) {
      await deleteAuthor(id);
      fetchAuthors();
    }
  };

  return (
    <div className="container py-4">
      <h3 className="fw-bold mb-4">Manajemen Penulis (Author)</h3>

      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title mb-3">
            {editingId ? "✏️ Edit Penulis" : "➕ Tambah Penulis"}
          </h5>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan nama penulis..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4 d-flex gap-2">
              <button type="submit" className={`btn ${editingId ? "btn-warning text-white" : "btn-primary"}`}>
                {editingId ? "Update" : "Simpan"}
              </button>
              {editingId && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setEditingId(null);
                    setName("");
                  }}
                >
                  Batal
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Daftar Penulis</h5>
          {loading ? (
            <p className="text-muted">Memuat data...</p>
          ) : (
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th width="10%">No</th>
                  <th>Nama Penulis</th>
                  <th width="20%" className="text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {authors.map((author, idx) => (
                  <tr key={author.id}>
                    <td>{idx + 1}</td>
                    <td className="fw-medium">{author.name}</td>
                    <td className="text-center">
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-warning" onClick={() => handleEdit(author)}>
                          Edit
                        </button>
                        <button className="btn btn-outline-danger" onClick={() => handleDelete(author.id)}>
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}