import { STATUS } from "../data/dataAwal";

function Status({ status }) {
  const { label, badge } = STATUS[status];
  return <span className={`badge ${badge}`}>{label}</span>;
}

export default Status;