import { Injectable } from '@nestjs/common';
import { PokeApiAbility } from './infrastructure/types/PokeApiAbility';

@Injectable()
export class AppService {
  async filterAbilityNameFromPokemonData(data: PokeApiAbility[]) {
    return data.map(({ ability }) => ability.name);
  }
}
