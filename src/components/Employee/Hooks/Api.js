import { toast } from "react-toastify";
import { API } from "../../../Hooks/Api";
import { EMPLOYEE_URL } from "../../../utils/Endpoints";

// export function loadEmployees(callBack) {
//   fetch(EMPLOYEE_URL)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       callBack(data);
//     });
// }

export function loadEmployees(callBack) {
  API.get(EMPLOYEE_URL + "?limit=150&pageNumber=1", {
    headers: {
        'Sample-Header': 'Sample-Value'
    }
  }).then((response) => {
    callBack(response.data);
  });
}

export function saveEmployee(empModel, callBack) {
  API.post(EMPLOYEE_URL, empModel)
    .then((response) => {
      console.log(response);
      loadEmployees(callBack);
    })
    .catch((error) => {
      alert("Error while saving employee" + error.response.data);
    });
}

export function updateEmployee(empModel, callBack) {
  const URL = EMPLOYEE_URL + "/" + empModel.id;
  API.put(URL, empModel)
    .then((response) => {
      console.log(response);
      loadEmployees(callBack);
    })
    .catch((error) => {
      alert("Error while updating employee" + error.response.data);
    });
}

export function deleteEmployee(empModel, callBack) {
  const URL = EMPLOYEE_URL + "/" + empModel.id + 1234;
  API.delete(URL)
    .then((response) => {
      loadEmployees(callBack);
    })
    .catch((error) => {
      toast.error("Error while deleting employee" + error.response.data, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      loadEmployees(callBack);
    });
}
