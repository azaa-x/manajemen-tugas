import { useNavigate } from "react-router-dom";
import FormTugas from "../components/FormTugas";

function TambahTugasPage({ daftarMatkul, onTambah }) {
  const navigate = useNavigate();

  function simpan(dataBaru) {
    onTambah(dataBaru);
    navigate("/tugas");
  }

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-7">
        <FormTugas daftarMatkul={daftarMatkul} onTambah={simpan} />
      </div>
    </div>
  );
}

export default TambahTugasPage;