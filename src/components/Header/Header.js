import { Link } from "react-router-dom";

export default function Header(){
    const name = "Trinits";
    const url = "https://www.reactjs.org";
    const p = {
        name: "Trinits",
        age: 20
    }

    let a = 20;
    let b = 30;

    function getAddValue(){
        return a + b;
    }

    return (
        <>
        <div>
            <h1 className="bg-warning" >Payroll management 
            <Link to={"/login"}>Login</Link>
            <Link to={"/users"}>users</Link>
            </h1>
        </div>
        </>
    )
}

//reelase 16.8 => 2019

//webpack => Babel => React