export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
  pix: string;
}

export interface UserRegister {
  id: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
  pix: string;
  acceptLgpd: boolean;
  acceptContract: boolean;
}

export class UserModel {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  get id() {
    return this.user.id;
  }

  set id(value: number) {
    this.user.id = value;
  }

  get name() {
    return this.user.name;
  }

  set name(value: string) {
    this.user.name = value;
  }

  get email() {
    return this.user.email;
  }

  set email(value: string) {
    this.user.email = value;
  }

  get password() {
    return this.user.password;
  }

  set password(value: string) {
    this.user.password = value;
  }

  get cpf() {
    return this.user.cpf;
  }

  set cpf(value: string) {
    this.user.cpf = value;
  }

  get pix() {
    return this.user.pix;
  }

  set pix(value: string) {
    this.user.pix = value;
  }
}
