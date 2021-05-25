export const API_base_url = "https://api.themoviedb.org/3";

export const imagesConfig = {
	base_url: "http://image.tmdb.org/t/p/",
	secure_base_url: "https://image.tmdb.org/t/p/",
	backdrop_sizes: ["w300", "w780", "w1280", "original"],
	logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
	poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
	profile_sizes: ["w45", "w185", "h632", "original"],
	still_sizes: ["w92", "w185", "w300", "original"],
};
const API_KEY = "11fdf8e9390734ace83180a470ee0b5a";
const mockLanguage = "language=en-US";
export const mockMovieQuery = {
	trendingWeek: `/trending/all/week?api_key=${API_KEY}&${mockLanguage}`,
	originalsNetflix: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	topRate: `/movie/top_rated?api_key=${API_KEY}&${mockLanguage}`,
	actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
