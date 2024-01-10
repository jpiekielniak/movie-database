import axios from 'axios';
import {UUID} from "node:crypto";

const useDeleteMovie = () => {
    return async (id: UUID | undefined, token: string | null) => {
            await axios.delete(`https://at.usermd.net/api/movie/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }).catch((error) => {
                console.log(error);
            });
    };
};

export default useDeleteMovie;
