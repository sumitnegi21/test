const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/todos', todoRoutes);

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).send({ error: 'Something went wrong!' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});