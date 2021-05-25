import { Pipe, PipeTransform } from '@angular/core';
import { Sprites } from '../interfaces/pokemonResponse.interface';

@Pipe({
  name: 'artbook'
})
export class ArtbookPipe implements PipeTransform {

  transform(sprite: Sprites, ): string {
    return sprite.other['official-artwork'].front_default;
  }

}
