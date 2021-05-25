import { Pipe, PipeTransform } from '@angular/core';
import { FlavorTextEntry } from '../interfaces/pokemonSpeciesResponse.interface';

@Pipe({
  name: 'pokedexEntry'
})
export class PokedexEntryPipe implements PipeTransform {

  transform(entries: FlavorTextEntry[], version?: string): unknown {
    let entrie_found: FlavorTextEntry = entries.find( entrie => entrie.version.name === version );
    entrie_found = entrie_found ? entrie_found : entries.pop()
    return entrie_found.flavor_text;
  }

}
