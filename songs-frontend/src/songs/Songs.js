import React, { Component } from 'react';

import {SingleSong, AudioPlayer} from './Song'
import { Link } from "react-router-dom";
import config from '../config'

class Songs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      selectedSong: null
    };
  }

  componentDidMount() {
    fetch(`${config.backend}/songs/`)
      .then(response => response.json())
      .then(songs => this.setState({ songs }));
  }

  selectSong(song) { return () =>
    this.setState({selectedSong: song})
  }
  render() {
    const {songs, selectedSong} = this.state;
    const selectedId = selectedSong ? selectedSong.id : -1;
    console.log(selectedSong)
    return <div>
      {selectedSong &&
        <AudioPlayer filename={selectedSong.filename}/>}
      <ul>
        {songs.map((song, index) => (
          <li key={index} className={song.id === selectedId ? 'active' : 'inactive'}>
            <Link to={`/songs/${song.id}`}>
              <SingleSong {...song}/>
            </Link>
            <button onClick={this.selectSong(song)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  }
}

export default Songs
