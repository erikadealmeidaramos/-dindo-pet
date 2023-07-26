import {Breed} from './Breed';

export interface Specie {
  id: number;
  description: string;
  breeds: Breed[];
}

export class SpecieModel {
  private specie: Specie;

  constructor(specie: Specie) {
    this.specie = specie;
  }

  get id(): number {
    return this.specie.id;
  }

  set id(value: number) {
    this.specie.id = value;
  }

  get description(): string {
    return this.specie.description;
  }

  set description(value: string) {
    this.specie.description = value;
  }

  get breeds(): Breed[] {
    return this.specie.breeds;
  }

  set breeds(value: Breed[]) {
    this.specie.breeds = value;
  }
}
