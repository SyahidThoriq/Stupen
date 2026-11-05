import React, { useState, useEffect } from "react";
import { getGenres, createGenre, updateGenre, deleteGenre } from "../../../services/genres";

export default function AdminGenres() {
  const [genres, setGenres] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchGenres = async () => {
    setLoading(true);
    const data = await getGenres();
    setGenres(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Nama genre wajib diisi!");

    if (editingId) {
      await updateGenre(editingId, { name });
      alert("Genre berhasil diperbarui!");
    } else {
      await createGenre({ name });
      alert("Genre berhasil ditambahkan!");
    }

    setName("");
    setEditingId(null);
    fetchGenres();
  };

  const handleEdit = (genre) => {
    setEditingId(genre.id);
    setName(genre.name);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus genre ini?")) {
      await deleteGenre(id);
      fetchGenres();
    }
  };

  return (
    <div className="container py-4">
      <h3 className="fw-bold mb-4">Manajemen Genre</h3>

      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title mb-3">
            {editingId ? "✏️ Edit Genre" : "➕ Tambah Genre"}
          </h5>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan nama genre..."
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
          <h5 className="card-title mb-3">Daftar Genre</h5>
          {loading ? (
            <p className="text-muted">Memuat data...</p>
          ) : (
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th width="10%">No</th>
                  <th>Nama Genre</th>
                  <th width="20%" className="text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {genres.map((genre, idx) => (
                  <tr key={genre.id}>
                    <td>{idx + 1}</td>
                    <td className="fw-medium">{genre.name}</td>
                    <td className="text-center">
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-warning" onClick={() => handleEdit(genre)}>
                          Edit
                        </button>
                        <button className="btn btn-outline-danger" onClick={() => handleDelete(genre.id)}>
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