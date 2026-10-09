import React from 'react';
import books from '../Utils/books';

function Home() {
  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <h1 className="display-5 fw-bold">Selamat Datang di Bookstore</h1>
        <p className="fs-4 text-muted">Temukan berbagai koleksi buku pemrograman dan teknologi terbaik.</p>
      </div>

      <div className="container my-5">
        <h3 className="mb-4 text-center fw-bold">Buku Terpopuler</h3>
        <div className="row g-4">
          {books.slice(0, 3).map((book) => (
            <div key={book.id} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img src={book.image} className="card-img-top" alt={book.title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{book.title}</h5>
                  <p className="text-muted small">Penulis: {book.author} ({book.year})</p>
                  <p className="card-text text-secondary">{book.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;