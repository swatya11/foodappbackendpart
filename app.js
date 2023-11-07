const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json());

// Sample food items
const foodItems = [
  { id: 1, name: 'Pizza', type: 'Italian', price: 10 },
  { id: 2, name: 'Burger', type: 'Fast Food', price: 5 },
  { id: 3, name: 'Sushi', type: 'Japanese', price: 15 },
];

// Get all food items
app.get('/api/food', (req, res) => {
  res.json(foodItems);
});

// Search for food items by type
app.get('/api/food/search', (req, res) => {
  const { type } = req.query;
  const filteredItems = foodItems.filter((item) => item.type === type);
  res.json(filteredItems);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${3000}`);
});
