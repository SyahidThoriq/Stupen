import React, { useState, useEffect } from "react";
import { getBooks } from "../../services/books";

export default function Home() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedBook = async () => {
      setLoading(true);
      const data = await getBooks();
      if (data && data.length > 0) {
        setBook(data[0]); // Ambil produk buku pertama
      }
      setLoading(false);
    };
    fetchFeaturedBook();
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center text-muted">
        Memuat produk...
      </div>
    );
  }

  if (!book) {
    return (
      <div className="container py-5 text-center text-muted">
        Tidak ada produk tersedia.
      </div>
    );
  }

  return (
    <div className="bg-white min-vh-100 py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* FOTO PRODUCTS / COVER BUKU DI KIRI */}
          <div className="col-md-5 text-center">
            <div className="p-4 bg-light rounded-4 shadow-sm border">
              <img
                src={
                  book.cover_photo ||
                  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400"
                }
                alt={book.title}
                className="img-fluid rounded-3 shadow-sm"
                style={{ maxHeight: "380px", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* DETAIL BUKU / PRODUK DI KANAN */}
          <div className="col-md-7">
            <h1 className="display-6 fw-bold text-dark mb-3">
              {book.title} - {book.author?.name || book.author || "Penulis"}
            </h1>

            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="fw-bold text-dark mb-0">
                Rp {Number(book.price || 120000).toLocaleString("id-ID")}
              </h2>
              <div className="text-warning small">
                ★ ★ ★ ★ ★{" "}
                <span className="text-muted ms-1">(5.0) 345 Reviews</span>
              </div>
            </div>

            {/* TOMBOL ADD TO CART */}
            <button
              className="btn btn-primary btn-lg rounded-3 px-4 py-2 my-3 fw-semibold d-inline-flex align-items-center gap-2 shadow-sm"
              onClick={() =>
                alert(`Buku "${book.title}" berhasil ditambahkan ke keranjang!`)
              }
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              Add to cart
            </button>

            <div className="mt-4 pt-3 border-top">
              <p className="text-muted lh-base">
                {book.description ||
                  "Studio quality three mic array for crystal clear calls and voice recordings. Six-speaker sound system for a remarkably robust and high-quality audio experience. Up to 256GB of ultrafast SSD storage."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}