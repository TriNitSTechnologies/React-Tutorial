import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../Store/User.slice";
import Loader from "../Loader/Loader";

export default function Header(){
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    // const userObj = useContext(UserContext);

    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.username);

    function handleLogout() {
        if(username){
            // userObj.login('');
            dispatch(login(''));
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
                {username ? 'Logout' : 'Login'}
            </button>

            <span className="float-end">{username ? username: '' } </span>
            </h1>
        </div>
        </>
    )
}