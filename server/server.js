const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.static('public'));
app.use(cors());

app.use('/course', (req, res) => {
  res.sendFile('index.html', {root: 'client'});
});

module.exports = app;