// DO NOT MODIFY OR DELETE `movies`
const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

// Q1: Write a `hasKey` function that takes two arguments, an object and a key.
// The function should return true if the object contains  the specified key, and false otherwise.
function hasKey(obj, key) {
  // write your code here...
}

// Q2: Write a `printMovieTitles` function that accepts an array of objects called 'movies'
// and iterates through it to print the titles of all the movies.
function printMovieTitles(movies) {
  // write your code here...
}

// Q3: Write a `countMoviesByYear` function that accepts an array of objects called 'movies'
// and a year
// and returns the number of movies that were released in that year.
function countMoviesByYear(movies, year) {
  // write your code here...
}

// Q4: Write a `updateMovieGenre` function that accepts a title and a new genre
// and updates the genre of the given movie, if it exists,
// then returns the modified array of movies.
// Hint: use array iterator .find
function updateMovieGenre(movies, title, newGenre) {
  // write your code here...
}

module.exports = {
  hasKey,
  printMovieTitles,
  countMoviesByYear,
  updateMovieGenre,
};
