import React, { useState } from 'react';

function Home({ movies }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = () => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <h2>Movie List</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by movie title..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="movie-cards">
        {filteredMovies.map((movie) => (
          <div className="movie-card" key={movie.id}> {/* Add key prop */}
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
            <div className="star-rating">
              {Array.from({ length: Number(movie.rating) }, (_, index) => (
                <span key={index} className="star gold">
                  &#9733;
                </span>
              ))}
              {Array.from({ length: 5 - Number(movie.rating) }, (_, index) => (
                <span key={index} className="star">
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;