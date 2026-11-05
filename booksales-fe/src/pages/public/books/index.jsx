import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../../services/books";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        setLoading(true);
        const data = await getBooks();
        setBooks(data || []);
      } catch (err) {
        console.error("Gagal mengambil data buku:", err);
        setError("Gagal memuat katalog buku.");
      } finally {
        setLoading(false);
      }
    };
    fetchBooksData();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
          Memuat katalog buku...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-lg font-medium text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* HEADER SECTION */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Buku Terlaris
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Jelajahi koleksi buku populer dan pilihan terbaik minggu ini.
          </p>
        </div>

        {/* GRID KATALOG BUKU */}
        {books.length > 0 ? (
          <div className="mb-4 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <div
                key={book.id}
                className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  {/* COVER BUKU */}
                  <div className="h-56 w-full overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
                    <Link to={`/books/show/${book.id}`}>
                      <img
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        src={
                          book.cover_photo ||
                          "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                        }
                        alt={book.title}
                      />
                    </Link>
                  </div>

                  {/* DETAIL INFORMASI */}
                  <div className="pt-4">
                    <span className="mb-2 inline-block rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                      {book.genre?.name || book.genre || "Umum"}
                    </span>

                    <Link
                      to={`/books/show/${book.id}`}
                      className="line-clamp-1 block text-base font-bold text-gray-900 hover:underline dark:text-white"
                      title={book.title}
                    >
                      {book.title}
                    </Link>

                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {book.author?.name || book.author || "Penulis"}
                    </p>
                  </div>
                </div>

                {/* HARGA & ACTION BUTTON */}
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-700">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    Rp {Number(book.price || 0).toLocaleString("id-ID")}
                  </p>

                  <Link
                    to={`/books/show/${book.id}`}
                    className="inline-flex items-center rounded-lg bg-primary-700 px-3.5 py-2 text-xs font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-gray-500 dark:text-gray-400">
            Belum ada data buku yang tersedia.
          </div>
        )}
      </div>
    </section>
  );
}