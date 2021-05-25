import { Pipe, PipeTransform } from '@angular/core';
import { Stat } from '../interfaces/pokemonResponse.interface';

@Pipe({
  name: 'stats'
})
export class StatsPipe implements PipeTransform {

  transform(stats: Stat): string {
    return `${ stats.stat.name} : ${ stats.base_stat }`
  }

}
