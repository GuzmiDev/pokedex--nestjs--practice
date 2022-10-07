import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Controller('seed')
export class SeedController {
  constructor(
    private readonly seedService: SeedService,
    private readonly http: AxiosAdapter,
  ) {}
  private readonly axios: AxiosInstance = axios;

  @Get()
  async executeSeed() {
    const pokeApi = [];
    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=386',
    );

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      pokeApi.push({ name, no });
    });
    return this.seedService.populateSeed(pokeApi);
  }
}
