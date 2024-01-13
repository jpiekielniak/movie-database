import axios from "axios";
import useDecodeToken from "../../MovieCard/hooks/useDecodeToken";

const useLogoutButton = () => {
    const token = window.localStorage.getItem("token");
    const decodedToken: any = useDecodeToken(window.localStorage?.getItem('token'));

    return async () => {
        await axios.delete(`https://at.usermd.net/api/user/logout/${decodedToken.userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then(() => {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('userId');
        }).catch((error) => console.log(error))
    };
};

export default useLogoutButton;
