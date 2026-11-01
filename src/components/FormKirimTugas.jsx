import { useState } from "react";
import { kirimTugasKeApi } from "../api/tugasApi";

function FormKirimTugas({ onBerhasil }) {
  const [judul, setJudul] = useState("");
  const [mengirim, setMengirim] = useState(false);
  const [pesan, setPesan] = useState(null);

  async function kirimForm(e) {
    e.preventDefault();

    if (judul.trim().length < 3) {
      setPesan({ jenis: "danger", teks: "Judul tugas minimal 3 karakter." });
      return;
    }

    try {
      setMengirim(true);
      setPesan(null);
      const hasil = await kirimTugasKeApi({ nama: judul.trim() });
      onBerhasil({ ...hasil, id: `baru-${Date.now()}`, baru: true });
      setJudul("");
      setPesan({
        jenis: "success",
        teks: `Berhasil dikirim ke server (balasan id: ${hasil.id}).`,
      });
    } catch {
      setPesan({
        jenis: "danger",
        teks: "Gagal mengirim tugas ke server. Silakan coba lagi.",
      });
    } finally {
      setMengirim(false);
    }
  }

  return (
    <form onSubmit={kirimForm} noValidate className="kotak-form">
      <h3 className="h6 fw-bold">Kirim tugas ke server</h3>
      <p className="text-secondary small">
        Tugas dikirim dengan POST. Server tiruan hanya membalas, tidak menyimpannya.
      </p>
      <div className="mb-3">
        <label htmlFor="judulApi" className="form-label">Judul Tugas</label>
        <input
          id="judulApi"
          type="text"
          className="form-control"
          placeholder="Contoh: Revisi laporan praktikum"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          disabled={mengirim}
        />
      </div>

      {pesan && (
        <div className={`alert alert-${pesan.jenis} py-2`} role="alert">
          {pesan.teks}
        </div>
      )}

      <button type="submit" className="btn btn-brand w-100" disabled={mengirim}>
        {mengirim ? "Mengirim..." : "Kirim"}
      </button>
    </form>
  );
}

export default FormKirimTugas;