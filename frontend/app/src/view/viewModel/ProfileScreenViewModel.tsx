import {useSelector} from 'react-redux';
import {RootState} from 'src/data/store';
import {object, string} from 'yup';
import {cpf} from 'cpf-cnpj-validator';
import {User} from '../../model/User';
import {useEffect, useState} from 'react';
import {
  userProfileService,
  updateUserProfileService,
  userDeleteService,
} from '../../data/service/UserService';
import {useFormik} from 'formik';
import {showAlert, showConfirmAlert} from '../../utils/showAlerts';
import {login} from '../../utils/routes';
import {Dispatch} from 'redux';

interface ProfileScreenViewModelProps {
  navigation: any;
}

const ProfileScreenViewModel = (
  {navigation}: ProfileScreenViewModelProps,
  dispatch: Dispatch,
) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [userModel, setUserModel] = useState<User>({
    id: 0,
    name: '',
    email: '',
    password: '',
    cpf: '',
    pix: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userProfileService(token).then(data => {
      setUserModel({
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        cpf: data.cpf,
        pix: data.pix,
      });
      setLoading(false);
    });
  }, []);

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
  });

  async function handleSubmit(values: User) {
    try {
      const updatedUser = await updateUserProfileService(token, values);
      setUserModel({
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        password: updatedUser.password,
        cpf: updatedUser.cpf,
        pix: updatedUser.pix,
      });
      showAlert('Sucesso', 'Perfil atualizado com sucesso');
    } catch (error: any) {
      showAlert('Erro ao atualizar perfil do usuário:', error.message);
    }
  }

  function deleteProfile() {
    try {
      showConfirmAlert(
        'Tem certeza?',
        `Você irá deletar o seu perfil permanentemente`,
        () => {
          setLoading(true);
          userDeleteService(token, userModel, dispatch).then(deletedUser => {
            if (deletedUser != null) {
              showAlert('Sucesso', `Sucesso deletar ao deletar sua conta`);
              navigation.navigate(login);
            } else {
              showAlert('Erro', 'Conta não encontrada');
            }
            setLoading(false);
          });
        },
      );
    } catch (error: any) {
      showAlert('Erro ao deletar o perfil do usuário:', error.message);
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
    deleteProfile,
    loading,
  };
};
export default ProfileScreenViewModel;
