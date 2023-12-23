import {UUID} from "node:crypto";
import axios from "axios";
import {useEffect, useState} from "react";
import {TMovie} from "../types/Movie";

const useFetchMovie = (movieId: UUID | undefined): TMovie | null => {
    const [movie, setMovie] = useState<TMovie | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {

            await axios.get(`https://at.usermd.net/api/movies/${movieId}`)
                .then((response) => setMovie(response.data))
                .catch(() => setMovie(null));

        };

        fetchMovie().then();
    }, [movieId]);

    return movie;
};

export default useFetchMovie;
