import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import home from "./pages/home";
import create from "./pages/movie/Create";
import nowplaying from "./pages/movie/NowPlaying";
import ToptRated from "./pages/movie/TopRated";

import { ThemeProvider } from "styled-components";
import theme from './utils/constants/theme';
import popular from "./pages/movie/Popular";

function App() {
    const [movies, setMovies] = useState(data);

    return ( <
        div >
        <
        ThemeProvider theme = { theme } >
        <
        Layout >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/movie/create"
        element = { < CreateMovie / > }
        /> <
        Route path = "/movie/popular"
        element = { < PopularMovie / > }
        /> <
        Route path = "/movie/now"
        element = { < NowPlaying / > }
        /> <
        Route path = "/movie/top"
        element = { < ToptRatedMovie / > }
        /> < /
        Routes > <
        /Layout> < /
        ThemeProvider > <
        /div>
    );
}

export default App;