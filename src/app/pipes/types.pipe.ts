import { Pipe, PipeTransform } from '@angular/core';
import { Species } from '../interfaces/pokemonResponse.interface';

@Pipe({
  name: 'types'
})
export class TypesPipe implements PipeTransform {

  transform(type: Species): string { return type.name }

}
