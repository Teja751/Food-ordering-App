const express = require('express');
const router = express.Router();
let restaurants = [];
// Define routes for restaurants
router.get('/', (req, res) => {
    res.json(restaurants); // Sending the restaurant list as a JSON response
  });
  
  router.post('/', (req, res) => {
    const newRestaurant = req.body;
    restaurants.push(newRestaurant); // Add the new restaurant to the list
    res.status(201).json(newRestaurant); // Send the new restaurant as the response
  });
// Export the router to be used in other files
module.exports = router;
