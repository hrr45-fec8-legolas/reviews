const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

const app = express();
const PORT = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


app.get('/api/allreviews', (req, res) => {
  db.getAllReviews((err, data) => {
    if(err) {
     res.status(500).send('Something Broke!');
    } else {
    res.json(data)
    }
  })
 });
