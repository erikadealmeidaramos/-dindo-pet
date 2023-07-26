import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import styles from '../styles/PostItemStyle';
import {uploadsFolderUrl} from '../../utils/constants';

export function PostItem(props: any) {
  const {post, handlePetProfileRedirect, ...rest} = props;

  return (
    <TouchableOpacity
      style={styles.link}
      onPress={() => handlePetProfileRedirect(post.pet)}>
      <View style={styles.container}>
        <Image
          style={styles.profilePic}
          source={{uri: `${uploadsFolderUrl}${post.pet.image}`}}
        />
        <Text style={styles.header}>{post.pet.name}</Text>
      </View>
      {post.postDescription != '' ? (
        <Text style={styles.description}>{post.postDescription}</Text>
      ) : (
        <View style={styles.whiteSpace}></View>
      )}
      <Image
        style={styles.picture}
        source={{uri: `${uploadsFolderUrl}${post.picturePost}`}}
      />
    </TouchableOpacity>
  );
}
