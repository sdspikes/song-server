var express = require('express');
var router = express.Router();
var queries = require('./queries.js');
const cors = require('cors')


/* GET home page. */
router.get('/', cors(), queries.getSongs);
router.get('/songs', cors(), queries.getSongs);


/* GET single song by id. */
router.get('/songs/:id', cors(), queries.getSongById);

/* POST add song metadata. */
router.post('/new', queries.insertNewSong);


module.exports = router;
