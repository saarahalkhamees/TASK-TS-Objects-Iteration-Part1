// Q1: Using `createPerson` function create and return a person object with the following properties `name`, `age`, and `city`. and set appropriate values for these properties.
function createPerson() {
  // write your code here...
}

// DO NOT CHANGE THE CODE BELOW (you can use it for testing purposes)
const person = createPerson();

// Q2: Using `addEmailToPerson` function add a new key email to the person object argument and assign it an email address, and return the person object
function addEmailToPerson(person, email) {
  // write your code here...
}

// Q3: Using `hasKey` function that takes two arguments, an object and a key. The function should return true if the object contains  the specified key, and false otherwise.
function hasKey(obj, key) {
  // write your code here...
}

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

// Q4: Using `printMovieTitles` function that accepts an array of objects called 'movies', iterates through it to print the titles of all the movies.
function printMovieTitles(movies) {
  // write your code here...
}

// Q5: Using `countMoviesByYear1994` function that accepts an array of objects called 'movies', and iterates through it to count how many movies were released in the year 1994.
function countMoviesByYear1994(movies) {
  // write your code here...
}

// Q6: Using `updateMovieGenre` function that updates the genre of the movie "The Dark Knight" to "Action/Drama" and returns the modified array of movies.
function updateMovieGenre(movies) {
  // write your code here...
}

module.exports = {
  createPerson,
  addEmailToPerson,
  hasKey,
  printMovieTitles,
  countMoviesByYear1994,
  updateMovieGenre,
};
