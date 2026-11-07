import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../services/books";

export default function Home() {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const data = await getBooks();
      setFeaturedBooks(data || []);
      setLoading(false);
    };
    fetchBooks();
  }, []);

  // Ambil buku paling pertama sebagai Highlight Utama Hero Banner
  const heroBook = featuredBooks[0] || {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 120000,
    cover_photo: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    description: "Cara mudah dan terbukti untuk membangun kebiasaan baik & menghancurkan kebiasaan buruk.",
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* HERO SECTION DENGAN GAMBAR BUKU UTAMA */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-12 lg:py-16">
        <div className="max-w-screen-xl px-4 mx-auto grid lg:grid-cols-12 gap-8 items-center">
          
          {/* TEKS HERO BANNER (KIRI) */}
          <div className="mr-auto place-self-center lg:col-span-7 text-left">
            <span className="inline-flex items-center py-1 px-3 mb-6 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
              🔥 Best Seller Minggu Ini
            </span>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl dark:text-white">
              {heroBook.title}
            </h1>
            <p className="max-w-2xl mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              Karya: {heroBook.author?.name || heroBook.author || "Penulis Terkenal"}
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg dark:text-gray-400">
              {heroBook.description || "Jelajahi koleksi buku terpopuler dan tingkatkan wawasanmu setiap hari dengan harga terbaik."}
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to={`/books/show/${heroBook.id}`}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 shadow-md transition-all"
              >
                Beli Sekarang — Rp {Number(heroBook.price || 0).toLocaleString("id-ID")}
              </Link>
              <Link
                to="/books"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Lihat Katalog Lainnya
              </Link>
            </div>
          </div>

          {/* GAMBAR BUKU UTAMA / HERO IMAGE (KANAN) */}
          <div className="lg:mt-0 lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={
                  heroBook.cover_photo ||
                  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80"
                }
                alt={heroBook.title}
                className="relative w-64 md:w-80 h-96 object-cover rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

      {/* GRID DAFTAR BUKU PILIHAN */}
      <section className="py-12 px-4 mx-auto max-w-screen-xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Rekomendasi Lainnya</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Pilihan buku terbaik untuk menemani harimu</p>
          </div>
          <Link to="/books" className="text-blue-600 hover:underline font-semibold text-sm">
            Lihat Semua →
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Memuat koleksi...</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredBooks.slice(0, 4).map((book) => (
              <div
                key={book.id}
                className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <div className="h-52 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 mb-4">
                    <Link to={`/books/show/${book.id}`}>
                      <img
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        src={
                          book.cover_photo ||
                          "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=80"
                        }
                        alt={book.title}
                      />
                    </Link>
                  </div>
                  <span className="mb-2 inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    {book.genre?.name || book.genre || "Umum"}
                  </span>
                  <Link
                    to={`/books/show/${book.id}`}
                    className="line-clamp-1 block text-base font-bold text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                  >
                    {book.title}
                  </Link>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {book.author?.name || book.author || "Penulis"}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-700">
                  <p className="text-base font-bold text-gray-900 dark:text-white">
                    Rp {Number(book.price || 0).toLocaleString("id-ID")}
                  </p>
                  <Link
                    to={`/books/show/${book.id}`}
                    className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}