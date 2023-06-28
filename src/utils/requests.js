import config from "../config/tmdb.config"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${config.TMDB_API}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${config.TMDB_API}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${config.TMDB_API}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${config.TMDB_API}&with_genres=28`,
    fetchComdeyMovies: `/discover/movie?api_key=${config.TMDB_API}&with_genres=35`,
    fetchRomanticMovies: `/discover/movie?api_key=${config.TMDB_API}&with_genres=10749`,
    fetchHorrorMovies: `/discover/movie?api_key=${config.TMDB_API}&with_genres=27`,
    fetchDocumentaries: `/discover/movie?api_key=${config.TMDB_API}&with_genres=99`,
}

export default requests