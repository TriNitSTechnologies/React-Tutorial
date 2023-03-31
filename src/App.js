import { Link, Route, Switch, useLocation } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

function MyApp() {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/users/:userId" component={User} />

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/users">
          <Users />
        </Route>

        <Route component={NotFound} />
      </Switch>

      <Footer />
    </div>
  );
}

export default MyApp;

function User(props) {
  const userId = props.match.params.userId;
  // Use the userId to fetch user data and render it

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');

  return (
    <div>
      <h1>User {userId} and name - {name}</h1>
    </div>
  );
}

function Users(props) {
  return (
    <div>
      <h1>Users</h1>
      <Link to="/users/1?name=xyz">User 1</Link>
      <Link to="/users/2?name=trinits">User 2</Link>
    </div>
  );
}

function NotFound(props) {
  return (
    <div>
      <h1>NotFound</h1>
    </div>
  );
}
