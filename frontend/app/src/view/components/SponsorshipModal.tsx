import React from 'react';
import stylesGlobal from '../styles/GlobalStyle';
import {Text, View} from 'react-native';
import CustomModal from './CustomModal';
import {Button} from './Button';
import styles from '../styles/SponsorshipModal';
import Clipboard from '@react-native-community/clipboard';

function SponsorshipModal(props: any) {
  const {isModalVisible, setModalVisible, pix} = props;

  return (
    <CustomModal
      modalVisible={isModalVisible}
      setModalVisible={setModalVisible}>
      <Text style={[stylesGlobal.header3]}>Apadrinhamento</Text>

      <Text style={styles.textBody}>Chave-pix: {pix}</Text>

      <View style={styles.footer}>
        <Button
          handleClick={() => setModalVisible(false)}
          text="Fechar"
          secondary={true}
        />
        <Button handleClick={() => Clipboard.setString(pix)} text="Copiar" />
      </View>
    </CustomModal>
  );
}

export default SponsorshipModal;
