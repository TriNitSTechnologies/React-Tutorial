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
                <Link to="/companies">Companies</Link>
            </div>

            </div>
    )
}