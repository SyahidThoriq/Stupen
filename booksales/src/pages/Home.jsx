import React from 'react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="my-4">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Temukan Buku Favoritmu di Bookstore
            </h1>
            <p className="lead">
              Jelajahi ribuan koleksi buku terbaik dari berbagai genre mulai dari fiksi, teknologi, hingga pengembangan diri.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <a href="#books" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Lihat Koleksi</a>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg rounded-3">
            <img className="img-fluid rounded-lg-3" src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=720&q=80" alt="Bookstore" />
          </div>
        </div>
      </section>

      {/* Catalog Books Section */}
      <div id="books" className="album py-5 bg-body-tertiary rounded-3 mb-5">
        <div className="container">
          <h2 className="pb-2 border-bottom text-center mb-4">Koleksi Terbaru</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {[
              { title: "Seni Berpikir Komputasional", category: "Teknologi", img: "https://picsum.photos/id/24/400/300" },
              { title: "Petualangan di Awan", category: "Fiksi", img: "https://picsum.photos/id/1025/400/300" },
              { title: "Panduan Pemula React JS", category: "Pemrograman", img: "https://picsum.photos/id/0/400/300" },
            ].map((book, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm h-100">
                  <img src={book.img} className="card-img-top" alt={book.title} style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <span className="badge bg-primary mb-2">{book.category}</span>
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text text-muted">Buku berkualitas tinggi untuk menambah wawasan Anda.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;