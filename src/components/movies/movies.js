import styles from './movies.module.css';
import Movie from '../movies/movies';

function Movies(props) {
    // destructing props
    const { movies, title, iteration = false } = props;


    return ( <
        div className = { styles.container } >
        <
        section className = { styles.movies } >
        <
        h2 className = { styles.movies__title } > { title } < /h2>

        <
        div className = { styles.movie__container } > { /* looping: map */ } {
            movies.map((movie, i) => < Movie movie = { movie }
                    iteration = { iteration && i + 1 }
                    key = { movie.id }
                    />)
                } <
                /div> < /
            div >
        )
    }

    export default Movies;