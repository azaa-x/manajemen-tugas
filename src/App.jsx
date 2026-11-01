import { useState } from "react";
import RingkasanTugas from "./components/RingkasanTugas";
import DaftarTugas from "./components/DaftarTugas";
import FormTugas from "./components/FormTugas";
import { matkulAwal, tugasAwal } from "./data/dataAwal";
import HeaderApp from "./components/HeaderApp";

const menuUtama = [
  { label: "Beranda", href: "#beranda" },
  { label: "Daftar Tugas", href: "#daftar-tugas" },
  { label: "Tambah Tugas", href: "#tambah-tugas" },
  { label: "Mata Kuliah", href: "#mata-kuliah" },
];

function App() {
  const [daftarTugas, setDaftarTugas] = useState(tugasAwal);

  function tambahTugas(dataBaru) {
    const mk = matkulAwal.find((m) => m.nama === dataBaru.matkul);
    const tugasBaru = {
      id: Date.now(),
      ...dataBaru,
      dosen: mk ? mk.dosen : "",
    };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  }

  function hapusTugas(id) {
    setDaftarTugas(daftarTugas.filter((t) => t.id !== id));
  }

  const urutDeadline = (a, b) => new Date(a.deadline) - new Date(b.deadline);
  const tugasAktif = daftarTugas.filter((t) => t.status !== "selesai").sort(urutDeadline);
  const tugasSelesai = daftarTugas.filter((t) => t.status === "selesai").sort(urutDeadline);
  const tugasUrut = [...tugasAktif, ...tugasSelesai];

  return (
    <>
      <HeaderApp judul="DeadlineIn" menu={menuUtama} />

      <main className="container py-4 py-md-5">
        <RingkasanTugas
          jumlahAktif={tugasAktif.length}
          jumlahSelesai={tugasSelesai.length}
          tugasMendesak={tugasAktif[0] || null}
        />

        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <DaftarTugas daftarTugas={tugasUrut} onHapus={hapusTugas} />
          </div>
          <div className="col-12 col-lg-4">
            <FormTugas daftarMatkul={matkulAwal} onTambah={tambahTugas} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;