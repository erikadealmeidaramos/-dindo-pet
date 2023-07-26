import { Specie } from "./Specie";

export interface Breed {
  id: number;
  specie: Specie
  description: string;
}

export class BreedModel {
  private breed: Breed;

  constructor(breed: Breed) {
    this.breed = breed;
  }

  get id(): number {
    return this.breed.id;
  }

  set id(value: number) {
    this.breed.id = value;
  }

  get description(): string {
    return this.breed.description;
  }

  set description(value: string) {
    this.breed.description = value;
  }

  get specie(): Specie {
    return this.breed.specie;
  }

  set specie(value: Specie) {
    this.breed.specie = value;
  }
}
