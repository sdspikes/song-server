This project is written in Express, a Node.js library, and the PostgreSQL database.

You should have [Node.js and npm](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/) installed.

# Set up Postgres database
Install and start a postgres server if you don't already have it running.

```
brew install postgresql
brew services start postgresql
```

The app is configured to use the role `me` withe password `password` and the database `api`.  You can change these settings in `database.json`, or you can set up your local environment to conform to these settings.  For the latter, connect to postgres wit `psql postgres` and run the following commands:

```
CREATE ROLE me WITH LOGIN PASSWORD 'password';
ALTER ROLE me CREATEDB;
\q
```

Now reconnect with the new user using the command `psql -d postgres -U me` and create the database:

```
CREATE DATABASE api;
\c api # connect to the new database
```

# Get Express server running

Make sure you have all the required dependencies by running `npm install`, then start the server with `npm start`.

Check that things are up and running by hitting `http://www.localhost:3000` in your browser.  If you haven't inserted anything into the database, you will just see an empty list.

# Inserting into the database

Note: for the app to do anything, you'll need to manually add some audio files to `songs-backend/public/songs/` and add the metadata for the songs to the database.  Here's an example (remember, you still have to actually put a file with that filename in the `public/songs` directory manually).  

```
INSERT INTO songs (title, artist, album, filename) VALUES ('Seasons of Love', 'RENT Cast', 'RENT', 'Jonathan Larson - Seasons of Love.mp3')
```

I considered including some sample files but decided that would be a bad idea due to copyright issues :)
