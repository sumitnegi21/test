// Import necessary packages
const express = require('express');
const cors = require('cors');

// Initialize express app
const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://stage.abc.com',
  optionsSuccessStatus: 200
};

// Enable CORS with options
app.use(cors(corsOptions));

// Additional server setup and routes here...

app.listen(3000, () => {
  console.log('Server running on port 3000');
});