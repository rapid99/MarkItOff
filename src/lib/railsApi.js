import axios from 'axios'

const db = {
  writeRepoData(input) {
    const params = {
      todo: {
        create_time: Date(),
        data: input,
        status: "not_done"
      }
    }

    axios.post("http://localhost:3000/todos", params).then((res) => res.input).catch((error) => console.log(error));

  },

  fetchAllRepoData() {
    return axios.get("http://localhost:3000/todos.json").then((res) => res.data);
  },

 updateTodo(todo, statusChange) {
   const params = {todo: {status: statusChange}}
   axios.patch(`http://localhost:3000/todos/${todo.id}/`, params)
     .then((success) => console.log(success))
     .catch((error) => console.log(error))
 }

};

export default db
