import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'react-tooltip/dist/react-tooltip.css'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Dashboard from "./components/Dashboard/Dashboard";
import EmployeeData from "./components/Employee/EmployeeData";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Component1 from "./components/Login/Component1";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Sidebar from "./components/Sidebar/Sidebar";
import DemoParent from "./components/Demo/DemoParent";
import ErrorBoundary from "./components/Demo/ErrorBoundary";

const Employee = React.lazy(() => import("./components/Employee/Employee.js"));
const Users = React.lazy(() => import("./components/Users.js"));

function MyApp() {
  // const userObj = useContext(UserContext);
  const username = useSelector((state) => state.user.username);

  const styleClass = username
    ? "main-content "
    : "main-content main-content-full";

  const protectedRouteContent = (
    <>
      <Route path="/emp" exact>
        <Suspense fallback={<div>Loading</div>}>
          <Employee />
        </Suspense>
        
      </Route>
      <Route path="/company" exact>
        <Component1 />
      </Route>
      <Route path="/users" exact>
        <Suspense fallback={<div>Loading</div>}>
            <Users />
        </Suspense>
      </Route>

      <Route path="/emp/:empId" component={EmployeeData} />

      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </>
  );

  return (
    <div className="h-100 w-100">
      <ToastContainer />
      <div>
        <Header />
      </div>

      <div className="main-body">
        {username ? (
          <div className="sidebar">
            <Sidebar />
          </div>
        ) : null}
        <div className={styleClass}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            {username ? protectedRouteContent : null}

            <Route pat="/demo">
              <ErrorBoundary>
                <DemoParent />
              </ErrorBoundary>
             
            </Route>

            <Route pat="/cmp1">
              <Component1 />
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
