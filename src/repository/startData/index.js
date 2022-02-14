import axios from "axios";

class startData {
  getPersons = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1/todos"
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    //console.log(result.value);
    return result;
  };
}

export default new startData();
