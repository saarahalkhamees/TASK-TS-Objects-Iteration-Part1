const {
  createPerson,
  addEmailToPerson,
  hasKey,
  printMovieTitles,
  countMoviesByYear1994,
  updateMovieGenre,
} = require("./objectIteration");

describe("Person Object Manipulations", () => {
  let person;

  beforeEach(() => {
    person = createPerson();
  });

  describe("Create Person", () => {
    it("should create a person object with specified properties", () => {
      expect(person).toEqual({
        name: "Alice",
        age: 30,
        city: "New York",
      });
    });
  });

  describe("Add Email to Person", () => {
    it("should add an email to the person object", () => {
      const updatedPerson = addEmailToPerson(person, "alice@example.com");
      expect(updatedPerson.email).toBe("alice@example.com");
    });
  });

  describe("Object Key Presence Function", () => {
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
});

describe("Movie Array Manipulations", () => {
  const originalMovies = [
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

  it("should print the titles of all movies", () => {
    const consoleSpy = jest.spyOn(console, "log");
    printMovieTitles(originalMovies);
    expect(consoleSpy).toHaveBeenCalledTimes(originalMovies.length);
    consoleSpy.mockRestore();
  });

  it("should count how many movies were released in 1994", () => {
    expect(countMoviesByYear1994(originalMovies)).toBe(3);
  });

  it('should update the genre of "The Dark Knight" to "Action/Drama" and ensure no other movies are modified', () => {
    const updatedMovies = updateMovieGenre([...originalMovies]);
    const darkKnight = updatedMovies.find(
      (movie) => movie.title === "The Dark Knight"
    );
    expect(darkKnight.genre).toBe("Action/Drama");

    updatedMovies.forEach((movie) => {
      if (movie.title !== "The Dark Knight") {
        const originalMovie = originalMovies.find(
          (original) => original.title === movie.title
        );
        expect(movie.genre).toBe(originalMovie.genre);
      }
    });
  });
});
