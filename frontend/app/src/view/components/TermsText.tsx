import React from 'react';
import {Text} from 'react-native';
//ícones: https://pictogrammers.com/library/mdi/
import styles from '../styles/TermsTextStyle';
import Fonts from '../styles/Fonts';
import {ScrollView} from 'react-native-gesture-handler';

export function TermsText(props: any) {
  const {DataProtect} = props;

  if (!DataProtect) {
    return (
      <>
        <ScrollView>
          <Text style={[Fonts.Header3, styles.title]}>
            Contrato de Termos de Uso
          </Text>
          <Text style={[Fonts.Label, styles.text]}>
            Este contrato ("Contrato") é um acordo entre você ("Usuário" ou
            "você") e a empresa Dindo&Pets ("Dindo&Pets" ou "nós"), que regula o
            uso do aplicativo móvel Dindo&Pets ("Aplicativo") e seus serviços
            relacionados.
          </Text>
          <Text style={[Fonts.Label, styles.text]}>
            Ao fazer o download, instalar ou usar o Aplicativo, você concorda em
            cumprir estes Termos de Uso e as políticas de privacidade e
            segurança da Dindo&Pets, incluindo quaisquer atualizações ou
            alterações. Se você não concorda com estes Termos de Uso, não use o
            Aplicativo.
          </Text>
          <Text style={[Fonts.Header2, styles.title]}>
            1. Direitos de Propriedade Intelectual
          </Text>
          <Text style={[Fonts.Label, styles.text]}>
            Todos os direitos de propriedade intelectual relacionados ao
            Aplicativo e seus conteúdos são de propriedade exclusiva da
            Dindo&Pets ou seus licenciadores. Você não tem permissão para
            copiar, distribuir, modificar, reproduzir ou criar trabalhos
            derivados com base no Aplicativo ou seus conteúdos sem o
            consentimento prévio por escrito da Dindo&Pets.
          </Text>

          <Text style={[Fonts.Header2, styles.title]}>
            2. Uso do Aplicativo
          </Text>

          <Text style={[Fonts.Label, styles.text]}>
            O Aplicativo é destinado a ajudar os proprietários de animais de
            estimação a encontrar serviços e produtos relacionados a seus
            animais de estimação. Você concorda em usar o Aplicativo apenas para
            fins legítimos e de acordo com estes Termos de Uso.
          </Text>

          <Text style={[Fonts.Header3, styles.title]}>
            3. Informações do Usuário
          </Text>

          <Text style={[Fonts.Label, styles.text]}>
            Você é responsável por manter as informações da sua conta
            atualizadas e precisas. Você concorda em não fornecer informações
            falsas, enganosas ou imprecisas ao criar uma conta no Aplicativo.
          </Text>

          <Text style={[Fonts.Header3, styles.title]}>
            4. Responsabilidade do Usuário
          </Text>

          <Text style={[Fonts.Label, styles.text]}>
            Você é o único responsável por suas ações ao usar o Aplicativo. Você
            concorda em não usar o Aplicativo para fins ilegais ou prejudiciais,
            incluindo, sem limitação, fraudes, golpes, spam, assédio, ameaças,
            difamação ou violação de direitos de propriedade intelectual.
          </Text>

          <Text style={[Fonts.Header2, styles.title]}>5. Privacidade</Text>

          <Text style={[Fonts.Label, styles.text]}>
            A Dindo&Pets se preocupa com a privacidade de seus usuários e
            coleta, usa e divulga informações pessoais de acordo com sua
            Política de Privacidade. Ao usar o Aplicativo, você concorda com a
            coleta, uso e divulgação de suas informações pessoais de acordo com
            a Política de Privacidade da Dindo&Pets.
          </Text>

          <Text style={[Fonts.Header2, styles.title]}>
            6. Disposições Gerais
          </Text>

          <Text style={[Fonts.Label, styles.text]}>
            Estes Termos de Uso constituem o acordo completo entre você e a
            Dindo&Pets em relação ao uso do Aplicativo e substituem todos os
            acordos e entendimentos anteriores ou contemporâneos, escritos ou
            orais. Estes Termos de Uso são regidos pelas leis do Brasil.
          </Text>

          <Text style={[Fonts.Header2, styles.title]}>
            7. Alterações aos Termos de Uso
          </Text>

          <Text style={[Fonts.Label, styles.text]}>
            A Dindo&Pets reserva-se o direito de modificar estes Termos de Uso a
            qualquer momento, sem aviso prévio. As alterações serão efetivas
            assim que forem publicadas no Aplicativo. Se você continuar a usar o
            Aplicativo após a publicação das alterações, você está concordando
            com os Termos de Uso atualizados. É sua responsabilidade revisar
            periodicamente estes Termos de Uso para estar ciente de quaisquer
            alterações.
          </Text>

          <Text style={[Fonts.Label, styles.text]}>
            Ao usar o Aplicativo, você concorda com este termos de uso.
          </Text>
        </ScrollView>
      </>
    );
  } else {
    return (
      <>
        <ScrollView>
          <Text style={[Fonts.Header3, styles.title]}>
            Contrato de Proteção de Dados
          </Text>
          <Text style={[Fonts.Label, styles.text]}>
            Este contrato ("Contrato") é um acordo entre você ("Usuário" ou
            "você") e a empresa Dindo&Pets ("Dindo&Pets" ou "nós"), que regula a
            coleta, uso e divulgação de informações pessoais fornecidas pelo
            Usuário em relação ao uso do aplicativo móvel Dindo&Pets
            ("Aplicativo") e seus serviços relacionados.
          </Text>

          <Text style={[Fonts.Header2, styles.title]}>
            1. Coleta de Informações Pessoais
          </Text>
          <Text style={[Fonts.Label, styles.text]}>
            A Dindo&Pets pode coletar informações pessoais sobre você,
            incluindo, mas não se limitando a, nome, endereço de e-mail, número
            de telefone e informações sobre seus animais de estimação, quando
            você se registra no Aplicativo ou usa seus serviços.
          </Text>

          <Text style={[Fonts.Header2, styles.title]}>
            2. Uso de Informações Pessoais
          </Text>
          <Text style={[Fonts.Label, styles.text]}>
            A Dindo&Pets pode usar suas informações pessoais para fornecer e
            melhorar seus serviços, personalizar sua experiência no Aplicativo e
            entrar em contato com você sobre serviços relevantes para seus
            animais de estimação. A Dindo&Pets pode compartilhar suas
            informações pessoais com terceiros prestadores de serviços que
            ajudam a fornecer seus serviços, sujeitos a obrigações de
            confidencialidade e proteção de dados.
          </Text>

          <Text style={[Fonts.Header2, styles.title]}>
            3. Divulgação de Informações Pessoais
          </Text>
          <Text style={[Fonts.Label, styles.text]}>
            A Dindo&Pets não venderá suas informações pessoais a terceiros. A
            Dindo&Pets pode divulgar suas informações pessoais se for necessário
            para cumprir uma ordem judicial ou solicitação legal, ou se
            acreditarmos que tal divulgação é necessária ou adequada para
            proteger os direitos, propriedade ou segurança da Dindo&Pets, seus
            usuários ou outras partes.
          </Text>
          <Text style={[Fonts.Header2, styles.title]}>
            4. Segurança de Informações Pessoais
          </Text>
          <Text style={[Fonts.Label, styles.text]}>
            A Dindo&Pets toma medidas de segurança razoáveis para proteger suas
            informações pessoais contra perda, uso indevido, acesso não
            autorizado, divulgação, alteração ou destruição. No entanto, nenhuma
            transmissão de dados pela Internet ou método de armazenamento
            eletrônico é completamente segura. Portanto, a Dindo&Pets não pode
            garantir a segurança de suas informações pessoais.
          </Text>

          <Text style={[Fonts.Header2, styles.title]}>
            5. Direitos dos Titulares dos Dados
          </Text>
          <Text style={[Fonts.Label, styles.text]}>
            Você tem o direito de acessar, retificar ou excluir suas informações
            pessoais a qualquer momento. Você também tem o direito de restringir
            ou opor-se ao processamento de suas informações pessoais e o direito
            à portabilidade de seus dados pessoais. Para exercer seus direitos,
            entre em contato com a Dindo&Pets pelo e-mail disponível no
            Aplicativo.
          </Text>

          <Text style={[Fonts.Header2, styles.title]}>
            6. Alterações a este Contrato
          </Text>
          <Text style={[Fonts.Label, styles.text]}>
            A Dindo&Pets reserva-se o direito de modificar este Contrato a
            qualquer momento, sem aviso prévio. As alterações serão efetivas
            assim que forem publicadas no Aplicativo. Se você continuar a usar o
            Aplicativo após a publicação das alterações, você está concordando
            com o Contrato atualizado. É sua responsabilidade revisar
            periodicamente este Contrato para estar ciente de quaisquer
            alterações.
          </Text>

          <Text style={[Fonts.Header2, styles.title]}>
            7. Disposições Gerais
          </Text>
          <Text style={[Fonts.Label, styles.text]}>
            Este Contrato constitui o acordo completo entre você e a Dindo&Pets
            em relação à proteção de dados e substitui todos os acordos e
            entendimentos anteriores ou contemporâneos, escritos ou orais. Este
            Contrato é regido pelas leis do Brasil.
          </Text>
          <Text style={[Fonts.Label, styles.text]}>
            Ao usar o Aplicativo, você concorda com os termos de Proteção de
            Dados.
          </Text>
        </ScrollView>
      </>
    );
  }
}
