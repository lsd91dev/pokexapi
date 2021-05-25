import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  error: HttpErrorResponse;
  query: string;
  loading: boolean;
  constructor(private _router: Router) {  }

  showPokemonResponse( {pokemon, error, query}){
    if(error){
      this.query = query;
      this.error = error;
      this.loading = false;
      return;
    }
    const id = pokemon.id;
    this.loading = false;
    this._router.navigateByUrl(`pokemon/${ id }`);
  } 

  showLoading( isLoading ){
    this.loading = isLoading;
  }
}
