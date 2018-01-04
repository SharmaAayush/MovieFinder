import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  subscription: Subscription;
  searchStr: string;
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
        this.searchStr = params['searchStr'];
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
        this._moviesService.searchMovies(this.searchStr, this.page).subscribe(
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
      this._router.navigate(['/search-movie/'+this.searchStr+'/1']);
    }
  }
  
  preiousPage() {
    if(this.page == 1){
      window.scrollTo(0,0);
    } else{
      this.page--;
      this._router.navigate(['/search-movie/'+this.searchStr+'/'+this.page]);
    }
  }
  
  gotoPage(page: number) {
    if(page >= this.totalPages) {
      this.LastPage();
    } else if(page < 1) {
      this.firstPage();
    } else {
      this._router.navigate(['/search-movie/'+this.searchStr+'/'+page]);
    }
  }
  
  nextPage() {
    this.page++;
    if(this.page < this.totalPages) {
      this._router.navigate(['/search-movie/'+this.searchStr+'/'+this.page]);
    } else {
      this.LastPage();
    }
  }

  LastPage() {
    if(this.page == this.totalPages) {
      window.scrollTo(0,0);
    }else {
      this._router.navigate(['/search-movie/'+this.searchStr+'/'+this.totalPages]);
    }
  }

}
