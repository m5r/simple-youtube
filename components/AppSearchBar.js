import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';

export class AppSearchBar extends Component {
  state = {
    inputText: '',
  };

  onChangeText = inputText => this.setState({ inputText });

  render() {
    const { inputText } = this.state;
    const { onPressSearch, isLoadingVideos } = this.props;
    const { container, searchText } = styles;

    return (
      <View style={container}>
        <TextInput
          style={searchText}
          value={inputText}
          onChangeText={this.onChangeText}
          onSubmitEditing={() => onPressSearch(inputText)}
        />
        <Button
          backgroundColor={inputText.length ? '#e62117' : '#CCCCCC'}
          onPress={() => onPressSearch(inputText)}
          title={isLoadingVideos ? 'Loading...' : 'Search'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 75,
    marginLeft: 10,
    marginRight: 10,
  },
  searchText: {
    flex: 1,
  },
});
