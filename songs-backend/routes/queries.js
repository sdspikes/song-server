const Pool = require('pg').Pool
const database = require('../database.json')

const env = process.env.NODE_ENV || 'dev'
const settings = database[env]
const pool = new Pool(settings)



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
  if (!id || id === NaN)
    return

  pool.query('SELECT * FROM songs WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows[0])
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