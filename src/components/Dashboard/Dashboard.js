import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const history = useHistory();

  function navigatePage(path) {
    // history.push(path);
    history.push(path + '?name=Dashboard123');
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="d-flex">
        <div className="card" onClick={() => navigatePage('/emp')}>Employees</div>
        <div className="card" onClick={() => navigatePage('/companies')}>Companies</div>
      </div>
    </div>
  );
}
