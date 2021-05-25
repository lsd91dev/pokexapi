import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { PokemonResponse } from 'src/app/interfaces/pokemonResponse.interface';
import { PokemonSpeciesResponse } from 'src/app/interfaces/pokemonSpeciesResponse.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit, OnDestroy {

  _destroy$: Subject<boolean> = new Subject();
  id: string;
  pokemon: PokemonResponse;
  pokemonSpecie: PokemonSpeciesResponse;

  constructor( private _activatedRoute: ActivatedRoute, private _pokemonService : PokemonService ) { }

  ngOnInit(): void {
      this._activatedRoute.params.subscribe( param => this.id = param['id']);
      this.getPokemon();
  }

  getPokemon(){
    this._pokemonService.getAllPokemonData(this.id)
    .pipe(
      takeUntil(this._destroy$)
    )
    .subscribe(([pokemon,pokemonSpecie]) => { 
      this.pokemon = pokemon;
      this.pokemonSpecie = pokemonSpecie;
      console.log(this.pokemonSpecie);
    });

  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

}
