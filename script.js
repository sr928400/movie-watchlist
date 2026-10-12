const form = document.getElementById("movieWatchForm");
const titleInput = document.getElementById("movieName");
const genreSelect = document.getElementById("movieGenre");
const message = document.getElementById("movieFormMessage");
const movieList = document.getElementById("movieCollection");
const emptyMessage = document.getElementById("emptyWatchlist");

const watchlist = {
    movies: [],

    toggleWatched(index) {
        // TODO (Step 4)
    },

    removeMovie(index) {
        // TODO (Step 4)
    }
};

function saveMovies() {
    // TODO (Step 6)
}

function loadMovies() {
    // TODO (Step 6)
}

function renderMovies() {
    // TODO (Step 3)
}

form.addEventListener("submit", (event) => {
    // TODO (Step 5)
});

loadMovies();
renderMovies();