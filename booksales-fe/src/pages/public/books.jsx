import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../services/books";

export default function BooksList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const data = await getBooks();
      setBooks(data || []);
      setLoading(false);
    };
    fetchBooks();
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
          Katalog Buku Terlaris 📚
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Jelajahi seluruh daftar koleksi buku terbaik kami.
        </p>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Memuat katalog buku...</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {books.map((book) => (
              <div
                key={book.id}
                className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div>
                  <div className="h-52 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 mb-4">
                    <img
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      src={
                        book.cover_photo ||
                        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=80"
                      }
                      alt={book.title}
                    />
                  </div>
                  <span className="mb-2 inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    {book.genre?.name || book.genre || "Umum"}
                  </span>
                  <h3 className="line-clamp-1 block text-base font-bold text-gray-900 dark:text-white">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {book.author?.name || book.author || "Penulis"}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-700">
                  <p className="text-base font-bold text-gray-900 dark:text-white">
                    Rp {Number(book.price || 0).toLocaleString("id-ID")}
                  </p>
                  <button className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800">
                    Beli
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}