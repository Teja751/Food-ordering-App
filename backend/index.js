const express = require('express');
const app = express();
const cors = require('cors');
const restaurantRoutes = require('./routes/restaurants'); // Import the restaurant routes

app.use(cors());
app.use(express.json());

// Use the restaurant routes for the /restaurants endpoint
app.use('/restaurants', restaurantRoutes);
app.get('/restaurants', (req, res) => {
    res.json({ message: 'This is the restaurants route' });
  });

// Server setup
const port = 3001; // Make sure this matches
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

  
