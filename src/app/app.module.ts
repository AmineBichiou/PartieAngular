import { UpdateFilmComponent } from './update-film/update-film.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { FormsModule } from '@angular/forms';
import { RechercheGenreComponent } from './recherche-genre/recherche-genre.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { ListeGenreComponent } from './liste-genre/liste-genre.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    AddFilmComponent,
    UpdateFilmComponent,
    RechercheGenreComponent,
    ListeCategoriesComponent,
    ListeGenreComponent,
    UpdateGenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
