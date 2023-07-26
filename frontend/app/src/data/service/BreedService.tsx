import axios from 'axios';
import { apiUrl } from '../../utils/constants';
import { Breed, BreedModel } from '../../model/Breed';

export const breedListService = async (token: string | null) => {
  return new Promise<Breed[]>((resolve, reject) => {
    axios
      .get(`${apiUrl}breed/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          const breedsList = response.data.map((breed: any) => new BreedModel(breed));
          resolve(breedsList);
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
