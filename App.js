import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import YTSearch from 'youtube-api-search';
import { AppHeader, AppSearchBar, VideoList } from './components';

export default class App extends Component {
  state = {
    loading: false,
    videos: [],
  };

  API_KEY = 'AIzaSyB2GUQ9cHwrUwWTuPvkS8Rbb-nR35ezGHw';

  onPressSearch = term => {
    this.searchYouTube(term);
  };

  searchYouTube = term => {
    console.log('term:', term);

    this.setState({ loading: true });
    YTSearch({ key: this.API_KEY, term }, videos => {
      this.setState({
        loading: false,
        videos,
      });
    });
  };

  render() {
    const { loading, videos } = this.state;
    const { appView } = styles;

    return (
      <View style={appView}>
        <AppHeader
          headerText='Simple YouTube Search'
        />

        <AppSearchBar
          onPressSearch={this.onPressSearch}
          isLoadingVideos={loading}
        />

        <VideoList
          videos={videos}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});
