import {useState, useEffect} from 'react';
import {authentication, recoverPassword} from '../../data/service/AuthService';
import {validateEmail} from '../../utils/validations';
import {Dispatch} from 'redux';
import {Alert} from 'react-native';
import {mainTab, userRegister} from '../../utils/routes';

interface LoginViewModelProps {
  navigation: any;
}

const showAlert = (title: string, message: string) => {
  Alert.alert(title, message, [{text: 'OK', onPress: () => {}}], {
    cancelable: true,
  });
};

const LoginViewModel = (
  {navigation}: LoginViewModelProps,
  dispatch: Dispatch,
) => {
  const [email, setEmail] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    verifyFields();
  }, [email, password]);

  useEffect(() => {
    setEmailInvalid(false);
    setPasswordInvalid(false);
    setIsValid(false);
    setLoading(false);
  }, []);

  const verifyFields = () => {
    setEmailInvalid(email == '' || !validateEmail(email));
    setPasswordInvalid(password == '');

    if (email == '' || !validateEmail(email) || password == '') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleLogin = async () => {
    setLoading(true);

    if (!isValid) {
      setLoading(false);
      verifyFields();
      return;
    }

    try {
      await authentication(email, password, dispatch);
      navigation.navigate(mainTab);
    } catch (error: any) {
      console.log('Erro ao realizar login:', error.message);
      showAlert('Erro ao realizar login:', error.message);
    }
    setLoading(false);
  };

  const handleRecoverPassword = async () => {
    setLoading(true);
    if (!validateEmail(email)) {
      showAlert('Alerta', 'Preencha com um e-mail válido');
      return;
    }

    try {
      await recoverPassword(email);
      setModalVisible(false);

      showAlert('Sucesso', 'E-mail enviado com sucesso');
    } catch (error: any) {
      console.log('Erro ao recuperar senha:', error.message);
      showAlert('Erro ao recuperar senha:', error.message);
      setModalVisible(false);
    }
    setLoading(false);
  };

  const handleButtonRegisterClick = () => {
    navigation.navigate(userRegister);
  };

  return {
    email,
    setEmail,
    emailInvalid,
    setEmailInvalid,
    password,
    setPassword,
    passwordInvalid,
    setPasswordInvalid,
    handleLogin,
    handleButtonRegisterClick,
    isModalVisible,
    setModalVisible,
    handleRecoverPassword,
    loading,
  };
};

export default LoginViewModel;
