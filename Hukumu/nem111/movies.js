const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// const connection=


const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: String, required: true },
  rating: { type: Number, required: true },
 
});

const Movie = mongoose.model('Movie', movieSchema);

// Create a new movie
app.post('/movies', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all movies with filtering, searching, sorting, and pagination
app.get('/movies', async (req, res) => {
  try {
    const { title, rating, q, sortBy, page, limit } = req.query;
    const query = {};

    // Filter by title
    if (title) {
      query.title = { $regex: title, $options: 'i' };
    }

    // Filter by rating
    if (rating) {
      query.rating = rating;
    }

    // Search by name
    if (q) {
      query.title = { $regex: q, $options: 'i' };
    }

    const sortOptions = {};
    // Sort by a field (example: sortBy=rating or sortBy=title)
    if (sortBy) {
      sortOptions[sortBy] = 1; // Use 1 for ascending and -1 for descending
    }

    const options = {
      sort: sortOptions,
      skip: (page - 1) * limit,
      limit: parseInt(limit),
    };

    const movies = await Movie.find(query, null, options);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a movie
app.patch('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    Object.assign(movie, req.body);
    await movie.save();
    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a movie
app.delete('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/movie_store');
    console.log(`Server started on port http://localhost:${PORT}`);
  } catch (error) {
    console.log(error)
  }
 
 
});
