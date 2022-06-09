import UI from "./scripts/UI.js";
import Movie from "./scripts/Movie.js";

// Display Movie List
document.addEventListener("DOMContentLoaded", UI.loadMovieList);

// Add Movie
document.querySelector(".movie-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const genre = document.getElementById("genre").value;
  const rating = document.getElementById("rating").value;

  if (!name || !genre || !rating) {
    UI.showAlert("danger", "Please fill in all fields");
    return;
  }

  const newMovie = new Movie(name, genre, rating);
  UI.addMovieToList(newMovie);
  UI.showAlert("success", "Movied Added");
  UI.clearInputs();
});

// Delete Movie
document
  .getElementsByClassName("movie-tbody")[0]
  .addEventListener("click", (e) => {
    UI.removeMovieFromList(e.target);
    UI.showAlert("danger", "Movie Removed");
  });
