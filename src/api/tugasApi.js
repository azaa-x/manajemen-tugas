import axios from "axios";

export const ENDPOINT_TODOS = "https://jsonplaceholder.typicode.com/todos";

export async function ambilTugasDariApi() {
  const response = await axios.get(ENDPOINT_TODOS, {
    params: { _limit: 8 },
    timeout: 10000,
  });
  return response.data;
}

export async function kirimTugasKeApi(dataBaru) {
  const response = await axios.post(ENDPOINT_TODOS, dataBaru, { timeout: 10000 });
  return response.data;
}