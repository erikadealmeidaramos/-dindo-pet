import {useEffect, useState} from 'react';
import {Post} from 'src/model/Post';
import {useSelector} from 'react-redux';
import {RootState} from 'src/data/store';
import {listPostService} from '../../data/service/PostService';
import {Pet} from 'src/model/Pet';
import {petProfile} from '../../utils/routes';
import {useIsFocused} from '@react-navigation/native';

interface HomeViewModelProps {
  navigation: any;
}

const HomeViewModel = ({navigation}: HomeViewModelProps) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const isFocused = useIsFocused();

  const [filterSearch, setFilterSearch] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isFocused) {
      updatePostList();
    }
  }, [isFocused]);

  const updatePostList = async () => {
    setLoading(true);
    try {
      const posts = await listPostService(token, false, 0);
      setPosts(posts);
    } catch (error: any) {
      console.log('Erro ao obter a lista de posts:', error.message);
    }
    setLoading(false);
  };

  const filterPosts = (filterText: string) => {
    setLoading(true);
    const filteredByName = posts.filter(post =>
      post.pet.name.toLowerCase().includes(filterText.toLowerCase()),
    );
    const filteredByBreed = posts.filter(post =>
      post.pet.breed.description
        .toLowerCase()
        .includes(filterText.toLowerCase()),
    );
    const filteredBySpecie = posts.filter(post =>
      post.pet.breed.specie.description
        .toLowerCase()
        .includes(filterText.toLowerCase()),
    );
    const filtered: Post[] = [];

    filteredByName.forEach(post => {
      if (!filtered.includes(post)) {
        filtered.push(post);
      }
    });

    filteredByBreed.forEach(post => {
      if (!filtered.includes(post)) {
        filtered.push(post);
      }
    });

    filteredBySpecie.forEach(post => {
      if (!filtered.includes(post)) {
        filtered.push(post);
      }
    });

    setFilteredPosts(filtered);
    setLoading(false);
  };

  const handlePetProfileRedirect = (pet: Pet) => {
    navigation.navigate(petProfile, {pet: pet});
  };

  useEffect(() => {
    filterPosts(filterSearch);
  }, [filterSearch, posts]);

  return {
    filterSearch,
    setFilterSearch,
    filteredPosts,
    handlePetProfileRedirect,
    updatePostList,
    loading,
  };
};

export default HomeViewModel;
