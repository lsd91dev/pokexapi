import { Component, Input } from '@angular/core';
import { PokemonResponse } from 'src/app/interfaces/pokemonResponse.interface';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent {

  @Input() pokemon: PokemonResponse
  constructor() { }

}
