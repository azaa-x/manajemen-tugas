import { Link } from "react-router-dom";
import DaftarTugas from "../components/DaftarTugas";
import TugasDariApi from "../components/TugasDariApi";

function DaftarTugasPage({ daftarTugas, onHapus }) {
  return (
    <>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
        <h2 className="h3 judul-seksi mb-0">Daftar Tugas</h2>
        <Link className="btn btn-brand" to="/tambah">+ Tambah Tugas</Link>
      </div>

      <DaftarTugas daftarTugas={daftarTugas} onHapus={onHapus} />

      <div className="mt-4">
        <TugasDariApi />
      </div>
    </>
  );
}

export default DaftarTugasPage;