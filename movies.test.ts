import {
  Movie,
  countMoviesByYear,
  hasKey,
  printMovieTitles,
  updateMovieGenre,
} from "./movies";

describe("hasKey", () => {
  const sampleObject = {
    name: "John",
    age: 25,
    city: "New York",
  };

  it("should return true if the key exists in the object", () => {
    expect(hasKey(sampleObject, "name")).toBe(true);
    expect(hasKey(sampleObject, "age")).toBe(true);
    expect(hasKey(sampleObject, "city")).toBe(true);
  });

  it("should return false if the key does not exist in the object", () => {
    expect(hasKey(sampleObject, "height")).toBe(false);
    expect(hasKey(sampleObject, "weight")).toBe(false);
  });
});

describe("Movie Array Manipulation", () => {
  const originalMovies: Movie[] = [
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

  describe("printMovieTitles", () => {
    it("should print the titles of all movies", () => {
      const consoleSpy = jest.spyOn(console, "log");
      printMovieTitles(originalMovies);
      expect(consoleSpy).toHaveBeenCalledTimes(originalMovies.length);
      originalMovies.forEach(({ title }, i) =>
        expect(consoleSpy).toHaveBeenNthCalledWith(i + 1, title)
      );
      consoleSpy.mockRestore();
    });
  });

  describe("countMoviesByYear", () => {
    it("should count how many movies were released in a year", () => {
      expect(countMoviesByYear(originalMovies, 1994)).toBe(3);
    });
  });

  describe("updateMovieGenre", () => {
    it("should update the genre of the movie with the given title", () => {
      const copy = [...originalMovies];
      const title = "The Dark Knight";
      const newGenre = "Romantic Comedy";
      const updatedMovies = updateMovieGenre(copy, title, newGenre);
      const darkKnight = copy[3];
      expect(darkKnight.genre).toBe(newGenre);

      updatedMovies.forEach((movie) => {
        if (movie.title !== "The Dark Knight") {
          const originalMovie = originalMovies.find(
            (original) => original.title === movie.title
          );
          expect(originalMovie).toBeTruthy();
          expect(movie.genre).toBe(originalMovie!.genre);
        }
      });
    });

    it("should return the modified array", () => {
      const copy = [...originalMovies];
      const title = "The Dark Knight";
      const newGenre = "Romantic Comedy";
      expect(updateMovieGenre(copy, title, newGenre).length).toBe(copy.length);
    });

    it("should return the unmodified array if the movie is not found", () => {
      const copy = [...originalMovies];
      const title = "Bananas in Pyjamas";
      const newGenre = "Horror";
      expect(updateMovieGenre(copy, title, newGenre)).toEqual(copy);
    });

    it("should not modify any other movies", () => {
      const copy = [...originalMovies];
      const title = "The Dark Knight";
      const newGenre = "Romantic Comedy";
      const updatedMovies = updateMovieGenre(copy, title, newGenre);

      updatedMovies.forEach((movie) => {
        if (movie.title !== title) {
          const originalMovie = originalMovies.find(
            (original) => original.title === movie.title
          );
          expect(originalMovie).toBeTruthy();
          expect(movie.genre).toBe(originalMovie!.genre);
        }
      });
    });
  });
});
