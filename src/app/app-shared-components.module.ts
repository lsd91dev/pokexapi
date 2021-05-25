import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AppPipesModule } from './app-pipes.module';

import { JumbotronComponent } from './components/shared/jumbotron/jumbotron.component';
import { SearchComponent } from './components/shared/search/search.component';
import { BasicDataComponent } from './components/shared/basic-data/basic-data.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { StatsCardComponent } from './components/shared/stats-card/stats-card.component';

@NgModule({
  declarations: [ JumbotronComponent, SearchComponent, BasicDataComponent, NavbarComponent, ErrorComponent, LoadingComponent, StatsCardComponent ],
  imports: [ CommonModule, RouterModule, AppPipesModule ],
  exports: [ JumbotronComponent, SearchComponent, BasicDataComponent, NavbarComponent, ErrorComponent, LoadingComponent, StatsCardComponent ]
})
export class AppSharedComponentsModule { }
