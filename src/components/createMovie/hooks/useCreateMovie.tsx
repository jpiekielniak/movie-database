import {TCreateMovie} from "../types/CreateMovie";
import axios from "axios";

const useCreateMovie = () => {
    const createMovie = async (data: TCreateMovie, token: string) => {
        const headers: { Authorization: string } = {
            Authorization: `Bearer ${token}`,
        };

        await axios.post(
            'https://at.usermd.net/api/movies',
            data,
            {headers}
        ).then((response) => response.data)
            .catch((error) => console.log(error));
    };

    return {createMovie};
};

export default useCreateMovie;
