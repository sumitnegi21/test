const express = require('express');
const cors = require('cors');

const app = express();

// CORS configuration
app.use(cors({
  origin: 'https://stage.abc.com'
}));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});