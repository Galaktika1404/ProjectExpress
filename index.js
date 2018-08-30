console.log('express');
const express = require('express');
const morgan = require('morgan')

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/2', (req, res) => {
    res.status(201);
});

app.listen(5000, () => console.log('listen 5000'));