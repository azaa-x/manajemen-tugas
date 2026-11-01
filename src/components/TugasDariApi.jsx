import { useState, useEffect } from "react";
import { ambilTugasDariApi, ENDPOINT_TODOS } from "../api/tugasApi";
import ItemTugasApi from "./ItemTugasApi";
import FormKirimTugas from "./FormKirimTugas";

function TugasDariApi() {
  const [daftarApi, setDaftarApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [percobaan, setPercobaan] = useState(0);

  useEffect(() => {
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

  const jumlahDariServer = daftarApi.filter((t) => !t.baru).length;
  const jumlahSelesai = daftarApi.filter((t) => t.selesai).length;
  const persen = daftarApi.length === 0 ? 0 : Math.round((jumlahSelesai / daftarApi.length) * 100);

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
            <div role="status">
              <p className="fw-bold d-flex align-items-center gap-2">
                <span className="spinner-border spinner-border-sm text-secondary" aria-hidden="true"></span>
                Memuat data dari server...
              </p>
              <ul className="list-unstyled d-grid gap-2 mb-0" aria-hidden="true">
                {[1, 2, 3, 4].map((n) => (
                  <li key={n} className="item-api d-flex align-items-center gap-3 placeholder-glow">
                    <span className="ikon-status placeholder"></span>
                    <div className="flex-grow-1">
                      <span className="placeholder col-7 d-block mb-2"></span>
                      <span className="placeholder col-3 d-block"></span>
                    </div>
                  </li>
                ))}
              </ul>
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
              <p className="fw-bold mb-2">
                Berhasil memuat {jumlahDariServer} tugas dari server.
              </p>
              <div className="mb-3">
                <div className="d-flex justify-content-between small text-secondary mb-1">
                  <span>{jumlahSelesai} dari {daftarApi.length} tugas selesai</span>
                  <span>{persen}%</span>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Progres tugas selesai"
                  aria-valuenow={persen}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar bg-success" style={{ width: `${persen}%` }}></div>
                </div>
              </div>

              <ul className="list-unstyled d-grid gap-2 mb-0">
                {daftarApi.map((tugas) => (
                  <ItemTugasApi
                    key={tugas.id}
                    id={tugas.id}
                    nama={tugas.nama}
                    selesai={tugas.selesai}
                    userId={tugas.userId}
                    baru={tugas.baru}
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