import { Pipe, PipeTransform } from '@angular/core';
import { Genus } from '../interfaces/pokemonSpeciesResponse.interface';

@Pipe({
  name: 'genera'
})
export class GeneraPipe implements PipeTransform {

  transform(genera: Genus[]): unknown {
    let pokemon_genera = genera.find( item => item.language.name === 'en' );
    return pokemon_genera.genus;
  }

}
