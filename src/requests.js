const API_KEY = '8fdad314cbfe864ca63c833751ae99a0';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languaje=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&width+genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&width+genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&width+genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&width+genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&width+genres=99`,
}

export default requests;
