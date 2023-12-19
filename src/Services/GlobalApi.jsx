import axios from "axios";
const MovieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "ea86c91e06060f7d196621f678bddba1";
const getTreandingVids =axios.get(MovieBaseUrl+
    "/trending/all/day?api_key="+api_key)

export default{
    getTreandingVids
}