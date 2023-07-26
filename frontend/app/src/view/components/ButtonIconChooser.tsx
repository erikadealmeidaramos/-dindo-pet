import React, {useState} from 'react';
import styles from '../styles/ButtonChooserStyle';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import stylesGlobal from '../styles/GlobalStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//ícones: https://pictogrammers.com/library/mdi/

export function ButtonIconChooser(props: any) {
  const {
    form,
    name,
    label,
    onSelect,
    invalid,
    invalidMessage,
    options,
    selectedOption,
    setSelectedOption,
    ...rest
  } = props;
  const [buttonValue, setButtonValue] = useState('');

  const handleOptionSelect = (option: any) => {
    form.setFieldValue(name, {id: option.value});
    form.setFieldTouched(name, true);
    setSelectedOption(option.label);
    onSelect(option);
    setButtonValue(name);
  };

  return (
    <View style={{width: '100%', marginTop: 15}}>
      <Text style={stylesGlobal.label}>{label}</Text>
      <View style={styles.container}>
        {options.map((option: any) => (
          <View style={styles.buttonsContainer} key={option.value}>
            <TouchableOpacity
              style={[
                styles.button,
                selectedOption == option.label && styles.buttonSelected,
              ]}
              onPress={() => handleOptionSelect(option)}>
              <Icon
                name={option.icon}
                style={[
                  styles.buttonText,
                  {fontSize: 35},
                  selectedOption == option.label && styles.buttonTextSelected,
                ]}
              />
              <Text
                style={[
                  styles.buttonText,
                  selectedOption == option.label && styles.buttonTextSelected,
                ]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {invalid && buttonValue == '' && (
        <Text style={[stylesGlobal.label, styles.warning]}>
          <Icon name="close" size={15} />
          {invalidMessage}
        </Text>
      )}
    </View>
  );
}
