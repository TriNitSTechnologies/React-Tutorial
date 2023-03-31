import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../Store/User.slice";
import Loader from "../Loader/Loader";
import { Tooltip as ReactTooltip } from "react-tooltip";

import classes from "./Header.module.scss";

export default function Header() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  // const userObj = useContext(UserContext);

  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  function handleLogout() {
    if (username) {
      // userObj.login('');
      dispatch(login(""));
    }
    history.push("/login");
    sessionStorage.removeItem("SESSION_KEY");
  }

  if (loading) {
    return <Loader>Loading login...</Loader>;
  }

  return (
    <>
      <div>
        {/* {loading ? <Loader />: null}  */}
        <h1 className={`${classes.fontWhite}`}>
          Payroll management
          <button onClick={handleLogout} title="Click on logout" id="loginBtn">
            {username ? "Logout" : "Login"}
          </button>
          <ReactTooltip
            anchorId="loginBtn"
            place="top"
            variant="info"
            content="Click on the button to logout"
          />
          {username ? (
            <div class="dropdown d-inline-block">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               {username}
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                   My profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={ handleLogout}>
                    Logout
                  </a>
                </li>
              
              </ul>
            </div>
          ) : null}
        </h1>
      </div>
    </>
  );
}
