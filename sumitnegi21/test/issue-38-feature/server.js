const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'https://stage.abc.com'
};

app.use(cors(corsOptions));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});