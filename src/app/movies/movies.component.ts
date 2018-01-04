import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular;
  inTheater;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getPopular().subscribe(
      (data) => {
        this.popular = data.results;
      }
    );
    this._moviesService.getInTheaters().subscribe(
      (data) => {
        this.inTheater = data.results;
      }
    );
  }

}
