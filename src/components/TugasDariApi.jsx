import { useState, useEffect } from "react";
import { ambilTugasDariApi, ENDPOINT_TODOS } from "../api/tugasApi";
import ItemTugasApi from "./ItemTugasApi";
import FormKirimTugas from "./FormKirimTugas";

function TugasDariApi() {
  // Tiga kondisi disimpan sebagai state terpisah (pola Modul 7.5).
  const [daftarApi, setDaftarApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Setiap kali nilainya naik, useEffect dijalankan lagi (dipakai tombol "Coba Lagi").
  const [percobaan, setPercobaan] = useState(0);

  useEffect(() => {
    // Penanda agar hasil request lama diabaikan jika effect dijalankan ulang.
    let dibatalkan = false;

    async function muatData() {
      try {
        setLoading(true);
        setError(null);
        const data = await ambilTugasDariApi();
        if (!dibatalkan) setDaftarApi(data);
      } catch (err) {
        if (!dibatalkan) setError(err.message);
      } finally {
        if (!dibatalkan) setLoading(false);
      }
    }

    muatData();
    return () => {
      dibatalkan = true;
    };
  }, [percobaan]);

  function cobaLagi() {
    setPercobaan(percobaan + 1);
  }

  function tambahKeDaftar(tugasBaru) {
    setDaftarApi([tugasBaru, ...daftarApi]);
  }

  return (
    <section id="tugas-api" className="panel-putih">
      <h2 className="h4 judul-seksi">Tugas dari Server (API)</h2>
      <p className="text-secondary">
        Data diambil dengan Axios dari <code>{ENDPOINT_TODOS}</code>
      </p>

      <div className="row g-4">
        <div className="col-12 col-lg-8">
          {loading && (
            <div className="kosong-tugas text-center" role="status">
              <div className="spinner-border text-secondary mb-2" aria-hidden="true"></div>
              <p className="fw-bold mb-0">Memuat data dari server...</p>
            </div>
          )}

          {!loading && error && (
            <div className="alert alert-danger" role="alert">
              <p className="fw-bold mb-1">Gagal memuat data dari server.</p>
              <p className="mb-3">
                Periksa koneksi internet Anda lalu coba lagi.
                <br />
                <small>Detail: {error}</small>
              </p>
              <button type="button" className="btn btn-brand btn-sm" onClick={cobaLagi}>
                Coba Lagi
              </button>
            </div>
          )}

          {!loading && !error && daftarApi.length === 0 && (
            <div className="kosong-tugas text-center">
              <p className="fw-bold mb-0">Belum ada data Tugas dari server</p>
            </div>
          )}

          {!loading && !error && daftarApi.length > 0 && (
            <>
              <p className="text-secondary">
                Berhasil memuat {daftarApi.length} tugas dari server.
              </p>
              <ul className="list-group">
                {daftarApi.map((tugas) => (
                  <ItemTugasApi
                    key={tugas.id}
                    id={tugas.id}
                    title={tugas.title}
                    completed={tugas.completed}
                    userId={tugas.userId}
                  />
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="col-12 col-lg-4">
          <FormKirimTugas onBerhasil={tambahKeDaftar} />
        </div>
      </div>
    </section>
  );
}

export default TugasDariApi;