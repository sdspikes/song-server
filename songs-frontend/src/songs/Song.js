import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import config from '../config'

class Song extends Component {
  constructor(props) {
    super(props);

    this.state = {
      song: {},
      songId: props.match.params.id
    };
  }

  componentDidMount() {
    fetch(`${config.backend}/songs/${this.state.songId}`)
      .then(response => response.json())
      .then(song => this.setState({ song }));
  }

  render() {
    const {song} = this.state;
    return <div>
      <SingleSong {...song} />
      <br/>
      <AudioPlayer filename={song.filename}/>
    </div>
  }
}


const SingleSong = ({ title, artist, album, filename }) => (
  <span>
    {title} - {artist} - {album}
  </span>
)

const AudioPlayer = ({filename}) => (
  <ReactAudioPlayer
    src={`${config.backend}/songs/${filename}`}
    controls
    />
)

export { Song, SingleSong, AudioPlayer }