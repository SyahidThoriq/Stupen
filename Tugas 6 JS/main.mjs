// main.mjs
import { index, store, destroy } from "./controller.mjs";

const main = () => {
  // 1. Tampilkan data awal (10 data)
  console.log("--- DATA AWAL ---");
  index();

  // 2. Tambah minimal 2 data baru menggunakan store()
  store({ nama: 'Kiki Amalia', umur: 22, alamat: 'Jl. Sakura No. 11', email: 'kiki@example.com' });
  store({ nama: 'Luki Perdana', umur: 23, alamat: 'Jl. Magnolia No. 12', email: 'luki@example.com' });

  // 3. Tampilkan data setelah ditambahkan
  console.log("\n--- SETELAH DITAMBAH 2 DATA ---");
  index();

  // 4. Hapus data
  destroy();

  // 5. Tampilkan data akhir
  console.log("\n--- SETELAH DIHAPUS 1 DATA ---");
  index();
};

main();