import React, { Component, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Component1 from "./Component1";
import Component2 from "./Component2";

export default function Login() {
    //useState
    const usernameRef = useRef();
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [errors, setErrors] = useState({
      username: '',
      password: ''
    });
    const history = useHistory();

    function handleInput(event) {
        setUsername(event.target.value);
    }

    function handlePassword(event){
        setPassword(event.target.value);
    }

    useEffect(() => {
      usernameRef.current.focus();
    }, 
    [])

    function handleSubmit(event){
        event.preventDefault();
        
        let errorObj = {};
        if(!username || !username.trim()){
          errorObj.username = 'User name is required';
        }else if(username.length < 5){
          errorObj.username = 'User name should be minimum 5 characters';
        }
        
        if(!password || !password.trim()){
          errorObj.password = 'Password is required';
        }else if(password.length < 5){
          errorObj.password = 'Password should be minimum 5 characters';
        }

        setErrors(errorObj);

        if(Object.keys(errorObj).length > 0){
          return;
        }
        
        if(username === 'admin' && password === 'admin'){
          history.push("/dashboard")
        }else {
          errorObj.invalid = 'Invalid username or password';
          setErrors(errorObj);
        }
    }

  return (  
    <div className="w-50 h-50 mb-4 border p-4 m-4 m-auto">
      <h1 className="text-primary text-center">Login</h1>

      <form autoComplete="false" onSubmit={handleSubmit}>
        <div className="mb-1">
          Username: <input type="text" className="form-control"  onChange={handleInput} ref={usernameRef}/>
        </div>
        {errors.username && <small className="text-danger">{errors.username}</small> }
        <div className="mb-1">
          Password: <input type="password" className="form-control" onChange={handlePassword}/>
        </div>
        {errors.password && <small className="text-danger">{errors.password}</small>}

        <div>
        <button className="btn btn-primary">
          Login
        </button>
          <Link to="/registration" className="ms-2 btn btn-secondary">Registration</Link>
        </div>
        
      </form>
      <div>
        {errors.invalid && <small className="text-danger">{errors.invalid}</small>}
      </div>
    </div>
  );
}



