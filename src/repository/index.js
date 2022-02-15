import startData from "./startData";
import createData from "./createData";
import deleteData from "./deleteData";
import editData from "./editData";

class Reposirory {
  APIstartData = startData;
  APIcreateData = createData;
  APIdeleteData = deleteData;
  APIeditData = editData;
}

export default new Reposirory();
