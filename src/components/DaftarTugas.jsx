import { Link } from "react-router-dom";
import KartuTugas from "./KartuTugas";

function DaftarTugas({ daftarTugas, onHapus }) {
  return (
    <section id="daftar-tugas" className="panel-putih">
      <h2 className="h4 judul-seksi">Tugas Saya</h2>
      <p className="text-secondary">Tugas aktif diurutkan dari deadline terdekat, tugas selesai di bagian bawah.</p>

      {daftarTugas.length === 0 ? (
        <div className="kosong-tugas text-center">
          <p className="fw-bold mb-1">Belum ada data Tugas</p>
          <p className="text-secondary mb-0">
            Buka halaman <Link to="/tambah">Tambah Tugas</Link> untuk menambahkan tugas pertama Anda.
          </p>
        </div>
      ) : (
        <div className="d-grid gap-3">
          {daftarTugas.map((tugas) => (
            <KartuTugas
              key={tugas.id}
              id={tugas.id}
              nama={tugas.nama}
              matkul={tugas.matkul}
              dosen={tugas.dosen}
              deadline={tugas.deadline}
              status={tugas.status}
              deskripsi={tugas.deskripsi}
              onHapus={onHapus}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default DaftarTugas;