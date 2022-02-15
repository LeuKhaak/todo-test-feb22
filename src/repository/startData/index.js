import axios from "axios";

class startData {
  getPersons = async (userId) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}/todos`
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    //console.log(result.value);
    return result;
  };
} // `https://jsonplaceholder.typicode.com/users/${userId}/todos`

export default new startData();
