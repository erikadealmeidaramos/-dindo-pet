import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//ícones: https://pictogrammers.com/library/mdi/
import styles from '../styles/TextFieldStyle';
import stylesGlobal from '../styles/GlobalStyle';

export function TextField(props: any) {
  const { label, invalid, invalidMessage, ...rest } = props;

  return (
    <View style={styles.container}>
      <Text style={stylesGlobal.label}>{label}</Text>
      <TextInput style={[stylesGlobal.label, styles.input]} {...rest} />
      {invalid && (
        <Text style={[stylesGlobal.label, styles.warning]}>
          <Icon name="close" size={15} />
          {invalidMessage}
        </Text>
      )}
    </View>
  );
}
