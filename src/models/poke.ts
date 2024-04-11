export interface IPokeApi {
  count: number;
  next: string;
  results: Array<Pokemon>;
}
export class PokeApi implements IPokeApi {
  count: number = 0;
  next: string = "";
  results: Array<Pokemon> = [];
}
export class Pokemon {
  name?: string;
  url?: string;
}

export class PokemonDetail {
  name: string = "";
  order: number = 0;
  weight: number = 0;
}
