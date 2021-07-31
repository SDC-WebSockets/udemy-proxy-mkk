const shrinkRay = require('shrink-ray-current');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const axios = require('axios');

const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 6012;
const host = process.env.PRIVATE_HOST || 'localhost'


app.use(shrinkRay());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors());
app.use(express.json());

const reviewURL = 'http://localhost:2712';

app.use('/course', (req, res) => {
  res.sendFile('index.html', {root: 'public'});
});

app.all('/reviews/item', async (req, res) => {
  console.log(`proxying request to ${req.originalUrl} with method ${req.method}`);
  await axios({
    method: req.method,
    url: reviewURL + req.originalUrl,
    data: JSON.stringify(req.body)
  })
    .then((results) => {
      res.status(200).json(results.data);
    })
    .catch(err => {
      res.status(400).send(`course ${req.params.courseId} does not exist`);
    });
});

app.all('/reviews/reviewer/:reviewerId', async (req, res) => {
  console.log(`proxying request to ${req.originalUrl} with method ${req.method}`);
  await axios({
    method: req.method,
    url: reviewURL + req.originalUrl,
    data: req.body
  })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.status(400).send(`course ${courseId} does not exist`);
    });
});

app.all('/review/item', async (req, res) => {
  console.log(`proxying request to ${req.originalUrl} with method ${req.method}`);
  await axios({
    method: req.method,
    url: reviewURL + req.originalUrl,
    data: req.body
  })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.status(400).send(`course ${courseId} does not exist`);
    });
});

app.all('/reviews/item/:courseId', async (req, res) => {
  console.log(`proxying request to ${req.originalUrl} with method ${req.method}`);
  await axios({
    method: req.method,
    url: reviewURL + req.originalUrl,
    data: req.body
  })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.status(400).send(`course ${courseId} does not exist`);
    });
});
app.listen(port, host, () => {
  console.log(`Listening at http://${host}:${port}`)
});