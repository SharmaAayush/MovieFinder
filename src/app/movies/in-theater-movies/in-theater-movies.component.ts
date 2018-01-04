import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-in-theater-movies',
  templateUrl: './in-theater-movies.component.html',
  styleUrls: ['./in-theater-movies.component.css']
})
export class InTheaterMoviesComponent implements OnInit {
  subscription: Subscription;
  page: number;
  totalPages: number;
  movies;
  firstPageDisabled: boolean = false;
  preiousPageDisabled: boolean = false;
  nextPageDisabled: boolean = false;
  lastPageDisabled: boolean = false;

  constructor(private _moviesService: MoviesService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.subscription = this._route.params.subscribe(
      (params: Params) => {
        this.page = +params['page'];
        if(+params['page'] < 1) {
          this.firstPage();
        }
        if(this.page == 1) {
          this.firstPageDisabled = true;
          this.preiousPageDisabled = true;
        } else {
          this.firstPageDisabled = false;
          this.preiousPageDisabled = false;          
        }
        this._moviesService.getInTheatersMoies(this.page.toString()).subscribe(
          (data) => {
            window.scrollTo(0,0);
            this.totalPages = data.total_pages;
            if(this.page > this.totalPages) {
              this.LastPage();
            }
            if(this.page == this.totalPages) {
              this.lastPageDisabled = true;
              this.nextPageDisabled = true;
            }else {
              this.lastPageDisabled = false;
              this.nextPageDisabled = false;
            }
            this.movies = data.results;
          }
        )
      }
    );
  }

  firstPage() {
    if(this.page == 1){
      window.scrollTo(0,0);
    } else{
      this._router.navigate(['/inTheater-movies/1']);
    }
  }
  
  preiousPage() {
    if(this.page == 1){
      window.scrollTo(0,0);
    } else{
      this.page--;
      this._router.navigate(['/inTheater-movies/'+this.page]);
    }
  }
  
  gotoPage(page: number) {
    if(page >= this.totalPages) {
      this.LastPage();
    } else if(page < 1) {
      this.firstPage();
    } else {
      this._router.navigate(['/inTheater-movies/'+page]);
    }
  }
  
  nextPage() {
    this.page++;
    if(this.page < this.totalPages) {
      this._router.navigate(['/inTheater-movies/'+this.page]);
    } else {
      this.LastPage();
    }
  }

  LastPage() {
    if(this.page == this.totalPages) {
      window.scrollTo(0,0);
    }else {
      this._router.navigate(['/inTheater-movies/'+this.totalPages]);
    }
  }

}