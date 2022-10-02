import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(private readonly pokemonService: PokemonService) {}

  async populateSeed(pokemons: CreatePokemonDto[]) {
    try {
      await this.pokemonService.removeAll();
      await this.pokemonService.fillPokemonWithSeedData(pokemons);
      return 'Seed executed';
    } catch (error) {
      return error.response;
    }
  }
}
