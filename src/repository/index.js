import startData from "./startData";
import createData from "./createData";
import deleteData from "./deleteData/index";

class Reposirory {
  APIstartData = startData;
  APIcreateData = createData;
  APIdeleteData = deleteData;
}

export default new Reposirory();
