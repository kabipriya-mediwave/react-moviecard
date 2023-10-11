import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddMovie({ onAddMovie }) {
  const [movie, setMovie] = useState({ id: uuidv4(), image: '', title: '', year: '', rating: '' });
  const [selectedRating, setSelectedRating] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
    setMovie({ ...movie, rating: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(movie);
    setMovie({ id: uuidv4(), image: '', title: '', year: '', rating: '' });
    setSelectedRating('');
  };

  return (
    <div className="container">
      <h2>Add a Movie</h2>
      <form id="add-movie-form" onSubmit={handleSubmit}>
        <label htmlFor="movie-image">Image URL:</label>
        <input
          type="text"
          id="movie-image"
          name="image"
          value={movie.image}
          onChange={handleChange}
          required
        />
        <label htmlFor="movie-title">Title:</label>
        <input
          type="text"
          id="movie-title"
          name="title"
          value={movie.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="movie-year">Year:</label>
        <input
          type="number"
          id="movie-year"
          name="year"
          value={movie.year}
          onChange={handleChange}
          required
        />
        <label htmlFor="movie-rating">Rating:</label>
        <div className="rating-input">
          <select
            id="movie-rating"
            name="rating"
            value={selectedRating}
            onChange={handleRatingChange}
            required
          >
            <option value="">Select Rating</option>
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
          </select>
          <div className="star-rating">
            {selectedRating &&
              Array.from({ length: Number(selectedRating) }, (_, index) => (
                <span key={index} className="star gold">
                  &#9733;
                </span>
              ))}
            {selectedRating &&
              Array.from({ length: 5 - Number(selectedRating) }, (_, index) => (
                <span key={index} className="star">
                  &#9733;
                </span>
              ))}
          </div>
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie; 
