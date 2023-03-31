import { useSelector } from "react-redux";
import useFetch from "../Hooks/useFetch";
import { USERS_URL } from "../utils/Endpoints";

export default function Users() {
    // const users =  useSelector((state) => state.user.users);
    const users= useFetch(USERS_URL)

    return (
        <div>
            <h1>Users ({users.length})</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
        </div>
    )
}