import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Employee from "./components/Employee/Employee";
import EmployeeData from "./components/Employee/EmployeeData";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Component1 from "./components/Login/Component1";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Sidebar from "./components/Sidebar/Sidebar";
import { UserContext } from "./Context/UserContext";

function MyApp() {
  const userObj = useContext(UserContext);
  const styleClass = userObj.username ? "main-content " : "main-content main-content-full";
  return (
    <div className="h-100 w-100">
      <div>
        <Header />
      </div>

      <div  className="main-body">
        { userObj.username ? <div className="sidebar">
          <Sidebar />
        </div> : null}
        <div className={styleClass}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/emp" exact>
              <Employee />
            </Route>

            <Route path="/emp/:empId" component={EmployeeData} />

            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route pat="/cmp1">
              <Component1 />
            </Route>

            <Route pat="/registration" exact>
              <Registration />
            </Route>

            <Route>
              <h1>404 Not Found</h1>
            </Route>
          </Switch>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
