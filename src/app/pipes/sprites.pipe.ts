import { Pipe, PipeTransform } from '@angular/core';
import { Sprites } from '../interfaces/pokemonResponse.interface';

@Pipe({
  name: 'sprites'
})
export class SpritesPipe implements PipeTransform {

  transform(sprite: Sprites, spriteType: string): string {
    console.log(spriteType)
    return sprite[spriteType] || 'vacío'
  }

}
