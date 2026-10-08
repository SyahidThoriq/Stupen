import React from 'react';

function App() {
  return (
    <>
      <div className="container">
        {/* Header / Navbar */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="#home" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2x" style={{ color: "#74c0fc" }}></i>
              <span className="ms-2 fs-4 fw-bold">Bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#books" className="nav-link px-2">Book</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Temukan Buku Favoritmu di Bookstore
              </h1>
              <p className="lead">
                Jelajahi ribuan koleksi buku terbik dari berbagai genre mulai dari fiksi, teknologi, hingga pengembangan diri dengan harga terbaik.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <a href="#books" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                  Lihat Koleksi
                </a>
                <a href="#contact" className="btn btn-outline-secondary btn-lg px-4">
                  Hubungi Kami
                </a>
              </div>
            </div>

            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg rounded-3">
              <img 
                className="img-fluid rounded-lg-3" 
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=720&q=80" 
                alt="Bookstore Hero" 
              />
            </div>
          </div>
        </section>

        {/* Best Seller Banner */}
        <div id="books" className="bg-dark text-secondary px-4 py-5 text-center rounded-3 my-5">
          <div className="py-5">
            <h1 className="display-5 fw-bold text-white">Buku Best Seller Minggu Ini</h1>
            <div className="col-lg-6 mx-auto">
              <p className="fs-5 mb-4 text-light">
                Dapatkan diskon hingga 30% untuk koleksi terlaris bulan ini. Persediaan terbatas!
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">
                  Beli Sekarang
                </button>
                <button type="button" className="btn btn-outline-light btn-lg px-4">
                  Katalog Lainnya
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Catalog Books Section */}
        <div className="album py-5 bg-body-tertiary rounded-3 mb-5">
          <div className="container">
            <h2 className="pb-2 border-bottom text-center mb-4">Koleksi Terbaru</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {[
                { title: "Seni Berpikir Komputasional", category: "Teknologi", img: "https://picsum.photos/id/24/400/300" },
                { title: "Petualangan di Awan", category: "Fiksi", img: "https://picsum.photos/id/1025/400/300" },
                { title: "Panduan Pemula React JS", category: "Pemrograman", img: "https://picsum.photos/id/0/400/300" },
                { title: "Membangun Bisnis Digital", category: "Bisnis", img: "https://picsum.photos/id/1060/400/300" },
                { title: "Misteri Rumah Tua", category: "Horor/Thriller", img: "https://picsum.photos/id/1069/400/300" },
                { title: "Filosofi Hidup Bahagia", category: "Self Development", img: "https://picsum.photos/id/367/400/300" },
              ].map((book, index) => (
                <div className="col" key={index}>
                  <div className="card shadow-sm h-100">
                    <img src={book.img} className="card-img-top" alt={book.title} style={{ height: "200px", objectFit: "cover" }} />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <span className="badge bg-primary mb-2">{book.category}</span>
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text text-muted">Buku berkualitas tinggi yang ditulis oleh penulis berpengalaman di bidangnya.</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-primary">Detail</button>
                          <button type="button" className="btn btn-sm btn-primary">Beli</button>
                        </div>
                        <small className="text-body-secondary">Rp 85.000</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TEAM SECTION */}
        <section id="team" className="py-5 mb-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">Tim Kami</h2>
              <p className="text-muted">Orang-orang hebat di balik pengelolaan Bookstore</p>
            </div>
            <div className="row g-4 justify-content-center">
              {/* Member 1 */}
              <div className="col-md-4 text-center">
                <div className="card shadow-sm p-4 border-0 h-100">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" 
                    className="rounded-circle mx-auto mb-3" 
                    alt="Team 1" 
                    style={{ width: "120px", height: "120px", objectFit: "cover" }} 
                  />
                  <h4 className="fw-bold mb-1">Sarah Johnson</h4>
                  <p className="text-primary mb-2">Founder & CEO</p>
                  <p className="text-muted small">Membangun Bookstore dengan visi menyebarkan kegemaran membaca ke seluruh pelosok negeri.</p>
                </div>
              </div>

              {/* Member 2 */}
              <div className="col-md-4 text-center">
                <div className="card shadow-sm p-4 border-0 h-100">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" 
                    className="rounded-circle mx-auto mb-3" 
                    alt="Team 2" 
                    style={{ width: "120px", height: "120px", objectFit: "cover" }} 
                  />
                  <h4 className="fw-bold mb-1">Budi Santoso</h4>
                  <p className="text-primary mb-2">Lead Curator & Editor</p>
                  <p className="text-muted small">Bertanggung jawab memilih koleksi buku terbaik dan mengawasi kualitas konten.</p>
                </div>
              </div>

              {/* Member 3 */}
              <div className="col-md-4 text-center">
                <div className="card shadow-sm p-4 border-0 h-100">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" 
                    className="rounded-circle mx-auto mb-3" 
                    alt="Team 3" 
                    style={{ width: "120px", height: "120px", objectFit: "cover" }} 
                  />
                  <h4 className="fw-bold mb-1">Siti Nurhaliza</h4>
                  <p className="text-primary mb-2">Head of Marketing</p>
                  <p className="text-muted small">Mengelola kampanye promosi dan memastikan layanan pelanggan yang memuaskan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-5 bg-light rounded-3 mb-5">
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Hubungi Kami</h2>
              <p className="text-muted">Punya pertanyaan atau saran? Silakan kirimkan pesan kepada kami.</p>
            </div>
            <div className="row g-4">
              {/* Informational Column */}
              <div className="col-md-5">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <h4 className="mb-4">Informasi Kontak</h4>
                  <p><i className="fa-solid fa-location-dot me-3 text-primary"></i> Jl. Pendidikan No. 123, Jakarta</p>
                  <p><i className="fa-solid fa-envelope me-3 text-primary"></i> support@bookstore.com</p>
                  <p><i className="fa-solid fa-phone me-3 text-primary"></i> +62 812-3456-7890</p>
                  <hr />
                  <h5 className="mt-3 mb-2">Jam Operasional</h5>
                  <p className="text-muted mb-1">Senin - Jumat: 08:00 - 20:00</p>
                  <p className="text-muted">Sabtu - Minggu: 09:00 - 17:00</p>
                </div>
              </div>

              {/* Contact Form Column */}
              <div className="col-md-7">
                <form className="p-4 bg-white rounded shadow-sm">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">Nama Lengkap</label>
                    <input type="text" className="form-control" id="name" placeholder="Masukkan nama Anda" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Alamat Email</label>
                    <input type="email" className="form-control" id="email" placeholder="nama@email.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-semibold">Subjek</label>
                    <input type="text" className="form-control" id="subject" placeholder="Subjek pesan" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-semibold">Pesan</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Tuliskan pesan Anda di sini..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Kirim Pesan</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#home" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#books" className="nav-link px-2 text-body-secondary">Book</a></li>
            <li className="nav-item"><a href="#team" className="nav-link px-2 text-body-secondary">Team</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2026 Bookstore, Inc. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;