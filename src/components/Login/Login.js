import { useState } from "react";

export default function Login() {
    //useState
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    function handleInput(event) {
        setUsername(event.target.value);
        console.log(username);
    }

    function handlePassword(event){
        setPassword(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        // alert('Username: ' + username + ' Password: ' + password);
        if(!username || !username.trim()){
            alert('Username is required');
            return;
        }

        if(!password || !password.trim()){
            alert('password is required');
            return;
        }
    }

  return (  
    <div className="w-100 h-50 mb-4 border p-4">
      <h1 className="text-primary">Login</h1> {username} - {password}
      <form autoComplete="false" onSubmit={handleSubmit}>
        <div className="mb-3">
          Username: <input type="text" className="form-control"  onChange={handleInput}/>
        </div>
        <div className="mb-3">
          Password: <input type="password" className="form-control" onChange={handlePassword}/>
        </div>
        <button className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
