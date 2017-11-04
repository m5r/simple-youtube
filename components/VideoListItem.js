import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const VideoListItem = ({ video }) => {
  const { image } = styles;
  const { title, channelTitle, description, thumbnails: { medium: { url } } } = video.snippet;

  return (
    <View>
      <Image
        style={image}
        source={{ uri: url }}
      />
      <Text>{title}</Text>
      <Text>{channelTitle}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'stretch',
    height: 100,
  },
});
