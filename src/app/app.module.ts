import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


import { AppPagesModule } from './app-pages.module';
import { AppSharedComponentsModule } from './app-shared-components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppPipesModule } from './app-pipes.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AppPagesModule,
    AppSharedComponentsModule,
    AppPipesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
