const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

const app = express();
const PORT = 3004;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get('/api/allreviews/', (req, res) => {
  var arr = req._parsedOriginalUrl.search.split('=');
  // console.log('id server: ', arr[1]);
  db.getAllReviews(arr[1], (err, data) => {
    if(err) {
     res.status(500).send('Something Broke!');
    } else {
    res.json(data)
    }
  })
 });

