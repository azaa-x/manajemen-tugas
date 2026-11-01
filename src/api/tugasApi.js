import axios from "axios";

export const ENDPOINT_TODOS = "https://dummyjson.com/todos";

function ubahBentukData(todo) {
  return {
    id: todo.id,
    nama: todo.todo,
    selesai: todo.completed,
    userId: todo.userId,
  };
}

export async function ambilTugasDariApi() {
  const response = await axios.get(ENDPOINT_TODOS, {
    params: { limit: 8 },
    timeout: 10000,
  });
  return response.data.todos.map(ubahBentukData);
}

export async function kirimTugasKeApi({ nama }) {
  const response = await axios.post(
    `${ENDPOINT_TODOS}/add`,
    { todo: nama, completed: false, userId: 1 },
    { timeout: 10000 }
  );
  return ubahBentukData(response.data);
}