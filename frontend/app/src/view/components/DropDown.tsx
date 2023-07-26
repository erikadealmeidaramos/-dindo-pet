import React, {useState} from 'react';
import styles from '../styles/DropdownStyle';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import stylesGlobal from '../styles/GlobalStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//ícones: https://pictogrammers.com/library/mdi/

export function DropDown(props: any) {
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
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: any) => {
    form.setFieldValue(name, {id: option.value});
    form.setFieldTouched(name, true);
    setSelectedOption(option.label);
    setIsOpen(false);
    onSelect(option);
    setDropdownValue(name);
  };

  return (
    <View style={styles.container}>
      <Text style={stylesGlobal.label}>{label}</Text>
      <TouchableOpacity
        onPress={toggleDropdown}
        style={[stylesGlobal.label, styles.input]}
        {...rest}>
        <Text style={stylesGlobal.label}>
          {selectedOption ? selectedOption : 'Selecione uma das opções'}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          {options.map((option: any) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => handleOptionSelect(option)}
              style={styles.option}>
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {invalid && dropdownValue == '' && (
        <Text style={[stylesGlobal.label, styles.warning]}>
          <Icon name="close" size={15} />
          {invalidMessage}
        </Text>
      )}
    </View>
  );
}
