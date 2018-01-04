import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MovieComponent } from './movies/movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesService } from './movies/movies.service';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { SearchMovieComponent } from './movies/search-movie/search-movie.component';
import { PopularMoviesComponent } from './movies/popular-movies/popular-movies.component';
import { InTheaterMoviesComponent } from './movies/in-theater-movies/in-theater-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HeaderComponent,
    AboutComponent,
    MoviesListComponent,
    MoviesComponent,
    MovieDetailComponent,
    SearchMovieComponent,
    PopularMoviesComponent,
    InTheaterMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
