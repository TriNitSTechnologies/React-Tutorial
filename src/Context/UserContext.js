import { createContext, useState } from "react";

export const UserContext = createContext({
    username: "",
    login: (username) => {},
});

export const UserContextProvider = (props) => {
    const [username, setUsername] = useState("");

    function login(username) {
        setUsername(username);
    }
    
    return (
        <UserContext.Provider value={{username,login}}>
            {props.children}
        </UserContext.Provider>
    )
}