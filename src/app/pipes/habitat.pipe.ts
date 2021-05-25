import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/pokemonSpeciesResponse.interface';

@Pipe({
  name: 'habitat'
})
export class HabitatPipe implements PipeTransform {

  transform(pokemon_habitat: Color): unknown {
    return pokemon_habitat.name;
  }

}
