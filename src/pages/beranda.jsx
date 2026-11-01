import { Link } from "react-router-dom";
import RingkasanTugas from "../components/RingkasanTugas";
import KartuTugas from "../components/KartuTugas";

function Beranda({ tugasAktif, jumlahMatkul }) {
  const tugasTampil = tugasAktif.slice(0, 3);

  return (
    <>
      <RingkasanTugas
        jumlahAktif={tugasAktif.length}
        jumlahMatkul={jumlahMatkul}
        tugasMendesak={tugasAktif[0] || null}
      />

      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <section>
            <h2 className="h4 judul-seksi">Semua Tugas Aktif</h2>
            <p className="text-secondary">Perhatikan deadline setiap tugas.</p>

            {tugasTampil.length === 0 ? (
              <div className="kosong-tugas text-center">
                <p className="fw-bold mb-0">Belum ada data Tugas</p>
              </div>
            ) : (
              <div className="d-grid gap-3">
                {tugasTampil.map((tugas) => (
                  <KartuTugas key={tugas.id} {...tugas} />
                ))}
              </div>
            )}

            <p className="mt-3 mb-0">
              <Link className="tautan-panah" to="/tugas">Tampilkan lebih banyak &rarr;</Link>
            </p>
          </section>
        </div>

        <div className="col-12 col-lg-4">
          <section className="panel-putih text-center">
            <h2 className="h5">Punya Tugas Baru?</h2>
            <p className="text-secondary">Catat sekarang sebelum lupa</p>
            <Link className="btn btn-brand w-100" to="/tambah">Tambah Tugas</Link>
          </section>
        </div>
      </div>
    </>
  );
}

export default Beranda;