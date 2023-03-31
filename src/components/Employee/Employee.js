import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import EmployeeForm from "./EmployeeForm";
import {
  deleteEmployee,
  loadEmployees,
  saveEmployee,
  updateEmployee,
} from "./Hooks/Api";
import { toast } from "react-toastify";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

export default function Employee(props) {
  // let employees = [];
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayEmpForm, setDisplayEmpForm] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState({});
  const [pageNo, setPageNo] = useState(1);
  const [searchText, setSearchText] = useState("");

  let tableRowData = useMemo(() => {
    console.log("Employee filtering");
    let rowData = [];
    if (searchText) {
      rowData = employees.filter((emp) =>
        emp.empName.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      rowData = employees;
    }
    return rowData;
  }, [searchText, employees]);

  useEffect(() => {
    loadEmployees(pageNo, setData);
  }, [pageNo]);

  function addEmployee() {
    setSelectedEmp({});
    setDisplayEmpForm(true);
  }

  function onCancelClick() {
    setDisplayEmpForm(false);
  }

  function onSaveEmployee(empModel) {
    console.log(empModel);
    setLoading(true);
    setEmployees((prevModels) => {
      const newArr = prevModels.slice();
      if (empModel.id) {
        const index = newArr.findIndex((emp) => emp.id === empModel.id);
        newArr[index] = empModel;
        updateEmployee(empModel, setData);
      } else {
        newArr.push(empModel);
        saveEmployee(empModel, setData);
      }

      return newArr;
    });

    setDisplayEmpForm(false);
  }

  function handleDeleteEmp(index) {
    const choice = window.confirm("Are you sure to delete?");
    if (choice) {
      // const newArr = [...employees];
      // newArr.splice(index, 1);
      // setEmployees(newArr);
      setLoading(true);
      const emp = employees[index];
      deleteEmployee(emp, (data) => {
        setData(data);
      });
    }
  }

  function setData(data) {
    setEmployees(data);
    setLoading(false);
  }

  function handleEditEmp(index) {
    setDisplayEmpForm(true);
    const emp = employees[index];
    setSelectedEmp(emp);
  }

  function handlePageRight() {
    setPageNo(pageNo + 1);
  }

  function handlePageLeft() {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    } else {
      toast.warning("Page number cannot be less than 1");
    }
  }

  function handleSearch(event) {
    setSearchText(event.target.value);
  }

  if (loading) {
    return <Loader>Loading emp...</Loader>;
  }

  if (displayEmpForm) {
    return (
      <EmployeeForm
        onCancelClick={onCancelClick}
        onSaveEmployee={onSaveEmployee}
        empModel={selectedEmp}
      />
    );
  }

  return (
    <div className="employee ">
      <h1>
        Employee ({employees?.length})
        <input
          type="search"
          className="form-control w-50 m-auto"
          onChange={handleSearch}
        />
        <span className="float-end me-2">
          <button className="btn btn-outline-primary" onClick={addEmployee}>
            Add Emp
          </button>
        </span>
      </h1>

      {/* {
      displayEmpForm && <EmployeeForm onCancelClick={onCancelClick}  onSaveEmployee={onSaveEmployee}/>
    }
       */}

      <table className="table table-hover table-border">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Bank</th>
            <th>pan</th>
          </tr>
        </thead>
        <tbody>
          {tableRowData.map((emp, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{emp.empName}</td>
                <td>{emp.bankAccount}</td>
                <td>
                  {emp.pan}
                  <button
                    className="ms-2 btn btn-outline-success"
                    onClick={() => handleEditEmp(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="ms-2 btn btn-outline-danger"
                    onClick={() => handleDeleteEmp(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-center">
        <span className="mx-auto">
          <button className="btn btn-primary" onClick={handlePageLeft}>
            <AiFillLeftCircle />
          </button>
          <span className="mx-2">{pageNo}</span>
          <button className="btn btn-primary" onClick={handlePageRight}>
            {" "}
            <AiFillRightCircle />{" "}
          </button>
        </span>
      </div>
    </div>
  );
}
