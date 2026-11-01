import Status from "./Status";

function ItemTugasApi({ id, title, completed, userId }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start gap-3">
      <div>
        <p className="mb-1 fw-semibold">{title}</p>
        <small className="text-secondary">
          Tugas #{id} &middot; Pengguna {userId}
        </small>
      </div>
      <Status status={completed ? "selesai" : "belum"} />
    </li>
  );
}

export default ItemTugasApi;