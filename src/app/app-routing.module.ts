import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from "./about/about.component";
import { MoviesComponent } from "./movies/movies.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { SearchMovieComponent } from "./movies/search-movie/search-movie.component";
import { PopularMoviesComponent } from "./movies/popular-movies/popular-movies.component";
import { InTheaterMoviesComponent } from "./movies/in-theater-movies/in-theater-movies.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'search-movie/:searchStr/:page', component: SearchMovieComponent },
  { path: 'search-movie/:searchStr', redirectTo: 'search-movie/:searchStr/1', pathMatch: 'full' },
  { path: 'popular-movies/:page', component: PopularMoviesComponent },
  { path: 'popular-movies', redirectTo: 'popular-movies/1', pathMatch: 'full' },
  { path: 'inTheater-movies/:page', component: InTheaterMoviesComponent },
  { path: 'inTheater-movies', redirectTo: 'inTheater-movies/1', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}