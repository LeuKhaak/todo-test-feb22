import axios from "axios";

class deleteData {
  deleteTask = async (taskId) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${taskId}`
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
}

export default new deleteData();
