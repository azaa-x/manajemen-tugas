import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HeaderApp from "./components/HeaderApp";
import Beranda from "./pages/Beranda";
import DaftarTugasPage from "./pages/DaftarTugasPage";
import TambahTugasPage from "./pages/TambahTugasPage";
import MatkulPage from "./pages/MatkulPage";
import TidakDitemukan from "./pages/TidakDitemukan";
import { matkulAwal, tugasAwal } from "./data/dataAwal";

const menuUtama = [
  { label: "Beranda", to: "/" },
  { label: "Daftar Tugas", to: "/tugas" },
  { label: "Tambah Tugas", to: "/tambah" },
  { label: "Mata Kuliah", to: "/matkul" },
];

function App() {
  const [daftarTugas, setDaftarTugas] = useState(tugasAwal);
  const [daftarMatkul, setDaftarMatkul] = useState(matkulAwal);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function tambahTugas(dataBaru) {
    const mk = daftarMatkul.find((m) => m.nama === dataBaru.matkul);
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

  function tambahMatkul(matkulBaru) {
    setDaftarMatkul([...daftarMatkul, matkulBaru]);
  }

  const urutDeadline = (a, b) => new Date(a.deadline) - new Date(b.deadline);
  const tugasAktif = daftarTugas.filter((t) => t.status !== "selesai").sort(urutDeadline);
  const tugasSelesai = daftarTugas.filter((t) => t.status === "selesai").sort(urutDeadline);
  const tugasUrut = [...tugasAktif, ...tugasSelesai];
  const jumlahMatkul = new Set(tugasAktif.map((t) => t.matkul)).size;

  return (
    <>
      <HeaderApp judul="DeadlineIn" menu={menuUtama} />

      <main className="container py-4 py-md-5">
        <Routes>
          <Route
            path="/"
            element={<Beranda tugasAktif={tugasAktif} jumlahMatkul={jumlahMatkul} />}
          />
          <Route
            path="/tugas"
            element={<DaftarTugasPage daftarTugas={tugasUrut} onHapus={hapusTugas} />}
          />
          <Route
            path="/tambah"
            element={<TambahTugasPage daftarMatkul={daftarMatkul} onTambah={tambahTugas} />}
          />
          <Route
            path="/matkul"
            element={
              <MatkulPage
                daftarMatkul={daftarMatkul}
                daftarTugas={daftarTugas}
                onTambahMatkul={tambahMatkul}
              />
            }
          />
          <Route path="*" element={<TidakDitemukan />} />
        </Routes>
      </main>
    </>
  );
}

export default App;