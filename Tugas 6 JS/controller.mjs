// controller.mjs
import users from "./data.mjs";

// Melihat data menggunakan map()
const index = () => {
  console.log("\n=== DAFTAR USER ===");
  users.map((user, i) => {
    console.log(`${i + 1}. ${user.nama} | ${user.umur} th | ${user.alamat} | ${user.email}`);
  });
};

// Menambah data
const store = (userBaru) => {
  users.push(userBaru);
  console.log(`\n[+] Berhasil menambahkan: ${userBaru.nama}`);
};

// Menghapus data paling akhir (atau berdasarkan index)
const destroy = () => {
  const deleted = users.pop();
  console.log(`\n[-] Berhasil menghapus data terakhir: ${deleted?.nama}`);
};

export { index, store, destroy };