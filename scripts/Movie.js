// The Movie Class
class Movie {
  constructor(name, genre, rating) {
    this.id = this.getRandomInt();
    this.name = name;
    this.genre = genre;
    this.rating = rating;
  }

  getRandomInt() {
    return Math.floor(Math.random() * 1000000);
  }
}

export default Movie;
