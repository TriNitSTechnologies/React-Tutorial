import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const history = useHistory();
  const users = useSelector((state) => state.user.users);

  function navigatePage(path) {
    // history.push(path);
    history.push(path + '?name=Dashboard123');
  }

  return (
    <div>
      <h1>Dashboard {users?.length}</h1>

      <div className="d-flex">
        <div className="card" onClick={() => navigatePage('/emp')}>Employees</div>
        <div className="card" onClick={() => navigatePage('/companies')}>Companies</div>
      </div>
    </div>
  );
}
