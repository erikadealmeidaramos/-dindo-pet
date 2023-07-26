import React, {useState} from 'react';
import {Text, Alert, Pressable, View, Modal} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {TermsText} from './TermsText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesGlobal from '../styles/GlobalStyle';
import styles from '../styles/CheckboxAgreementStyle';

export function CheckboxAgreement(props: any) {
  const {label, DataProtect, invalid, invalidMessage, ...rest} = props;
  const [modalVisible, setModalVisible] = useState(false);
  let TextLink = '';
  if (DataProtect) {
    TextLink = 'termos da lei de proteção a dados';
  } else {
    TextLink = 'termos do contrato para uso do aplicativo';
  }

  const onPressLink = () => {
    setModalVisible(true);
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.closeButton]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Icon name="close" size={20} color="#fff" />
            </Pressable>
            <TermsText DataProtect={DataProtect}></TermsText>
          </View>
        </View>
      </Modal>

      <View style={styles.containerCheckbox}>
        <Text style={styles.checkboxText}>{label}</Text>
        <View style={styles.innerContainerCheckbox}>
          <CheckBox
            tintColors={{true: '#FFA823'}}
            {...rest}
            style={styles.checkbox}
          />
          <Text style={styles.label}>
            Li e concordo com os{' '}
            <Text style={styles.labelLink} onPress={onPressLink}>
              {TextLink}
            </Text>
          </Text>
        </View>
        {invalid && (
          <Text style={[stylesGlobal.label, styles.warning]}>
            <Icon name="close" size={15} />
            {invalidMessage}
          </Text>
        )}
      </View>
    </>
  );
}

export default CheckboxAgreement;
