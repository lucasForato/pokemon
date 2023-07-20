import { AppService } from '../app.service';
import { PokeApiAbility } from '../infrastructure/types/PokeApiAbility';
import { faker } from '@faker-js/faker';

describe('App Service Tests', () => {
  let appService: AppService;

  beforeAll(async () => {
    appService = new AppService();
  });

  it('should return a list of names', async () => {
    const names = [faker.lorem.word(), faker.lorem.word()];

    const data: PokeApiAbility[] = [
      {
        ability: {
          name: names[0],
          url: faker.internet.url(),
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: names[1],
          url: faker.internet.url(),
        },
        is_hidden: false,
        slot: 1,
      },
    ];
    const response = await appService.filterAbilityNameFromPokemonData(data);
    expect(response).toEqual(names);
  });
});
