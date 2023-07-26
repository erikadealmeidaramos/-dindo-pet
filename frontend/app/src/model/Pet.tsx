import {Breed} from './Breed';
import {User} from './User';
import {TakePictureResponse} from 'react-native-camera';

export interface Pet {
  id: number;
  name: string;
  image: string;
  cameraPicture: TakePictureResponse | undefined;
  imagePath: string | undefined;
  status: boolean | null;
  cash: number;
  user: User;
  breed: Breed;
}

export class PetModel {
  private pet: Pet;

  constructor(pet: Pet) {
    this.pet = pet;
  }

  get id(): number {
    return this.pet.id;
  }

  set id(value: number) {
    this.pet.id = value;
  }

  get name(): string {
    return this.pet.name;
  }

  set name(value: string) {
    this.pet.name = value;
  }

  get image(): string {
    return this.pet.image;
  }

  set image(value: string) {
    this.pet.image = value;
  }

  get status(): boolean | null {
    return this.pet.status;
  }

  set status(value: boolean) {
    this.pet.status = value;
  }

  get cash(): number {
    return this.pet.cash;
  }

  set cash(value: number) {
    this.pet.cash = value;
  }

  get user(): User {
    return this.pet.user;
  }

  set user(value: User) {
    this.pet.user = value;
  }

  get breed(): Breed {
    return this.pet.breed;
  }

  set breed(value: Breed) {
    this.pet.breed = value;
  }

  get cameraPicture() {
    return this.pet.cameraPicture;
  }

  set cameraPicture(value: TakePictureResponse | undefined) {
    this.pet.cameraPicture = value;
  }

  get imagePath() {
    return this.pet.imagePath;
  }

  set imagePath(value: string | undefined) {
    this.pet.imagePath = value;
  }
}
