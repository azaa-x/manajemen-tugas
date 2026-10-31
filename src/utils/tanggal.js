const BULAN = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

export function pecahTanggal(iso) {
  const d = new Date(iso);
  const jam = String(d.getHours()).padStart(2, "0");
  const menit = String(d.getMinutes()).padStart(2, "0");
  return {
    tanggal: d.getDate(),
    bulan: BULAN[d.getMonth()],
    tahun: d.getFullYear(),
    jam: `${jam}:${menit}`,
  };
}

export function formatTanggal(iso) {
  const { tanggal, bulan, tahun, jam } = pecahTanggal(iso);
  return `${tanggal} ${bulan} ${tahun}, ${jam}`;
}