import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/LinkStyle';
import stylesGlobal from '../styles/GlobalStyle';

export function Link(props:any) {
    const { text, label, handleClick } = props; 

    return (
        <TouchableOpacity onPress={handleClick} style={styles.link}>
            <Text style={[stylesGlobal.link, styles.labelText]}>{label}</Text>
            <Text style={stylesGlobal.link}>{text}</Text>
        </TouchableOpacity>
    );
  }