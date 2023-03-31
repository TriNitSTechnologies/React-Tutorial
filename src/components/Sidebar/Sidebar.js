import { Link } from "react-router-dom";

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div>
              <Link to="/dashboard">Dashboard</Link>
            </div>

            <div>
                <Link to="/emp">Employees</Link>
            </div>

            <div>
                <Link to="/company">Companies</Link>
            </div>
            <div>
                <Link to="/users">Users</Link>
            </div>

            </div>
    )
}