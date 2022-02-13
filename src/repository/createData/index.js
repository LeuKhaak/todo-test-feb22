import axios from "axios";

class createData {
  postTask = async (newTask) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        newTask
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    //console.log(result.value);
    return result;
  };
}

export default new createData();
