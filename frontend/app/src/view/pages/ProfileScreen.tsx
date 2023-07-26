import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from '../styles/ProfileScreenStyle';
import stylesGlobal from '../styles/GlobalStyle';
import {useNavigation} from '@react-navigation/native';
import ProfileScreenViewModel from '../viewModel/ProfileScreenViewModel';
import {TextField} from '../components/TextField';
import {Button} from '../components/Button';
import MaskedInputField from '../components/MaskedInputField';
import {useDispatch} from 'react-redux';
import {Loading} from '../components/Loading';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const viewModelProps = {navigation};
  const viewModel = ProfileScreenViewModel(viewModelProps, dispatch);
  const {formik} = ProfileScreenViewModel(viewModelProps, dispatch);

  return (
    <ScrollView style={stylesGlobal.ScrollContainer}>
      <View style={stylesGlobal.BodyContainer}>
        <Text style={stylesGlobal.header1}>Perfil</Text>

        <Text style={[stylesGlobal.header2, styles.subtitle]}>
          Dados pessoais
        </Text>
        {viewModel.loading ? (
          <Loading />
        ) : (
          <>
            <TextField
              onChangeText={formik.handleChange('name')}
              onBlur={formik.handleBlur('name')}
              value={formik.values.name}
              placeholder="Digite seu nome"
              label="Nome"
              invalid={
                (formik.errors.name ?? []).length > 0 && formik.touched.name
              }
              invalidMessage={formik.errors.name}
            />
            <TextField
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              value={formik.values.email}
              placeholder="Digite seu e-mail"
              label="E-mail"
              invalid={
                (formik.errors.email ?? []).length > 0 && formik.touched.email
              }
              invalidMessage={formik.errors.email}
            />
            <MaskedInputField
              label="CPF"
              invalid={
                (formik.errors.cpf ?? []).length > 0 && formik.touched.cpf
              }
              invalidMessage={formik.errors.cpf}
              name={'cpf'}
              type={'cpf'}
              form={formik}
            />
            <TextField
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              value={formik.values.password}
              placeholder="Digite sua senha"
              label="Senha"
              secureTextEntry
              invalid={
                (formik.errors.password ?? [].length > 0) &&
                formik.touched.password
              }
              invalidMessage={formik.errors.password}
            />
            <TextField
              onChangeText={formik.handleChange('pix')}
              onBlur={formik.handleBlur('pix')}
              value={formik.values.pix}
              placeholder="Digite sua chave-pix"
              label="Chave-pix"
              invalid={
                (formik.errors.pix ?? []).length > 0 && formik.touched.pix
              }
              invalidMessage={formik.errors.pix}
            />

            <View style={styles.footer}>
              <Button
                handleClick={viewModel.deleteProfile}
                text="Apagar conta"
                secondary={true}
              />
              <Button
                handleClick={formik.handleSubmit}
                text="Salvar"
                showSpinner={formik.isSubmitting}
              />
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
