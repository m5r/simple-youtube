import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { VideoListItem } from './VideoListItem';

export const VideoList = ({ videos }) => {
  const { container } = styles;
  const videoItems = videos.map(video => (
    <VideoListItem
      key={video.etag}
      video={video}
    />
  ));

  return (
    <ScrollView>
      <View style={container}>
        {videoItems}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 0,
  }
});
