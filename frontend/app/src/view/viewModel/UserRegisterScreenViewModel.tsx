import {useSelector} from 'react-redux';
import {RootState} from 'src/data/store';
import {boolean, object, string} from 'yup';
import {cpf} from 'cpf-cnpj-validator';
import {User, UserRegister} from '../../model/User';
import {useState} from 'react';
import {registerUserProfileService} from '../../data/service/UserService';
import {useFormik} from 'formik';
import {showAlert} from '../../utils/showAlerts';
import {Dispatch} from 'redux';

interface UserRegisterScreenViewModelProps {
  navigation: any;
}

const UserRegisterScreenViewModel = (
  {navigation}: UserRegisterScreenViewModelProps,
  dispatch: Dispatch,
) => {
  const token = useSelector((state: RootState) => state.auth.token);

  const [userModel, setUserModel] = useState<UserRegister>({
    id: 0,
    name: '',
    email: '',
    password: '',
    cpf: '',
    pix: '',
    acceptLgpd: false,
    acceptContract: false,
  });

  const validationSchema = object().shape({
    name: string().required('Nome obrigatório'),
    email: string().email('Email inválido').required('Email obrigatório'),
    cpf: string()
      .test('cpf', 'CPF inválido', value => cpf.isValid(value ?? ''))
      .required('CPF obrigatório'),
    password: string()
      .min(6, 'Senha deve ter no mínimo 6 caracteres')
      .required('Senha obrigatória'),
    pix: string().required('Chave-pix obrigatória'),
    acceptLgpd: boolean().oneOf([true], 'Aceite dos termos Lgpd obrigatório'),
    acceptContract: boolean().oneOf(
      [true],
      'Aceite dos termos de contrato obrigatório',
    ),
  });

  async function handleSubmit(values: any) {
    try {
      const user: User = {
        id: values.id,
        name: values.name,
        email: values.email,
        password: values.password,
        cpf: values.cpf,
        pix: values.pix,
      };

      await registerUserProfileService(token, user);
      showAlert('Sucesso', 'Perfil inserido com sucesso');
      navigation.goBack();
    } catch (error: any) {
      showAlert('Erro ao inserir o perfil do usuário:', error.message);
    }
  }

  const formik = useFormik({
    initialValues: userModel,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: handleSubmit,
  });

  return {
    formik,
  };
};
export default UserRegisterScreenViewModel;
