import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{
  getMovieVideoResult: any;
  getMovieCastResult: any;
  getMovieDetailResult: any;
  constructor(private service: MovieApiServiceService, private router:ActivatedRoute) { }


  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getParamId#');

    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }


  getMovie(id:any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result,"getMovieDataResult#");
      this.getMovieDetailResult = result;
    })
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result , 'getMovieVideo#');
      result.results.forEach((element:any) => {
        if (element.type == 'Trailer') {
          this.getMovieVideoResult = element.key;
        }
      });
    })
  }

  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      console.log(result, 'MovieCast#');
      this.getMovieCastResult = result.cast;

    })
  }
}
