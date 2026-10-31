export const STATUS = {
  belum: { label: "Belum dikerjakan", badge: "text-bg-secondary" },
  proses: { label: "Sedang dikerjakan", badge: "text-bg-warning" },
  selesai: { label: "Selesai", badge: "text-bg-success" },
};

export const matkulAwal = [
  { nama: "Basis Data", kode: "CII2B3", dosen: "BDA" },
  { nama: "Perancangan dan Pemrograman Web", kode: "CRI3B3", dosen: "VLY" },
  { nama: "Manajemen Bisnis", kode: "MBS101", dosen: "MBA" },
  { nama: "Struktur Data", kode: "CII2A3", dosen: "STD" },
  { nama: "Pengalaman Pengguna", kode: "UXD301", dosen: "UXP" },
];

export const tugasAwal = [
  {
    id: 1,
    nama: "Tugas 02 HTML",
    matkul: "Perancangan dan Pemrograman Web",
    dosen: "VLY",
    deadline: "2026-09-28T23:59",
    status: "proses",
    deskripsi: "Buat sebuah halaman web sederhana menggunakan HTML dan CSS berdasarkan studi kasus yang diberikan. Kumpulkan hasil pengerjaan dalam format PDF melalui portal kelas.",
    lampiran: "lampiran-tugas.pdf",
    lampiranUrl: "../assets/lampiran-tugas.pdf",
  },
  {
    id: 2,
    nama: "Kuis 02",
    matkul: "Perancangan dan Pemrograman Web",
    dosen: "VLY",
    deadline: "2026-09-30T17:00",
    status: "belum",
    deskripsi: "Kuis singkat materi HTML dan CSS.",
    lampiran: "",
    lampiranUrl: "",
  },
  {
    id: 3,
    nama: "Project 01",
    matkul: "Pengalaman Pengguna",
    dosen: "",
    deadline: "2026-10-01T23:59",
    status: "belum",
    deskripsi: "Project pertama mata kuliah Pengalaman Pengguna.",
    lampiran: "",
    lampiranUrl: "",
  },
  {
    id: 4,
    nama: "Tugas 01 Pengenalan Web",
    matkul: "Perancangan dan Pemrograman Web",
    dosen: "VLY",
    deadline: "2026-09-21T23:59",
    status: "selesai",
    deskripsi: "Tugas pengenalan konsep dasar web.",
    lampiran: "",
    lampiranUrl: "",
  },
];