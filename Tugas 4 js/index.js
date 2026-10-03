// 1. Class Kendaraan (Sebagai objek yang disewa)
class Kendaraan {
  constructor(nama, tipe, platNomor) {
    this.nama = nama;
    this.tipe = tipe;
    this.platNomor = platNomor;
  }

  getDetailInfo() {
    return `${this.nama} (${this.tipe}) - Plat: ${this.platNomor}`;
  }
}

// 2. Class Pelanggan (Sesuai Soal Tugas)
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null; // Default: belum menyewa kendaraan
  }

  // Metode untuk mencatat transaksi penyewaan kendaraan
  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log(`[TRANSAKSI SUKSES] ${this.nama} berhasil menyewa ${kendaraan.nama}.`);
  }
}

// 3. Class SistemManajemenTransportasi
class SistemManajemenTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  // Menambahkan pelanggan ke dalam sistem
  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  // Metode untuk menampilkan daftar pelanggan yang sedang menyewa kendaraan
  tampilkanPelangganSewa() {
    console.log("\n==================================================");
    console.log("   DAFTAR PELANGGAN YANG SEDANG MENYEWA KENDARAAN  ");
    console.log("==================================================");

    // Filter hanya pelanggan yang sedang menyewa (kendaraanDisewa != null)
    const pelangganSewa = this.daftarPelanggan.filter(
      (p) => p.kendaraanDisewa !== null
    );

    if (pelangganSewa.length === 0) {
      console.log("Saat ini tidak ada pelanggan yang sedang menyewa.");
      return;
    }

    pelangganSewa.forEach((pelanggan, index) => {
      console.log(`${index + 1}. Nama Pelanggan : ${pelanggan.nama}`);
      console.log(`   No. Telepon    : ${pelanggan.nomorTelepon}`);
      console.log(`   Kendaraan Disewa: ${pelanggan.kendaraanDisewa.getDetailInfo()}`);
      console.log("--------------------------------------------------");
    });
  }
}

// ==================================================
// EKSEKUSI & HASIL OUTPUT
// ==================================================

// Inisialisasi sistem
const sistem = new SistemManajemenTransportasi();

// 1. Buat data Kendaraan
const mobil1 = new Kendaraan("Toyota Avanza", "Mobil", "B 1234 ABC");
const motor1 = new Kendaraan("Honda Vario", "Motor", "B 5678 XYZ");

// 2. Buat data Pelanggan
const pelanggan1 = new Pelanggan("Budi Santoso", "081234567890");
const pelanggan2 = new Pelanggan("Siti Aminah", "089876543210");
const pelanggan3 = new Pelanggan("Andi Wijaya", "085511223344");

// 3. Masukkan pelanggan ke sistem
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);

// 4. Catat Transaksi Penyewaan
pelanggan1.sewaKendaraan(mobil1);
pelanggan2.sewaKendaraan(motor1);
// (pelanggan3 tidak menyewa apa-apa)

// 5. Tampilkan Hasil
sistem.tampilkanPelangganSewa();