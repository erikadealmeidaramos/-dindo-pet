import axios from 'axios';
import { apiUrl } from '../../utils/constants';
import { Specie, SpecieModel } from '../../model/Specie';

export const specieListService = async (token: string | null) => {
  return new Promise<Specie[]>((resolve, reject) => {
    axios
      .get(`${apiUrl}specie/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          const speciesList = response.data.map((specie: any) => new SpecieModel(specie));
          resolve(speciesList);
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
