import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { PokemonComponent } from './pages/pokemon/pokemon.component'

const ROUTES: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(ROUTES)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
