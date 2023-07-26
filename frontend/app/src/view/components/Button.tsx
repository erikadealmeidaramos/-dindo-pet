import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from '../styles/ButtonStyle';
import {Loading} from '../components/Loading';

export function Button(props: any) {
  const {
    text,
    handleClick,
    secondary = false,
    customStyle,
    showSpinner = false,
  } = props;

  return (
    <>
      {showSpinner ? (
        <Loading />
      ) : (
        <>
          <TouchableOpacity
            style={[
              styles.button,
              secondary ? styles.buttonSecondary : styles.buttonPrimary,
              customStyle,
            ]}
            onPress={handleClick}>
            <Text
              style={[
                styles.buttonText,
                secondary
                  ? styles.buttonTextSecondary
                  : styles.buttonTextPrimary,
              ]}>
              {text}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </>
  );
}
