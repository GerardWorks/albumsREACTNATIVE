import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail'

export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }
  componentWillMount() {
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => {
      this.setState({
        albums: response.data
      });
      console.log(this.state.albums);
    }).catch(err => {
      console.log('there was an error getting albums', err);
    });
  }
  renderAlbums() {
    return this.state.albums.map( album => <AlbumDetail key={album.title} album={album} /> );
  }
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
