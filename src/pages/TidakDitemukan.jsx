import { Link } from "react-router-dom";

function TidakDitemukan() {
  return (
    <section className="panel-putih text-center">
      <h2 className="h4">Halaman tidak ditemukan</h2>
      <p className="text-secondary">Alamat yang Anda buka tidak tersedia.</p>
      <Link className="btn btn-brand" to="/">Kembali ke Beranda</Link>
    </section>
  );
}

export default TidakDitemukan;