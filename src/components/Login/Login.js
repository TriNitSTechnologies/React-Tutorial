import React, {
  Component,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { fetchUsers, login } from "../../Store/User.slice";
import { AiFillAmazonCircle } from "react-icons/ai";
import { BsFillBoxFill } from "react-icons/bs";
import { loginApi } from "./Hooks/Api";

export default function Login() {
  //useState
  const usernameRef = useRef();
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const history = useHistory();
  // const userObj = useContext(UserContext);
  const userObj = {};

  function handleInput(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    let errorObj = {};
    if (!username || !username.trim()) {
      errorObj.username = "User name is required";
    } else if (username.length < 5) {
      errorObj.username = "User name should be minimum 5 characters";
    }

    if (!password || !password.trim()) {
      errorObj.password = "Password is required";
    } else if (password.length < 5) {
      errorObj.password = "Password should be minimum 5 characters";
    }

    setErrors(errorObj);

    if (Object.keys(errorObj).length > 0) {
      return;
    }

    let payload = {
      username,
      password,
    };
    loginApi(payload, (response) => {
      console.log(response);
      const key = sessionStorage.getItem('SESSION_KEY');
      console.log(key);
      dispatch(login(username));
      dispatch(fetchUsers());
      history.push("/dashboard");
    });
  }

  return (
    <div className="w-50 h-50 mb-4 border p-4 m-4 m-auto">
      <h1 className="text-primary text-center">Login</h1>

      <form autoComplete="false" onSubmit={handleSubmit}>
        <div className="mb-1">
          Username:{" "}
          <input
            type="text"
            className="form-control"
            onChange={handleInput}
            ref={usernameRef}
          />
        </div>
        {errors.username && (
          <small className="text-danger">{errors.username}</small>
        )}
        <div className="mb-1">
          Password:{" "}
          <input
            type="password"
            className="form-control"
            onChange={handlePassword}
          />
        </div>
        {errors.password && (
          <small className="text-danger">{errors.password}</small>
        )}

        <div>
          <button className="btn btn-primary">
            <AiFillAmazonCircle /> Login
          </button>
          <Link to="/registration" className="ms-2 btn btn-secondary">
            <BsFillBoxFill /> Registration
          </Link>
        </div>
      </form>
      <div>
        {errors.invalid && (
          <small className="text-danger">{errors.invalid}</small>
        )}
      </div>
    </div>
  );
}
