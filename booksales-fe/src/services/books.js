import axios from "axios";

const API_URL = "http://localhost:8000/api";

// Data Dummy Buku untuk Tampilan UI
const dummyBooks = [
  {
    id: 1,
    title: "Atomic Habits",
    price: 120000,
    stock: 25,
    cover_photo: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
    description: "Cara mudah dan terbukti untuk membangun kebiasaan baik dan menghilangkan kebiasaan buruk.",
    genre: { id: 1, name: "Self Improvement" },
    author: { id: 1, name: "James Clear" }
  },
  {
    id: 2,
    title: "Filosofi Teras",
    price: 98000,
    stock: 15,
    cover_photo: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    description: "Filsafat Yunani-Romawi kuno untuk mental tangguh di era modern.",
    genre: { id: 2, name: "Filsafat" },
    author: { id: 2, name: "Henry Manampiring" }
  },
  {
    id: 3,
    title: "Laskar Pelangi",
    price: 85000,
    stock: 40,
    cover_photo: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
    description: "Kisah perjuangan 10 anak Belitung dalam mengejar mimpi dan cita-cita.",
    genre: { id: 3, name: "Novel" },
    author: { id: 3, name: "Andrea Hirata" }
  },
  {
    id: 4,
    title: "Bumi Manusia",
    price: 135000,
    stock: 18,
    cover_photo: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
    description: "Karya legendaris pergerakan nasional di awal abad ke-20.",
    genre: { id: 3, name: "Novel" },
    author: { id: 4, name: "Pramoedya Ananta Toer" }
  },
  {
    id: 5,
    title: "Clean Code",
    price: 250000,
    stock: 10,
    cover_photo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
    description: "Panduan praktis penulisan kode software yang bersih dan mudah dirawat.",
    genre: { id: 4, name: "Teknologi" },
    author: { id: 5, name: "Robert C. Martin" }
  }
];

export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data && response.data.length > 0 ? response.data : dummyBooks;
  } catch (error) {
    return dummyBooks;
  }
};

export const showBook = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/books/${id}`);
    return response.data || dummyBooks.find((b) => b.id === Number(id));
  } catch (error) {
    return dummyBooks.find((b) => b.id === Number(id)) || null;
  }
};

export const createBook = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/books`, data);
    return response.data;
  } catch (error) {
    return { success: true };
  }
};

export const updateBook = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/books/${id}`, data);
    return response.data;
  } catch (error) {
    return { success: true };
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    return { success: true };
  }
};