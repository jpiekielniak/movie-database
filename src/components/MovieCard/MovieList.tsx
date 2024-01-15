import React, {useState, useEffect} from 'react';
import MovieCard from "./MovieCard";
import styles from "./styles/movieList.module.css";
import {Link} from "react-router-dom";
import {MovieListProps} from "./types/MovieListProps";
import axios from "axios";
import {TMovie} from "./types/Movie";
import ReactPaginate from 'react-paginate';

function MovieList(props: MovieListProps) {
    const [movies, setMovies] = useState<TMovie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 8;

    useEffect(() => {
        axios.get('https://at.usermd.net/api/movies')
            .then(res => setMovies(res.data))
            .catch(err => console.log(err));
    }, []);

    const {searchTerm} = props;

    const filteredFilms = movies.filter(film =>
        film.title && film.title.toLowerCase().includes((searchTerm || '').toLowerCase())
    );

    const pageCount = Math.ceil(filteredFilms.length / moviesPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const offset = (currentPage - 1) * moviesPerPage;

    const currentMovies = filteredFilms.slice(offset, offset + moviesPerPage);

    const containerClass = filteredFilms.length === 1 ? `${styles.container} ${styles.singleMovie}` : styles.container;

    return (
        <div>
            {pageCount > 1 && (
                <div>
                    <ReactPaginate
                        activeClassName={styles.active}
                        breakLabel="..."
                        containerClassName={styles.pagination}
                        onPageChange={(e) => handlePageChange(e.selected + 1)}
                        nextLabel={'Następna'}
                        previousLabel={'Poprzednia'}
                        pageCount={pageCount}
                        previousClassName={styles.previous}
                        nextClassName={styles.next}
                    />
                </div>
            )}

            <div className={containerClass}>
                {currentMovies.map((film, index) => (
                    <Link to={`/details/${film.id}`} key={`${index}`}>
                        <MovieCard {...film} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MovieList;
