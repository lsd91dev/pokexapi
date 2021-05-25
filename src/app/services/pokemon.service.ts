import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, forkJoin } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { PokemonResponse } from '../interfaces/pokemonResponse.interface';
import { PokemonSpeciesResponse } from '../interfaces/pokemonSpeciesResponse.interface';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private API_URL: string;
  constructor( private _http:HttpClient ) { 
    this.API_URL = environment.API_URL;
  }

  getPokemon(query: string): Observable<PokemonResponse>{
    const query_lowerCase = query.toLowerCase();
    return this._http.get<PokemonResponse>(`${ this.API_URL }/pokemon/${ query_lowerCase }`)
    .pipe( 
      map((pokemon) => pokemon),
      delay( 500 ));
  }

  getAllPokemonData( id: string ): Observable<any[]> {
      const pokemonResponse: Observable<PokemonResponse> = this._http.get<PokemonResponse>( `${ this.API_URL }/pokemon/${ id }`); 
      const pokemonSpeciesResponse: Observable<PokemonSpeciesResponse> = this._http.get<PokemonSpeciesResponse>( `${ this.API_URL}/pokemon-species/${ id }`);

      return forkJoin([ pokemonResponse, pokemonSpeciesResponse ])
      .pipe(
        map(([pokemon, pokemonSpecies]) => {
          pokemonSpecies.genera = pokemonSpecies.genera.filter( (item) => item.language.name === 'en' );
          pokemonSpecies.flavor_text_entries = pokemonSpecies.flavor_text_entries.filter( (item) => item.language.name === 'en' );
          return [ pokemon, pokemonSpecies ]
        })
      )
  }

}
