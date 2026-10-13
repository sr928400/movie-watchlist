const form = document.getElementById("movieWatchForm");
const titleInput = document.getElementById("movieName");
const genreSelect = document.getElementById("movieGenre");
const message = document.getElementById("movieFormMessage");
const movieList = document.getElementById("movieCollection");
const emptyMessage = document.getElementById("emptyWatchlist");

const watchlist = {
    movies: [],

    toggleWatched(index) {
        this.movies[index].watched =
            !this.movies[index].watched;
    },

    removeMovie(index) {
        this.movies.splice(index, 1);
    }
};

function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(watchlist.movies));
}

function loadMovies() {
    const saved = localStorage.getItem("movies");
    if (saved === null) {
        return;
    }

    try {
        watchlist.movies = JSON.parse(saved);
    }

    catch (error) {
        watchlist.movies = [];
    }
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

    event.preventDefault();

    const title = titleInput.value.trim();
    const genre = genreSelect.value;

    if (title === "") {
        message.textContent = "Enter a movie title.";
        return;
    }

    if (genre === "") {
        message.textContent = "Choose a genre.";
        return;
    }

    watchlist.movies.push({
        title: title,
        genre: genre,
        watched: false
    });

    saveMovies();
    renderMovies();

    message.textContent = "";
    titleInput.value = "";
});

loadMovies();
renderMovies();