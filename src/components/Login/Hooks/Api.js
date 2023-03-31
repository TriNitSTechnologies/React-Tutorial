import { toast } from "react-toastify";
import { API } from "../../../Hooks/Api";
import { LOGIN_URL } from "../../../utils/Endpoints";

export async function loginApi(data, callback) {
    API.post(LOGIN_URL, data)
    .then((response) => {
        sessionStorage.setItem('SESSION_KEY', response.data.accessToken);
        callback(response.data);
        return response;
    })
    .catch((error) => {
       toast.error('Invalid Credentials');
        return error;
    });
}