import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//ícones: https://pictogrammers.com/library/mdi/
import styles from '../styles/TextFieldStyle';
import stylesGlobal from '../styles/GlobalStyle';
import {TextInputMask} from 'react-native-masked-text';
import {useState} from 'react';

export function MoneyField(props: any) {
  const {label, invalid, invalidMessage, form, name, ...rest} = props;

  const [value, setAmount] = useState(0.0);

  const handleChangeText = (formatted: any, extracted: any) => {
    setAmount(extracted);
    form.setFieldValue(
      name,
      parseFloat(formatted.replace(/[^\d,-]/g, '').replace(',', '.')),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={stylesGlobal.label}>{label}</Text>
      <TextInputMask
        type="money"
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$',
          suffixUnit: '',
        }}
        value={value}
        onChangeText={handleChangeText}
        style={[stylesGlobal.label, styles.input]}
        {...rest}
      />
      {invalid && (
        <Text style={[stylesGlobal.label, styles.warning]}>
          <Icon name="close" size={15} />
          {invalidMessage}
        </Text>
      )}
    </View>
  );
}
