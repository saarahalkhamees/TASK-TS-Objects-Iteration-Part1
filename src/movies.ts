interface Movie {
  title: string;
  director: string;
  year: number;
  genre: string;
}

/**
 * You can use movies to
 * manually test your code
 */
const movies: Movie[] = [
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

/**
 * hasKey function that:
 * - Accepts two parameters:
 *  - an "object" of type "object",
 *  - and a "key" of type "string".
 * - Return true if the object contains the specified key, and false otherwise.
 * example:
 *  hasKey({ title: "Inception", year: 2010 }, "title"); // => true
 *  hasKey({ title: "Inception", year: 2010 }, "director"); // => false
 */
function hasKey(obj: object, key: string): boolean {
  // write your code here...

  return true; // replace true with what you see is fit
}

/**
 * `printMovieTitles` function that:
 * - Accepts "movies" parameter of type "Movie[]"
 * - Logs each movie title provided in the array of movies.
 */
function printMovieTitles(movies: Movie[]): void {
  // write your code here...
}

// `countMoviesByYear` function that:
// - Accepts two parameters:
// - a "movies" array of type "Movie[]"
// - a "year" of type "number"
// - Returns the number of movies that were released in that year.
// example:
//  countMoviesByYear(movies, 1994); // => 3
//  countMoviesByYear(movies, 2008); // => 1
//  countMoviesByYear(movies, 2025); // => 0

function countMoviesByYear(movies: Movie[], year: number): number {
  // write your code here...

  return -1; // replace -1 with what you see is fit
}

/**
 * `updateMovieGenre` function that::
 * - Accepts three parameters:
 *  - a "movies" array of type "Movie[]"
 *  - a "title" of type "string"
 *  - a "newGenre" of type "string"
 * - using the "title" provided, it should update the genre of the given movie, if it exists,
 * then returns the modified array of movies.
 * Hint: use array iterator .find
 * example:
 *  updateMovieGenre(movies, "Pulp Fiction", "Thriller") =>
 *  [
 *    { title: "The Shawshank Redemption", genre: "Drama", ... },
 *    { title: "The Godfather", genre: "Crime", ... },
 *    { title: "Pulp Fiction", genre: "Thriller", ... },  // ✅ Updated genre
 *    { title: "The Dark Knight", genre: "Action", ... },
 *    { title: "Forrest Gump", genre: "Drama", ... }
 *  ]
 */
function updateMovieGenre(
  movies: Movie[],
  title: string,
  newGenre: string
): Movie[] {
  // write your code here...

  return []; // replace empty array with what you see is fit
}

export { Movie, hasKey, printMovieTitles, countMoviesByYear, updateMovieGenre };
