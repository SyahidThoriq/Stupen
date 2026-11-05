import axios from "axios";

// Dummy data fallback jika backend belum aktif
let dummyGenres = [
  { id: 1, name: "Self Improvement" },
  { id: 2, name: "Filsafat" },
  { id: 3, name: "Bisnis & Ekonomi" },
];

export const getGenres = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/genres");
    return res.data.data || res.data;
  } catch (error) {
    return dummyGenres;
  }
};

export const createGenre = async (data) => {
  try {
    const res = await axios.post("http://localhost:8000/api/genres", data);
    return res.data;
  } catch (error) {
    const newGenre = { id: Date.now(), ...data };
    dummyGenres.push(newGenre);
    return newGenre;
  }
};

export const updateGenre = async (id, data) => {
  try {
    const res = await axios.put(`http://localhost:8000/api/genres/${id}`, data);
    return res.data;
  } catch (error) {
    dummyGenres = dummyGenres.map((g) => (g.id === id ? { ...g, ...data } : g));
    return data;
  }
};

export const deleteGenre = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:8000/api/genres/${id}`);
    return res.data;
  } catch (error) {
    dummyGenres = dummyGenres.filter((g) => g.id !== id);
    return true;
  }
};