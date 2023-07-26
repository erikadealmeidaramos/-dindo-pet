import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from '../styles/LoadingStyle';

export function Loading() {
  return (
    <View style={styles.indicatorWrapper}>
      <ActivityIndicator
        size="large"
        color="#ffa823ff"
        style={styles.indicator}
      />
    </View>
  );
}
