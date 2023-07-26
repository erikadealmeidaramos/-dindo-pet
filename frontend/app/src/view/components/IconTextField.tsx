import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//ícones: https://pictogrammers.com/library/mdi/
import styles from '../styles/IconTextFieldStyle';
import stylesGlobal from '../styles/GlobalStyle';

export function IconTextField(props:any) {
    const { invalid, invalidMessage, placeholder, viewModelFunction, viewModelValue, iconName, ...rest } = props; 

    return (
      <View style={styles.container}>
          <TextInput  style={[stylesGlobal.label, styles.input]} onChangeText={(text) => viewModelFunction(text)}
          value={viewModelValue} placeholder={placeholder} {...rest} />
          {invalid ? (
            <Text style={[stylesGlobal.label, styles.warning]}>
              <Icon name="close" size={15} />
            {invalidMessage ? invalidMessage : "Este campo está inválido"}
          </Text>
        ) : (
          <></>
        )}
        <Icon name={iconName} size={40} color="#999" style={styles.icon} />
      </View>
    );
  }