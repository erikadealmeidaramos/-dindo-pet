import axios from 'axios';
import {apiUrl} from '../../utils/constants';
import {Post, PostModel} from '../../model/Post';

export const createPostService = async (token: string | null, post: Post) => {
  return new Promise<void>((resolve, reject) => {
    if (post.cameraPicture != undefined) {
      const formData = new FormData();
      formData.append('file', {
        uri: post.cameraPicture.uri,
        type: 'image/jpeg',
        name: post.picturePost,
      });

      formData.append(
        'post',
        JSON.stringify({
          paymentvoucher: post.paymentvoucher,
          picturePost: post.picturePost,
          postDescription: post.postDescription,
          pet: {
            id: post.pet.id,
          },
        }),
      );

      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      };

      axios
        .post(`${apiUrl}post/register`, formData, {headers})
        .then(response => {
          if (response.status >= 200 && response.status <= 299) {
            resolve();
          } else {
            console.log(response);
            const message = response.data.message;
            reject(new Error(message));
          }
        })
        .catch(error => {
          console.log(error);
          console.log(error.response.data);
          reject(new Error(error.response.data.message));
        });
    } else {
      reject(new Error('Faça upload de alguma foto'));
    }
  });
};

export const listPostService = async (
  token: string | null,
  type: boolean,
  idPet: number,
) => {
  return new Promise<Post[]>((resolve, reject) => {
    axios
      .get(`${apiUrl}post/type/${type ? 1 : 0}/${idPet}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          const postList = response.data.map(
            (post: any) => new PostModel(post),
          );
          resolve(postList);
        } else {
          console.log(response);
          const message = response.data.message;
          reject(new Error(message));
        }
      })
      .catch(error => {
        console.log(error.response.data);
        reject(new Error(error.response.data.message));
      });
  });
};
