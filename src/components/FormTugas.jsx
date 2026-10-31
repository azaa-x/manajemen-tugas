import { useState } from "react";

const FORM_KOSONG = {
  nama: "",
  matkul: "",
  deadline: "",
  status: "belum",
  deskripsi: "",
};

function FormTugas({ daftarMatkul, onTambah }) {
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

    const galatBaru = {};
    if (form.nama.trim().length < 3) {
      galatBaru.nama = "Nama tugas wajib diisi (minimal 3 karakter).";
    }
    if (form.matkul === "") {
      galatBaru.matkul = "Silakan pilih mata kuliah.";
    }
    if (form.deadline === "") {
      galatBaru.deadline = "Deadline wajib diisi.";
    }
    setGalat(galatBaru);
    if (Object.keys(galatBaru).length > 0) {
      return;
    }

    onTambah({ ...form, nama: form.nama.trim(), deskripsi: form.deskripsi.trim() });
    setForm(FORM_KOSONG);
  }

  return (
    <section className="panel-putih">
      <h2 className="h4 judul-seksi">Tambah Tugas</h2>
      <p className="text-secondary">Catat sekarang sebelum lupa.</p>

      <form onSubmit={kirimForm} noValidate>
        <div className="mb-3">
          <label htmlFor="nama" className="form-label">Nama Tugas</label>
          <input
            id="nama"
            name="nama"
            type="text"
            className={`form-control ${galat.nama ? "is-invalid" : ""}`}
            placeholder="Contoh: Laporan Praktikum Basis Data"
            value={form.nama}
            onChange={ubahInput}
          />
          <div className="invalid-feedback">{galat.nama}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="matkul" className="form-label">Mata Kuliah</label>
          <select
            id="matkul"
            name="matkul"
            className={`form-select ${galat.matkul ? "is-invalid" : ""}`}
            value={form.matkul}
            onChange={ubahInput}
          >
            <option value="">-- Pilih Mata Kuliah --</option>
            {daftarMatkul.map((mk) => (
              <option key={mk.kode} value={mk.nama}>{mk.nama}</option>
            ))}
          </select>
          <div className="invalid-feedback">{galat.matkul}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="deadline" className="form-label">Deadline</label>
          <input
            id="deadline"
            name="deadline"
            type="datetime-local"
            className={`form-control ${galat.deadline ? "is-invalid" : ""}`}
            value={form.deadline}
            onChange={ubahInput}
          />
          <div className="invalid-feedback">{galat.deadline}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status Pengerjaan</label>
          <select
            id="status"
            name="status"
            className="form-select"
            value={form.status}
            onChange={ubahInput}
          >
            <option value="belum">Belum dikerjakan</option>
            <option value="proses">Sedang dikerjakan</option>
            <option value="selesai">Selesai</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="deskripsi" className="form-label">Instruksi / Detail (opsional)</label>
          <textarea
            id="deskripsi"
            name="deskripsi"
            rows="3"
            className="form-control"
            placeholder="Tuliskan detail instruksi tugas di sini..."
            value={form.deskripsi}
            onChange={ubahInput}
          />
        </div>

        <button type="submit" className="btn btn-brand w-100">Tambah</button>
      </form>
    </section>
  );
}

export default FormTugas;