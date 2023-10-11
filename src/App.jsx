import React, { useState, useEffect } from "react";
import "./App.css";
import AddMovie from "./components/Addmovie";
import Home from "./components/Home";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [movies, setMovies] = useState([]);
  const [showAddMovie, setShowAddMovie] = useState(false);

  // Load movies from local storage when the app starts
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies"));
    if (storedMovies) {
      setMovies(storedMovies);
    }
  }, []);

  const handleAddMovie = (newMovie) => {
    const updatedMovies = [{ id: uuidv4(), ...newMovie }, ...movies];
    setMovies(updatedMovies);
    // Save the updated movies to local storage
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    setShowAddMovie(false); // Close the Add Movie form after adding a movie
  };

  return (
    <div className="App">
      <header>
        <div className="search-container">
          {/* Add your search input and button here */}
        </div>
        <nav>
          <ul>
            <li onClick={() => setShowAddMovie(false)}>
              <a href="#">Home</a>
            </li>
            <li onClick={() => setShowAddMovie(true)}>
              <a href="#">Add Movie</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {showAddMovie ? (
          <AddMovie onAddMovie={handleAddMovie} />
        ) : (
          <Home movies={movies} />
        )}
      </main>
    </div>
  );
}

export default App;
