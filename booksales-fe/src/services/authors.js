import axios from "axios";

let dummyAuthors = [
  { id: 1, name: "James Clear" },
  { id: 2, name: "Henry Manampiring" },
  { id: 3, name: "Morgan Housel" },
];

export const getAuthors = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/authors");
    return res.data.data || res.data;
  } catch (error) {
    return dummyAuthors;
  }
};

export const createAuthor = async (data) => {
  try {
    const res = await axios.post("http://localhost:8000/api/authors", data);
    return res.data;
  } catch (error) {
    const newAuthor = { id: Date.now(), ...data };
    dummyAuthors.push(newAuthor);
    return newAuthor;
  }
};

export const updateAuthor = async (id, data) => {
  try {
    const res = await axios.put(`http://localhost:8000/api/authors/${id}`, data);
    return res.data;
  } catch (error) {
    dummyAuthors = dummyAuthors.map((a) => (a.id === id ? { ...a, ...data } : a));
    return data;
  }
};

export const deleteAuthor = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:8000/api/authors/${id}`);
    return res.data;
  } catch (error) {
    dummyAuthors = dummyAuthors.filter((a) => a.id !== id);
    return true;
  }
};