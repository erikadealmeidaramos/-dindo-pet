import React from 'react';
import stylesGlobal from '../styles/GlobalStyle';
import {Text} from 'react-native';
import CustomModal from './CustomModal';
import {IconTextField} from './IconTextField';
import {Button} from './Button';

function RecoverPasswordModal(props: any) {
  const {viewModel} = props;

  return (
    <CustomModal
      modalVisible={viewModel.isModalVisible}
      setModalVisible={viewModel.setModalVisible}>
      <Text style={[stylesGlobal.header3]}>
        Uma nova senha será enviada para seu e-mail
      </Text>

      <IconTextField
        invalid={viewModel.emailInvalid}
        placeholder="E-mail"
        viewModelFunction={viewModel.setEmail}
        viewModelValue={viewModel.email}
        invalidMessage="E-mail inválido"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        iconName="email"
      />

      <Button
        text="Enviar"
        handleClick={viewModel.handleRecoverPassword}
        customStyle={{width: '80%', marginBottom: 20}}></Button>
    </CustomModal>
  );
}

export default RecoverPasswordModal;
