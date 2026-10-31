import { formatTanggal } from "../utils/tanggal";

function RingkasanTugas({ jumlahAktif, jumlahSelesai, tugasMendesak }) {
  return (
    <div className="row g-3 mb-4">
      <div className="col-12 col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <div className="card-body">
            <h2 className="h6 text-secondary">Total tugas aktif</h2>
            <p className="display-5 fw-bold mb-0">{jumlahAktif}</p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <div className="card-body">
            <h2 className="h6 text-secondary">Tugas mendesak</h2>
            {tugasMendesak ? (
              <p className="mb-0">
                <strong>{tugasMendesak.nama}</strong>
                <br />
                <span className="text-secondary">
                  deadline {formatTanggal(tugasMendesak.deadline)}
                </span>
              </p>
            ) : (
              <p className="mb-0">Tidak ada tugas aktif</p>
            )}
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <div className="card-body">
            <h2 className="h6 text-secondary">Tugas selesai</h2>
            <p className="display-5 fw-bold mb-0">{jumlahSelesai}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RingkasanTugas;