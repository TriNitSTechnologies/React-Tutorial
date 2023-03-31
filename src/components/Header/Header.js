import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function Header(){
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    function handleLogin(){
        console.log("Login");
        setIsUserLoggedIn(!isUserLoggedIn);

        if(!isUserLoggedIn){
            history.push('/login');
        }
    }

    if(loading){
        return <Loader>Loading login...</Loader>
    }

    return (
        <>
        <div>
           {/* {loading ? <Loader />: null}  */}
            <h1 className="bg-warning" >Payroll management 
            
            <button onClick={handleLogin}>
                {isUserLoggedIn ? 'Logout' : 'Login'}
            </button>

            <span className="float-end">{isUserLoggedIn && 'Trinits' } </span>
            </h1>
        </div>
        </>
    )
}

//reelase 16.8 => 2019

//webpack => Babel => React