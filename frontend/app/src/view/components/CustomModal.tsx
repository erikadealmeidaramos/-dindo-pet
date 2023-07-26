import React from 'react';
import {View, Modal, TouchableOpacity, Text} from 'react-native';
import styles from '../styles/CustomModalStyle';

function CustomModal(props: any) {
  const {modalVisible, setModalVisible, children} = props;

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.closeModal}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.closeTextModal}>X</Text>
        </TouchableOpacity>
        {children}
      </View>
    </Modal>
  );
}

export default CustomModal;
