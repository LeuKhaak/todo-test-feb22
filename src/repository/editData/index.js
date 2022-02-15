import axios from "axios";

class editData {
  putTask = async (newTask) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/todos",
        newTask
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
}

export default new editData();
