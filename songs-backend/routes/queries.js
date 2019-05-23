const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})



const getSongs = (request, response) => {
  pool.query('SELECT * FROM songs ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getSongById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM songs WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const insertNewSong = (request, response) => {
  pool.query('INSERT INTO songs (title, artist, album, filename) VALUES ($1, $2, $3, $4)',
    [request.query['title'], request.query['artist'], request.query['album'], request.query['filename']], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getSongs,
  getSongById,
  insertNewSong
};