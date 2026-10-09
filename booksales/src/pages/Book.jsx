import React, { useState } from 'react';
import initialBooks from '../Utils/books';

function Book() {
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) return;

    const addedBook = {
      id: books.length + 1,
      ...newBook,
      year: parseInt(newBook.year) || new Date().getFullYear(),
      image: newBook.image || 'https://via.placeholder.com/150'
    };

    setBooks([...books, addedBook]);
    setNewBook({ title: '', author: '', year: '', description: '', image: '' });
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Daftar Koleksi Buku</h2>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addBookModal">
          <i className="fa-solid fa-plus me-2"></i>Tambah Buku
        </button>
      </div>

      {/* Menampilkan Data dengan Metode MAP */}
      <div className="row g-4">
        {books.map((book) => (
          <div key={book.id} className="col-md-4 col-sm-6">
            <div className="card h-100 shadow-sm border-0">
              <img 
                src={book.image} 
                className="card-img-top" 
                alt={book.title} 
                style={{ height: '220px', objectFit: 'cover' }} 
              />
              <div className="card-body d-flex flex-column">
                <span className="badge bg-secondary mb-2 align-self-start">{book.year}</span>
                <h5 className="card-title fw-bold">{book.title}</h5>
                <p className="card-text text-muted small mb-2">Penulis: {book.author}</p>
                <p className="card-text text-secondary">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form Tambah Buku (Nilai Tambah Hooks) */}
      <div className="modal fade" id="addBookModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Tambah Buku Baru</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleAddBook}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Judul Buku</label>
                  <input type="text" name="title" className="form-control" value={newBook.title} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Penulis</label>
                  <input type="text" name="author" className="form-control" value={newBook.author} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Tahun Terbit</label>
                  <input type="number" name="year" className="form-control" value={newBook.year} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">URL Gambar Sampul</label>
                  <input type="text" name="image" className="form-control" placeholder="https://..." value={newBook.image} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Deskripsi</label>
                  <textarea name="description" className="form-control" rows="3" value={newBook.description} onChange={handleChange}></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Simpan Buku</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;