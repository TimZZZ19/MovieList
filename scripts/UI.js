// The UI Class
class UI {
  static loadMovieList() {
    const sampleList = [
      {
        id: "m1",
        name: "Die Hard",
        genre: "action, adventure",
        rating: "9.0",
      },
      { id: "m2", name: "Alien", genre: "sci-fi, horror", rating: "9.5" },
    ];

    sampleList.forEach((movie) => UI.addMovieToList(movie));
  }

  static addMovieToList(movie) {
    const { id, name, genre, rating } = movie;
    const movieTbody = document.querySelector(".movie-tbody");

    const row = document.createElement("tr");
    row.id = id;
    row.innerHTML = `
                      <td>${name}</td>
                      <td>${genre}</td>
                      <td>${rating}</td>
                      <td>
                        <button type="button" 
                                class="btn btn-danger btn-sm delete">X</button>
                      </td>
                    `;

    movieTbody.appendChild(row);
  }

  static removeMovieFromList(element) {
    if (!element.classList.contains("delete")) return;
    element.parentElement.parentElement.remove();
  }

  static clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("rating").value = "";
  }

  static showAlert(className, message) {
    const alert = `<div class="mt-5 alert alert-${className} text-center">${message}</div>`;
    const movieForm = document.querySelector(".movie-form");
    movieForm.insertAdjacentHTML("afterend", alert);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2000);
  }
}

export default UI;
