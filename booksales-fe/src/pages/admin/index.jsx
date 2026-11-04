import React, { useState } from 'react';
import { initialGenres, initialAuthors } from '../../Utils/adminData';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('genre');

  // State Read & Create Genre
  const [genres, setGenres] = useState(initialGenres);
  const [newGenre, setNewGenre] = useState({ name: '', description: '' });

  // State Read & Create Author
  const [authors, setAuthors] = useState(initialAuthors);
  const [newAuthor, setNewAuthor] = useState({ name: '', email: '' });

  // Handler Tambah Genre
  const handleAddGenre = (e) => {
    e.preventDefault();
    if (!newGenre.name) return;
    setGenres([...genres, { id: genres.length + 1, ...newGenre }]);
    setNewGenre({ name: '', description: '' });
  };

  // Handler Tambah Author
  const handleAddAuthor = (e) => {
    e.preventDefault();
    if (!newAuthor.name) return;
    setAuthors([...authors, { id: authors.length + 1, ...newAuthor }]);
    setNewAuthor({ name: '', email: '' });
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">Dashboard Admin</h2>

      {/* Navigasi Tab */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'genre' ? 'active fw-bold' : ''}`}
            onClick={() => setActiveTab('genre')}
          >
            Kelola Genre
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'author' ? 'active fw-bold' : ''}`}
            onClick={() => setActiveTab('author')}
          >
            Kelola Author
          </button>
        </li>
      </ul>

      {/* TAB GENRE */}
      {activeTab === 'genre' && (
        <div className="row g-4">
          <div className="col-md-5">
            <div className="card shadow-sm p-3">
              <h5 className="fw-bold mb-3">Tambah Genre Baru</h5>
              <form onSubmit={handleAddGenre}>
                <div className="mb-3">
                  <label className="form-label">Nama Genre</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={newGenre.name} 
                    onChange={(e) => setNewGenre({ ...newGenre, name: e.target.value })} 
                    placeholder="Masukkan nama genre"
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Deskripsi</label>
                  <textarea 
                    className="form-control" 
                    rows="3" 
                    value={newGenre.description} 
                    onChange={(e) => setNewGenre({ ...newGenre, description: e.target.value })} 
                    placeholder="Masukkan deskripsi genre"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Simpan Genre</button>
              </form>
            </div>
          </div>

          <div className="col-md-7">
            <h5 className="fw-bold mb-3">Daftar Genre</h5>
            <table className="table table-striped border">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Nama Genre</th>
                  <th>Deskripsi</th>
                </tr>
              </thead>
              <tbody>
                {genres.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td className="fw-semibold">{item.name}</td>
                    <td>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB AUTHOR */}
      {activeTab === 'author' && (
        <div className="row g-4">
          <div className="col-md-5">
            <div className="card shadow-sm p-3">
              <h5 className="fw-bold mb-3">Tambah Author Baru</h5>
              <form onSubmit={handleAddAuthor}>
                <div className="mb-3">
                  <label className="form-label">Nama Author</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={newAuthor.name} 
                    onChange={(e) => setNewAuthor({ ...newAuthor, name: e.target.value })} 
                    placeholder="Masukkan nama penulis"
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Author</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    value={newAuthor.email} 
                    onChange={(e) => setNewAuthor({ ...newAuthor, email: e.target.value })} 
                    placeholder="contoh@email.com"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Simpan Author</button>
              </form>
            </div>
          </div>

          <div className="col-md-7">
            <h5 className="fw-bold mb-3">Daftar Author</h5>
            <table className="table table-striped border">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Nama Author</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {authors.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td className="fw-semibold">{item.name}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;