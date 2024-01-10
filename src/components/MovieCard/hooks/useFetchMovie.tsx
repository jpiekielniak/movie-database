import axios from "axios";
import {useEffect, useState} from "react";
import {TMovie} from "../types/Movie";
import {UUID} from "node:crypto";

const useFetchMovie = (movieId: UUID | undefined): TMovie => {
    const [movie, setMovie] = useState<TMovie>();

    useEffect(() => {
        const fetchMovie = async () => {

            await axios.get(`https://at.usermd.net/api/movies/${movieId}`)
                .then((response) => setMovie(response.data))
                .catch(() => setMovie(undefined));

        };

        fetchMovie().then();
    }, [movieId]);

    return movie as TMovie;
};

export default useFetchMovie;
