import {TakePictureResponse} from 'react-native-camera';
import {Pet} from './Pet';

export interface Post {
  id: number;
  picturePost: string;
  cameraPicture: TakePictureResponse | undefined;
  postDescription: string;
  paymentvoucher: boolean;
  pet: Pet;
}

export class PostModel {
  private post: Post;

  constructor(post: Post) {
    this.post = post;
  }

  get id() {
    return this.post.id;
  }

  set id(value: number) {
    this.post.id = value;
  }

  get picturePost() {
    return this.post.picturePost;
  }

  set picturePost(value: string) {
    this.post.picturePost = value;
  }

  get postDescription() {
    return this.post.postDescription;
  }

  set postDescription(value: string) {
    this.post.postDescription = value;
  }

  get paymentvoucher() {
    return this.post.paymentvoucher;
  }

  set paymentvoucher(value: boolean) {
    this.post.paymentvoucher = value;
  }

  get pet() {
    return this.post.pet;
  }

  set pet(value: Pet) {
    this.post.pet = value;
  }

  get cameraPicture() {
    return this.post.cameraPicture;
  }

  set cameraPicture(value: TakePictureResponse | undefined) {
    this.post.cameraPicture = value;
  }
}
