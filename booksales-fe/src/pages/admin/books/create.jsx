import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getGenres } from "../../../services/genres";
import { getAuthors } from "../../../services/authors";
import { createBook } from "../../../services/books";

export default function BookCreate() {
  const navigate = useNavigate();

  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    stock: 0,
    genre_id: 0,
    author_id: 0,
    cover_photo: null,
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [genresData, authorsData] = await Promise.all([
          getGenres(),
          getAuthors(),
        ]);
        setGenres(genresData || []);
        setAuthors(authorsData || []);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Fungsi handleSubmit persis seperti di video pengajar
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = new FormData();
      for (const key in formData) {
        payload.append(key, formData[key]);
      }

      await createBook(payload);
      navigate("/admin/books");
    } catch (error) {
      console.log(error);
      alert("Error creating book");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            {/* TITLE */}
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            {/* PRICE & STOCK */}
            <div className="w-full">
              <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Stock
              </label>
              <input
                type="number"
                name="stock"
                id="stock"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={formData.stock}
                onChange={handleChange}
                required
              />
            </div>

            {/* GENRE & AUTHOR */}
            <div>
              <label htmlFor="genre_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Genre
              </label>
              <select
                name="genre_id"
                id="genre_id"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={formData.genre_id}
                onChange={handleChange}
              >
                <option value={0}>Select Genre</option>
                {genres.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="author_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Author
              </label>
              <select
                name="author_id"
                id="author_id"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={formData.author_id}
                onChange={handleChange}
              >
                <option value={0}>Select Author</option>
                {authors.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {/* COVER PHOTO */}
            <div className="sm:col-span-2">
              <label htmlFor="cover_photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Cover Photo
              </label>
              <input
                type="file"
                name="cover_photo"
                id="cover_photo"
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
                onChange={handleChange}
              />
            </div>

            {/* DESCRIPTION */}
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
}