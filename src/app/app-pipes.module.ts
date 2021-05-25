import { NgModule } from '@angular/core';

import { TypesPipe } from './pipes/types.pipe';
import { SpritesPipe } from './pipes/sprites.pipe';
import { GeneraPipe } from './pipes/genera.pipe';
import { ArtbookPipe } from './pipes/artbook.pipe';
import { StatsPipe } from './pipes/stats.pipe';
import { HabitatPipe } from './pipes/habitat.pipe';
import { PokedexEntryPipe } from './pipes/pokedex-entry.pipe';


@NgModule({
  declarations: [ TypesPipe, SpritesPipe, ArtbookPipe, StatsPipe, PokedexEntryPipe, HabitatPipe, GeneraPipe ],
  imports: [  ],
  exports: [ TypesPipe, SpritesPipe, ArtbookPipe, StatsPipe, PokedexEntryPipe, HabitatPipe, GeneraPipe ]
})
export class AppPipesModule { }
