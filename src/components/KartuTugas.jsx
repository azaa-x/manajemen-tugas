import Status from "./Status";
import { pecahTanggal } from "../utils/tanggal";

function KartuTugas({ id, nama, matkul, dosen, deadline, status, deskripsi, onHapus }) {
  const { tanggal, bulan, tahun, jam } = pecahTanggal(deadline);

  return (
    <article className="card shadow-sm border-0">
      <div className="card-body">
        <div className="row g-3 align-items-center">
          <div className="col-4 col-sm-3">
            <div className="tanggal-tugas">
              <time dateTime={deadline}>
                <span className="angka-tanggal">{tanggal}</span>
                <span>{bulan}</span>
                <span>{tahun}</span>
                <span className="jam-tugas">{jam}</span>
              </time>
            </div>
          </div>

          <div className="col-8 col-sm-6">
            <h3 className="h6 mb-1">{nama}</h3>
            <p className="mb-1">
              {matkul}
              {dosen && <span className="text-secondary"> &middot; {dosen}</span>}
            </p>
            <Status status={status} />
          </div>

          {onHapus && (
            <div className="col-12 col-sm-3 d-flex">
              <button
                type="button"
                className="btn btn-sm btn-outline-danger flex-fill"
                onClick={() => onHapus(id)}
              >
                Hapus
              </button>
            </div>
          )}
        </div>

        {deskripsi && <p className="deskripsi-tugas mt-3 mb-0">{deskripsi}</p>}
      </div>
    </article>
  );
}

export default KartuTugas;