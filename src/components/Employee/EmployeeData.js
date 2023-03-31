import { useLocation } from "react-router-dom";

export default function EmployeeData(props) {
  const empId = props.match.params.empId;


  return (
    <div>
      <h1>EmployeeData {empId}</h1>
    </div>
  );
}
