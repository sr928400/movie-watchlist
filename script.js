const form = document.getElementById("movieWatchForm");
const titleInput = document.getElementById("movieName");
const genreSelect = document.getElementById("movieGenre");
const message = document.getElementById("movieFormMessage");
const movieList = document.getElementById("movieCollection");
const emptyMessage = document.getElementById("emptyWatchlist");

const watchlist = {
    movies: [
        {title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", watched: false},
        {title: "Tropic Thunder", genre: "Comedy", watched: false}
    ],

    toggleWatched(index) {
        this.movies[index].watched =
            !this.movies[index].watched;
    },

    removeMovie(index) {
        this.movies.splice(index, 1);
    }
};

function saveMovies() {
    // TODO (Step 6)
}

function loadMovies() {
    // TODO (Step 6)
}

function renderMovies() {
    movieList.replaceChildren();
    watchlist.movies.forEach((movie, index) => {
        const card = document.createElement("li");

        const title = document.createElement("h3");
        title.textContent = movie.title;

        const details = document.createElement("p");
        details.textContent = movie.genre + " - " + (movie.watched ? "Watched" : "Not watched");

        const toggleButton = document.createElement("button");
        toggleButton.type = "button";
        toggleButton.textContent = movie.watched ? "Mark Unwatched" : "Mark Watched";
        toggleButton.addEventListener("click", () => {
            watchlist.toggleWatched(index);
            saveMovies();
            renderMovies();
        });

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            watchlist.removeMovie(index);
            saveMovies();
            renderMovies();
        });

        card.append(title, details, toggleButton, removeButton);
        movieList.append(card);
    });

    if (watchlist.movies.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

form.addEventListener("submit", (event) => {
    // TODO (Step 5)
});

loadMovies();
renderMovies();