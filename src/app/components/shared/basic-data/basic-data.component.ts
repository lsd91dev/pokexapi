import { Component, Input } from '@angular/core';
import { PokemonResponse } from 'src/app/interfaces/pokemonResponse.interface';
import { Color, Genus } from 'src/app/interfaces/pokemonSpeciesResponse.interface';

@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.css']
})
export class BasicDataComponent {


  @Input() pokemon: PokemonResponse;
  @Input() pokemon_habitat: Color;
  @Input() pokemon_genera: Genus[];
  
  constructor() { }

}
