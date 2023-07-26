import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, View, FlatList} from 'react-native';
import style from '../styles/HomeScreenStyle';
import stylesGlobal from '../styles/GlobalStyle';
import {IconTextField} from '../components/IconTextField';
import HomeViewModel from '../viewModel/HomeViewModel';
import {PostItem} from '../components/PostItem';
import {Post} from 'src/model/Post';
import {Loading} from '../components/Loading';

const HomeScreen = () => {
  const navigation = useNavigation();

  const viewModelProps = {navigation};
  const viewModel = HomeViewModel(viewModelProps);

  const renderItem = ({item}: {item: Post}) => (
    <PostItem
      post={item}
      handlePetProfileRedirect={viewModel.handlePetProfileRedirect}
    />
  );

  return (
    <ScrollView style={stylesGlobal.ScrollContainer}>
      {viewModel.loading ? (
        <Loading />
      ) : (
        <View style={stylesGlobal.BodyContainer}>
          <IconTextField
            placeholder="Busca por pet"
            viewModelFunction={viewModel.setFilterSearch}
            viewModelValue={viewModel.filterSearch}
            autoCapitalize="none"
            autoCorrect={false}
            iconName="magnify"
          />
          <FlatList
            style={style.list}
            data={viewModel.filteredPosts}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
