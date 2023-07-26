import axios from 'axios';
import { apiUrl } from '../../utils/constants';
import { Pet, PetModel } from '../../model/Pet';

export const petListService = async (token: string | null) => {
  return new Promise<Pet[]>((resolve, reject) => {
    axios
      .get(`${apiUrl}pet/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          const petsList = response.data.map((pet: any) => new PetModel(pet));
          resolve(petsList);
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

export const petDeleteService = async (token: string | null, pet: Pet) => {
  return new Promise<Pet | null>((resolve, reject) => {
    axios
      .delete(`${apiUrl}pet/${pet.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          const pet = new PetModel(response.data);
          resolve(pet);
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

export const registerPetService = async (token: string | null, pet: Pet) => {
  return new Promise<void>((resolve, reject) => {
    const formData = new FormData();

    if (pet.cameraPicture?.uri != undefined) {
      formData.append('file', {
        uri: pet.cameraPicture?.uri,
        type: 'image/jpeg',
        name: pet.image,
      });
    }

    formData.append(
      'pet',
      JSON.stringify({
        name: pet.name,
        image: pet.image,
        status: pet.status,
        cash: pet.cash,
        user: { id: pet.user.id },
        breed: { id: pet.breed.id },
      }),
    );

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };

    axios
      .post(`${apiUrl}pet/`, formData, { headers })
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
        console.log(error.response.data);
        reject(new Error(error.response.data.message));
      });
  });
};

export const updatePetService = async (token: string | null, pet: Pet) => {
  return new Promise<void>((resolve, reject) => {
    const formData = new FormData();

    if (pet.cameraPicture?.uri != undefined) {
      formData.append('file', {
        uri: pet.cameraPicture?.uri,
        type: 'image/jpeg',
        name: pet.image,
      });
    }

    formData.append(
      'pet',
      JSON.stringify({
        id: pet.id,
        name: pet.name,
        image: pet.image,
        status: pet.status,
        cash: pet.cash,
        breed: { id: pet.breed.id },
      }),
    );

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };

    axios
      .put(`${apiUrl}pet/`, formData, { headers })
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
        console.log(error.response.data);
        reject(new Error(error.response.data.message));
      });
  });
};
