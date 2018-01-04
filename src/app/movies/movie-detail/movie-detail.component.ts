import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  showvotes = false;
  subscription: Subscription;
  movie;
  recommendedMovies;
  showRecommended = false;

  constructor(private _moviesService: MoviesService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this._route.params.subscribe(
      (params : Params) => {
        this._moviesService.getMovie(params['id']).subscribe(
          (data) => {
            window.scrollTo(0,0);
            this.movie = data;
          }
        );
        this._moviesService.getRecommendedMovies(params['id']).subscribe(
          (data) => {
            this.recommendedMovies = data.results;
            if(this.recommendedMovies.length > 0){
              this.showRecommended = true;
            } else {
              this.showRecommended = false;
            }
          }
        )
      }
    );
  }

  showVotes() {
    this.showvotes = true;
  }

  hideVotes() {
    this.showvotes = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
