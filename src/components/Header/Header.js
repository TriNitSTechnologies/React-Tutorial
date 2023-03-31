import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import Loader from "../Loader/Loader";

export default function Header(){
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const userObj = useContext(UserContext);

    function handleLogout() {
        if(userObj.username){
            userObj.login('');
        }
        history.push("/login");
    }
    

    if(loading){
        return <Loader>Loading login...</Loader>
    }

    return (
        <>
        <div>
           {/* {loading ? <Loader />: null}  */}
            <h1 className="bg-warning" >Payroll management 
            
            <button onClick={handleLogout}>
                {userObj.username ? 'Logout' : 'Login'}
            </button>

            <span className="float-end">{userObj.username ? userObj.username: '' } </span>
            </h1>
        </div>
        </>
    )
}

//reelase 16.8 => 2019

//webpack => Babel => React