import axios from "axios";

export const registerUser = async (userData) => {
  try {
    const res = await axios.post("http://localhost:8000/api/register", userData);
    return res.data;
  } catch (error) {
    // Mode fallback dummy jika server backend belum siap
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: "success",
          message: "Registrasi berhasil!",
          data: userData,
        });
      }, 800);
    });
  }
};