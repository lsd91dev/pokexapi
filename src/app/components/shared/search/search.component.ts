import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

import { Subject } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';

import { PokemonResponse } from 'src/app/interfaces/pokemonResponse.interface';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnDestroy{

  _destroy$: Subject<boolean> = new Subject();
  @Output() pokemonResponse : EventEmitter<{pokemon?: PokemonResponse, error?:HttpErrorResponse, query?: string}>
  @Output() loadingResponse: EventEmitter<boolean>

  constructor(private _pokemonService: PokemonService) { this.pokemonResponse = new EventEmitter(); this.loadingResponse = new EventEmitter(); }

  searchPokemon(inputSearch: HTMLInputElement) {
    const query = inputSearch.value;

    this.loadingResponse.emit( true );
    inputSearch.blur();
    if( !query ){ return }
    this._pokemonService.getPokemon(query).pipe(
      takeUntil(this._destroy$))
    .subscribe( 
      (pokemon) => {
        this.pokemonResponse.emit( { pokemon } );
      },
      (error: HttpErrorResponse) => {
        inputSearch.focus();
         this.pokemonResponse.emit( {error, query} )
      })
      
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

}
