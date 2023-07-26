import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from '../styles/TabStyle';

export function Tab(props: any) {
  const {
    firstText,
    secondText,
    handleFirstClick,
    handleSecondClick,
    selectedTab,
  } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          styles.firstButton,
          selectedTab == false ? styles.buttonActive : null,
        ]}
        onPress={handleFirstClick}>
        <Text
          style={[
            styles.buttonText,
            selectedTab == false ? styles.buttonTextActive : null,
          ]}>
          {firstText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          styles.secondButton,
          selectedTab == true ? styles.buttonActive : null,
        ]}
        onPress={handleSecondClick}>
        <Text
          style={[
            styles.buttonText,
            selectedTab == true ? styles.buttonTextActive : null,
          ]}>
          {secondText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
