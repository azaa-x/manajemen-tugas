import { useState } from "react";

const FORM_KOSONG = { nama: "", kode: "", dosen: "" };

function FormMatkul({ daftarMatkul, onTambah }) {
  const [form, setForm] = useState(FORM_KOSONG);
  const [galat, setGalat] = useState({});

  function ubahInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (galat[name]) {
      setGalat({ ...galat, [name]: "" });
    }
  }

  function kirimForm(e) {
    e.preventDefault();

    const nama = form.nama.trim();
    const kode = form.kode.trim().toUpperCase();
    const dosen = form.dosen.trim().toUpperCase();

    const galatBaru = {};
    if (nama.length < 3) {
      galatBaru.nama = "Nama mata kuliah wajib diisi (minimal 3 karakter).";
    } else if (daftarMatkul.some((m) => m.nama.toLowerCase() === nama.toLowerCase())) {
      galatBaru.nama = "Mata kuliah ini sudah ada.";
    }
    if (kode === "") {
      galatBaru.kode = "Kode mata kuliah wajib diisi.";
    } else if (daftarMatkul.some((m) => m.kode === kode)) {
      galatBaru.kode = "Kode ini sudah dipakai.";
    }
    if (dosen === "") {
      galatBaru.dosen = "Kode dosen wajib diisi.";
    }
    setGalat(galatBaru);
    if (Object.keys(galatBaru).length > 0) {
      return;
    }

    onTambah({ nama, kode, dosen });
    setForm(FORM_KOSONG);
  }

  return (
    <form onSubmit={kirimForm} noValidate className="card shadow-sm border-0 mb-4">
      <div className="card-body">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <label htmlFor="nama-mk" className="form-label">Nama Mata Kuliah</label>
            <input
              id="nama-mk"
              name="nama"
              type="text"
              className={`form-control ${galat.nama ? "is-invalid" : ""}`}
              placeholder="Contoh: Kecerdasan Buatan"
              value={form.nama}
              onChange={ubahInput}
            />
            <div className="invalid-feedback">{galat.nama}</div>
          </div>
          <div className="col-6 col-md-3">
            <label htmlFor="kode-mk" className="form-label">Kode Mata Kuliah</label>
            <input
              id="kode-mk"
              name="kode"
              type="text"
              className={`form-control ${galat.kode ? "is-invalid" : ""}`}
              placeholder="Contoh: CRI3B3"
              value={form.kode}
              onChange={ubahInput}
            />
            <div className="invalid-feedback">{galat.kode}</div>
          </div>
          <div className="col-6 col-md-3">
            <label htmlFor="dosen-mk" className="form-label">Kode Dosen</label>
            <input
              id="dosen-mk"
              name="dosen"
              type="text"
              className={`form-control ${galat.dosen ? "is-invalid" : ""}`}
              placeholder="Contoh: VLY"
              value={form.dosen}
              onChange={ubahInput}
            />
            <div className="invalid-feedback">{galat.dosen}</div>
          </div>
        </div>
        <button type="submit" className="btn btn-brand mt-3 px-4">Tambah Mata Kuliah</button>
      </div>
    </form>
  );
}

export default FormMatkul;