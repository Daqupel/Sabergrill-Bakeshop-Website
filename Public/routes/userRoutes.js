const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('List of all users');
});

router.get('/profile', (req, res) => {
  res.send('The User Profile Page');
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Viewing profile for user ID: ${userId}`);
});

module.exports = router;