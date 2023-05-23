import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}

  trendingMovieResult: any = [];
  bannerResult: any = [];
  actionMovieResult: any = [];
  comedyMovieResult: any = [];
  sciFyMovieResult: any = [];
  thrillerMovieResult: any = [];
  animationMovieResult: any = [];
  adventureMovieResult: any = [];
  documentaryMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.sciFyMovie();
    this.thrillerMovie();
    this.animationMovie();
    this.documentaryMovie();
  }

  // bannerData
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }

  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result, 'actionmovie#');
      this.actionMovieResult = result.results;
    });
  }

  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      console.log(result, 'comedymovie#');
      this.comedyMovieResult = result.results;
    });
  }
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      console.log(result, 'adventuremovie#');
      this.adventureMovieResult = result.results;
    });
  }

  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      console.log(result, ' documentaryMovie#');
      this.documentaryMovieResult = result.results;
    });
  }

  sciFyMovie() {
    this.service.fetchSciFyMovies().subscribe((result) => {
      console.log(result, 'sciFymovie#');
      this.sciFyMovieResult = result.results;
    });
  }

  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      console.log(result, 'thrillerMovie#');
      this.thrillerMovieResult = result.results;
    });
  }

  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      console.log(result, 'animationMovie#');
      this.animationMovieResult = result.results;
    });
  }
}
