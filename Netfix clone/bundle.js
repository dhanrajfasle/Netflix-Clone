const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


const api = "api_key=995cdf2a72cb31d821a28f61ca3546ff";
const base_url = "https://api.themoviedb.org/3";

const banner_url ="https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";


const requests = {

    fetchTrending: '${base_url}/trending/all/week?${api}&language=en-US',
    fetchNetflixOriginals: '${base_url}/discover/tv?${api}&with_networks=213',
    fetchActionMovies: '${base_url}/discover/movies?${api}$with_genres=28',
    fetchComedyMovies: '${base_url}/discover/movies?${api}$with_genres=35',
    fetchHorrorMovies: '${base_url}/discover/movies?${api}$with_genres=27',
    fetchRomanceMovies: '${base_url}/discover/movies?${api}$with_genres=10749',
    ocumentaries: '${base_url}/discover/movies?${api}$with_genres=99',
};
//USE TRUNCATE THE STRING

function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1)+"..." : str;
}
// BANNER
fetch(requests.fetchNetflixOriginals)
.then((res) => res.json())


.then((data) => {
    console.log(data.results);
    //every refresh the movie will be change


    const setMovie =
    data.results[Math.floor(Math.random() * data.results.length - 1)];


    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner_desc = document.getElementById("banner_description");


    banner.style.backgroundImage =
    "url(" + banner_url + setMovie.backdrop_path + ")";
    banner_desc.innerText= truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;
});