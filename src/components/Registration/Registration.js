import { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Registration() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const history = useHistory();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    const errors = {};
    if (!username || !username.trim()) {
      errors.username = "Username is required";
    } else if (username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    if (!email || !email.trim()) {
      errors.email = "Email is required";
    } else if (!email.includes("@")) {
      errors.email = "Email must contain @";
    }

    if (!password || !password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword || !confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Password and confirm password must match";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Registration successful");
      //navigate to login page
      history.push("/login");
    }
  }

  return (
    <div className="mb-4">
      <div className="w-50 p-4 m-auto border">
        <h1 className="text-center text-success">Registration</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input type="text" className="form-control" ref={usernameRef} />
          </div>
          {errors.username && (
            <div className="text-danger">{errors.username}</div>
          )}

          <div>
            <label>Email address</label>
            <input type="email" className="form-control" ref={emailRef} />
          </div>
          {errors.email && <div className="text-danger">{errors.email}</div>}

          <div>
            <label>Password</label>
            <input type="password" className="form-control" ref={passwordRef} />
          </div>
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              ref={confirmPasswordRef}
            />
          </div>
          {errors.confirmPassword && (
            <div className="text-danger">{errors.confirmPassword}</div>
          )}

          <div>
            <button className="btn btn-primary mt-3">Register</button>
            <Link to="/login" className="btn btn-link mt-3">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
