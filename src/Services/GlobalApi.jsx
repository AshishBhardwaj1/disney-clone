import axios from "axios";
const MovieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "ea86c91e06060f7d196621f678bddba1";
const getTreandingVids =axios.get(MovieBaseUrl+
    "/trending/all/day?api_key="+api_key)

    const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)
export default{
    getTreandingVids,
    getMovieByGenreId
}