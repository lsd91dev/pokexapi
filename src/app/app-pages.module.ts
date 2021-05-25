import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppSharedComponentsModule } from './app-shared-components.module';
import { AppPipesModule } from './app-pipes.module';

import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';



@NgModule({
  declarations: [ HomeComponent, PokemonComponent ],
  imports: [ CommonModule, RouterModule, AppPipesModule, AppSharedComponentsModule ],
  exports: [ HomeComponent, PokemonComponent ]
})
export class AppPagesModule { }
