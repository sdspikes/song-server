var express = require('express');
var router = express.Router();
var queries = require('./queries.js');


/* GET home page. */
router.get('/', queries.getSongs);
router.get('/songs', queries.getSongs);


/* GET single song by id. */
router.get('/songs/:id', queries.getSongById);

/* POST add song metadata. */
router.post('/new', queries.insertNewSong);


module.exports = router;
