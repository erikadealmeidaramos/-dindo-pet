import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
//ícones: https://pictogrammers.com/library/mdi/
import styles from '../styles/GalleryItemStyle';
import {uploadsFolderUrl} from '../../utils/constants';

export function GalleryItem(props: any) {
  const {post, handleGalleryItemPress, ...rest} = props;

  return (
    <TouchableOpacity
      style={styles.link}
      onPress={() => handleGalleryItemPress(post.picturePost)}>
      <Image
        style={styles.picture}
        source={{uri: `${uploadsFolderUrl}${post.picturePost}`}}
      />
    </TouchableOpacity>
  );
}
