
const express = require('express');
const router = express.Router();
const Player = require('../models/playerModel');
const { validatePlayerData } = require('../middlewares/validator');
const { updateLimiter } = require('../middlewares/updateLimiter');
const { recordMiddleware } = require('../middlewares/record');

// POST route to post player data
router.post('/players', validatePlayerData, async (req, res) => {
  try {
    const { name, age, nationality, position, goals, assists } = req.body;

    const newPlayer = new Player({
      name,
      age,
      nationality,
      position,
      goals,
      assists
    });

    await newPlayer.save();

    res.status(201).json({ message: 'Player data posted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while posting player data' });
  }
});

// GET route to get all players with pagination
router.get('/players', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const playersPerPage = 3;

    const players = await Player.find()
      .skip((page - 1) * playersPerPage)
      .limit(playersPerPage);

    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving players' });
  }
});

// GET route to get player by ID
router.get('/players/:id', async (req, res) => {
  try {
    const playerId = req.params.id;
    const player = await Player.findById(playerId);

    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }

    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving player data' });
  }
});

// PATCH route to update player data
router.patch('/players/:id', updateLimiter, recordMiddleware, async (req, res) => {
  try {
    const playerId = req.params.id;
    const updatedData = req.body;

    const updatedPlayer = await Player.findByIdAndUpdate(playerId, updatedData, { new: true });

    if (!updatedPlayer) {
      return res.status(404).json({ error: 'Player not found' });
    }

    res.status(200).json(updatedPlayer);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating player data' });
  }
});

// DELETE route to delete player data
router.delete('/players/:id', recordMiddleware, async (req, res) => {
  try {
    const playerId = req.params.id;

    const deletedPlayer = await Player.findByIdAndDelete(playerId);

    if (!deletedPlayer) {
      return res.status(404).json({ error: 'Player not found' });
    }

    res.status(200).json({ message: 'Player data deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting player data' });
  }
});

module.exports = router;

