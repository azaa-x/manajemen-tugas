import FormMatkul from "../components/FormMatkul";

function MatkulPage({ daftarMatkul, daftarTugas, onTambahMatkul }) {
  return (
    <>
      <h2 className="h3 judul-seksi mb-2">Mata Kuliah</h2>
      <p className="text-secondary mb-4">
        Tambahkan mata kuliah semester ini. Daftar ini akan muncul sebagai pilihan saat menambah tugas.
      </p>

      <FormMatkul daftarMatkul={daftarMatkul} onTambah={onTambahMatkul} />

      <div className="card shadow-sm border-0">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nama Mata Kuliah</th>
                <th scope="col">Kode MK</th>
                <th scope="col">Kode Dosen</th>
                <th scope="col">Jumlah Tugas</th>
              </tr>
            </thead>
            <tbody>
              {daftarMatkul.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center text-secondary py-4">
                    Belum ada data Mata Kuliah
                  </td>
                </tr>
              ) : (
                daftarMatkul.map((mk, i) => (
                  <tr key={mk.kode}>
                    <td>{i + 1}</td>
                    <td>{mk.nama}</td>
                    <td>{mk.kode}</td>
                    <td>{mk.dosen}</td>
                    <td>{daftarTugas.filter((t) => t.matkul === mk.nama).length}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MatkulPage;