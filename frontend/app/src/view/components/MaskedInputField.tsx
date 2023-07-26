import React from 'react';
import {View, Text, TextStyle, StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//ícones: https://pictogrammers.com/library/mdi/
import styles from '../styles/TextFieldStyle';
import stylesGlobal from '../styles/GlobalStyle';
import {TextInputMask} from 'react-native-masked-text';

interface MaskedInputFieldProps {
  label: string;
  invalid?: boolean;
  invalidMessage?: string;
  name: string;
  type: 'cpf' | 'cnpj'; // adicione outros tipos de acordo com a necessidade
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  form: any;
}

const MaskedInputField = ({
  label,
  invalid,
  invalidMessage,
  name,
  type,
  style,
  labelStyle,
  form,
  ...rest
}: MaskedInputFieldProps) => {
  const handleChange = (formatted: string) => {
    form.setFieldValue(name, formatted); // use field.form.setFieldValue
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={[stylesGlobal.label, labelStyle]}>{label}</Text>
      <TextInputMask
        style={[stylesGlobal.label, styles.input]}
        type={type}
        value={form.values[name]}
        onChangeText={handleChange}
        onBlur={form.handleBlur(name)}
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
};

export default MaskedInputField;
