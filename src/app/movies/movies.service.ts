import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MoviesService {
  apikey: string;

  constructor(private _jsonp: Jsonp) {
    this.apikey = '2931998c3a80d7806199320f76d65298';
    console.log('MoviesService Initialized...');
  }

  getRecommendedMovies(id: string){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'/recommendations?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }
  
  getPopular(){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/popular?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }
  
  getPopularMovies(page: string){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/popular?callback=JSONP_CALLBACK&api_key='+this.apikey+'&page='+page)
      .map(res => res.json());
  }

  getPopularTv(){
    return this._jsonp.get('https://api.themoviedb.org/3/tv/popular?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }
  
  getInTheaters(){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/now_playing?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }
  
  getInTheatersMoies(page: string){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/now_playing?callback=JSONP_CALLBACK&api_key='+this.apikey+'&page='+page)
      .map(res => res.json());
  }
  
  getTvOnAir(){
    return this._jsonp.get('https://api.themoviedb.org/3/tv/on_the_air?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }

  searchMovies(searchStr:string, page){
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey+'&page='+page)
      .map(res => res.json());
  }

  searchTv(searchStr:string){
    return this._jsonp.get('https://api.themoviedb.org/3/search/tv?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey)
      .map(res => res.json());
  }

  getMovie(id:string){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }

  getTv(id:string){
    return this._jsonp.get('https://api.themoviedb.org/3/tv/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());
  }
}