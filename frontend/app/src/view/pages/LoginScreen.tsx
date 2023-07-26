import React from 'react';
import styles from '../styles/LoginScreenStyle';
import LoginViewModel from '../viewModel/LoginViewModel';
import { useNavigation } from '@react-navigation/native';
import stylesGlobal from '../styles/GlobalStyle';
import { ScrollView, View, Text, Image } from 'react-native';
import { IconTextField } from '../components/IconTextField';
import { Button } from '../components/Button';
import { Link } from '../components/Link';
import { useDispatch } from 'react-redux';
import RecoverPasswordModal from '../components/RecoverPasswordModal';
import { Loading } from '../components/Loading';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const viewModelProps = { navigation };
  const viewModel = LoginViewModel(viewModelProps, dispatch);

  return (
    <>
      <ScrollView style={stylesGlobal.ScrollContainer}>
        {viewModel.loading ?
          <Loading /> :
          <View style={stylesGlobal.BodyContainer}>
            <Image
              source={require('../../../assets/images/loginIlustration.png')}
              style={styles.ilustration}
              resizeMode={'contain'}
            />

            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.logo}
              resizeMode={'contain'}
            />

            <Text style={stylesGlobal.header2}>Login</Text>

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

            <IconTextField
              invalid={viewModel.passwordInvalid}
              placeholder="Senha"
              viewModelFunction={viewModel.setPassword}
              viewModelValue={viewModel.password}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              iconName="lock"
            />

            <Button text="Entrar" handleClick={viewModel.handleLogin}></Button>

            <Link
              text="Esqueci minha senha"
              handleClick={() => viewModel.setModalVisible(true)}></Link>

            <RecoverPasswordModal viewModel={viewModel} />

            <Link
              label="Não tem uma conta? "
              text="Clique aqui para criar uma"
              handleClick={viewModel.handleButtonRegisterClick}></Link>
          </View>
        }
      </ScrollView>
    </>
  );
};

export default LoginScreen;
