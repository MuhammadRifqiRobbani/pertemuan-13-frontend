import axios from "axios";
import { useEffect, useState } from "react";
import footer from "./components/footer/footer;
import Navbar from "./components/Navbar/navbar;

function PopularMovie() {
    // simpa
    const API_KEY = process.env.RECT_APP - API_KEY;
    const URL = "https://api.themoviedb.org/3/movie/{movie_id}/keywords?api_key=$(API_KEY)";

    // membuat state movies
    const [movies, setMovies] = useState();



    useEffect(() => {
        // Memanggil function getPopularMovies
    }, []);

    async function getPopularMovies() {
        // fecth data dari axios
        const respons = await axios(URL);
        console.log(respons.data.results);

        // simpan data ke state movie
        setMovies(respons.data.results);
    }

    console.log(movies);

    return ( <
        >
        <
        Hero / > <
        Movies movies = { movies }
        / > 
    )
}

export default PopularMovie;